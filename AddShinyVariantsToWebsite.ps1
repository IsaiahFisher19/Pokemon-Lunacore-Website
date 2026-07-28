param(
  [Parameter(Mandatory = $true)]
  [string]$GameFolder,

  [Parameter(Mandatory = $true)]
  [string]$WebsiteFolder
)

$ErrorActionPreference = "Stop"

function Normalize-Id {
  param([string]$Value)

  $result = $Value.ToLowerInvariant()
  $result = $result -replace "_", "-"
  $result = $result -replace "\s+", "-"
  $result = $result -replace "[^a-z0-9\-]", ""
  $result = $result -replace "-+", "-"
  return $result.Trim("-")
}

function Find-FirstFolder {
  param([string[]]$Candidates)

  foreach ($relative in $Candidates) {
    $candidate = Join-Path $GameFolder $relative
    if (Test-Path -LiteralPath $candidate -PathType Container) {
      return $candidate
    }
  }

  return $null
}

function Find-PbsFile {
  param([string[]]$Names)

  $pbsFolder = Join-Path $GameFolder "PBS"
  if (-not (Test-Path -LiteralPath $pbsFolder -PathType Container)) {
    return $null
  }

  foreach ($name in $Names) {
    $exact = Join-Path $pbsFolder $name
    if (Test-Path -LiteralPath $exact -PathType Leaf) {
      return $exact
    }
  }

  foreach ($name in $Names) {
    $stem = [System.IO.Path]::GetFileNameWithoutExtension($name)
    $match = Get-ChildItem -LiteralPath $pbsFolder -File |
      Where-Object { $_.BaseName -like "$stem*" } |
      Select-Object -First 1

    if ($match) {
      return $match.FullName
    }
  }

  return $null
}

function Add-AllowedId {
  param(
    [System.Collections.Generic.HashSet[string]]$Set,
    [string]$Value
  )

  $normalized = Normalize-Id $Value
  if ($normalized -and $normalized -ne "000") {
    [void]$Set.Add($normalized)
  }
}

function Read-FakemonIds {
  param(
    [string]$FilePath,
    [System.Collections.Generic.HashSet[string]]$Set
  )

  if (-not $FilePath) { return }

  foreach ($line in Get-Content -LiteralPath $FilePath -Encoding UTF8) {
    if ($line -match '^\s*\[([A-Za-z0-9_]+)\]\s*$') {
      Add-AllowedId $Set $matches[1]
    }
  }
}

function Read-InflamousDexIds {
  param(
    [string]$FilePath,
    [System.Collections.Generic.HashSet[string]]$Set
  )

  if (-not $FilePath) { return }

  $insideInflamousDex = $false

  foreach ($rawLine in Get-Content -LiteralPath $FilePath -Encoding UTF8) {
    $line = $rawLine.Trim()

    if ($line -match '^\[(\d+)\]$') {
      $insideInflamousDex = ($matches[1] -eq "0")
      continue
    }

    if (-not $insideInflamousDex) { continue }
    if (-not $line -or $line.StartsWith("#")) { continue }

    if ($line -match '^([A-Za-z0-9_]+)$') {
      Add-AllowedId $Set $matches[1]
    }
  }
}

function Read-CustomRegionalFormIds {
  param(
    [string]$FilePath,
    [System.Collections.Generic.HashSet[string]]$Set,
    [System.Collections.Generic.HashSet[string]]$BaseFakemonIds
  )

  if (-not $FilePath) { return }

  $sections = Get-Content -LiteralPath $FilePath -Raw -Encoding UTF8 -ErrorAction Stop

  # Split before each PBS section header.
  $blocks = [regex]::Split($sections, '(?m)(?=^\s*\[[A-Za-z0-9_]+\s*,\s*\d+\]\s*$)')

  foreach ($block in $blocks) {
    if ($block -notmatch '(?m)^\s*\[([A-Za-z0-9_]+)\s*,\s*(\d+)\]\s*$') {
      continue
    }

    $speciesId = $matches[1]
    $formNumber = $matches[2]
    $baseId = Normalize-Id $speciesId

    # Do not add battle/alternate forms for Fakemon already represented by
    # their normal species entry. Example: Aloncole's Superheated battle form.
    if ($BaseFakemonIds.Contains($baseId)) {
      continue
    }

    # Only include separate regional forms for existing official species.
    # Inflamous forms and other custom Generation 0 forms qualify.
    $isInflamous = $block -match '(?im)^\s*FormName\s*=\s*.*Inflamous.*$'
    $isCustomGen = $block -match '(?im)^\s*Generation\s*=\s*0\s*$'

    if ($isInflamous -or $isCustomGen) {
      Add-AllowedId $Set "$speciesId-$formNumber"
    }
  }
}

function Test-AllowedSprite {
  param(
    [string]$ImageId,
    [System.Collections.Generic.HashSet[string]]$AllowedIds
  )

  if ($AllowedIds.Contains($ImageId)) {
    return $true
  }

  # Include male/female sprite variations belonging to an allowed Pokémon/form.
  foreach ($allowed in $AllowedIds) {
    if ($ImageId -eq "$allowed-female" -or
        $ImageId -eq "$allowed-male") {
      return $true
    }
  }

  return $false
}

function Copy-ShinySprites {
  param(
    [string[]]$CandidateFolders,
    [string]$Suffix,
    [System.Collections.Generic.HashSet[string]]$AllowedIds
  )

  $sourceFolder = Find-FirstFolder $CandidateFolders
  $found = @{}

  if (-not $sourceFolder) {
    Write-Host "No shiny $Suffix folder found."
    return $found
  }

  Get-ChildItem -LiteralPath $sourceFolder -File -Recurse |
    Where-Object { $_.Extension -match '^\.(png|gif|jpg|jpeg|webp)$' } |
    ForEach-Object {
      $imageId = Normalize-Id $_.BaseName

      if (-not (Test-AllowedSprite $imageId $AllowedIds)) {
        return
      }

      $destinationName = "$imageId-shiny-$Suffix$($_.Extension.ToLowerInvariant())"
      $destinationPath = Join-Path $outputImages $destinationName

      Copy-Item -LiteralPath $_.FullName -Destination $destinationPath -Force
      $found[$imageId] = $destinationName
    }

  Write-Host "Copied $($found.Count) filtered shiny $Suffix sprites from:"
  Write-Host "  $sourceFolder"
  return $found
}

if (-not (Test-Path -LiteralPath $GameFolder -PathType Container)) {
  throw "Game folder not found: $GameFolder"
}

if (-not (Test-Path -LiteralPath $WebsiteFolder -PathType Container)) {
  throw "Website folder not found: $WebsiteFolder"
}

$pokedexHtml  = Join-Path $WebsiteFolder "pokedex.html"
$pokedexJs    = Join-Path $WebsiteFolder "pokedex.js"
$outputJs     = Join-Path $WebsiteFolder "shiny-variants.js"
$outputImages = Join-Path $WebsiteFolder "images\pokemon"

if (-not (Test-Path -LiteralPath $pokedexHtml)) {
  throw "Missing website file: $pokedexHtml"
}

if (-not (Test-Path -LiteralPath $pokedexJs)) {
  throw "Missing website file: $pokedexJs"
}

New-Item -ItemType Directory -Force -Path $outputImages | Out-Null

$fakemonFile = Find-PbsFile @(
  "pokemon_fakemon.txt",
  "pokemon_fakemon(1).txt"
)

$regionalDexFile = Find-PbsFile @(
  "regional_dexes.txt",
  "regional_dexes(3).txt"
)

$formsFile = Find-PbsFile @(
  "pokemon_forms.txt",
  "pokemon_forms(1).txt"
)

$allowedIds = New-Object "System.Collections.Generic.HashSet[string]"
$baseFakemonIds = New-Object "System.Collections.Generic.HashSet[string]"

Read-FakemonIds $fakemonFile $allowedIds
Read-FakemonIds $fakemonFile $baseFakemonIds
Read-InflamousDexIds $regionalDexFile $allowedIds
Read-CustomRegionalFormIds $formsFile $allowedIds $baseFakemonIds

if ($allowedIds.Count -eq 0) {
  throw "No allowed Pokémon were found in pokemon_fakemon.txt, Inflamous Dex [0], or custom regional forms."
}

Write-Host "Allowed Pokémon/form sprite IDs: $($allowedIds.Count)"

# Delete shiny gallery images generated by older runs. This removes the official
# Pokémon that were copied previously, while leaving normal website sprites alone.
Get-ChildItem -LiteralPath $outputImages -File -ErrorAction SilentlyContinue |
  Where-Object {
    $_.Name -match '-shiny-(front|back|icon|follower)\.(png|gif|jpg|jpeg|webp)$'
  } |
  Remove-Item -Force

$front = Copy-ShinySprites @(
  "Graphics\Pokemon\Front shiny",
  "Graphics\Pokemon\Front Shiny",
  "Graphics\Pokemon\Shiny\Front",
  "Graphics\Pokemon\Shiny Front"
) "front" $allowedIds

$back = Copy-ShinySprites @(
  "Graphics\Pokemon\Back shiny",
  "Graphics\Pokemon\Back Shiny",
  "Graphics\Pokemon\Shiny\Back",
  "Graphics\Pokemon\Shiny Back"
) "back" $allowedIds

$icon = Copy-ShinySprites @(
  "Graphics\Pokemon\Icons shiny",
  "Graphics\Pokemon\Icon shiny",
  "Graphics\Pokemon\Icons Shiny",
  "Graphics\Pokemon\Shiny\Icons",
  "Graphics\Pokemon\Shiny\Icon"
) "icon" $allowedIds

$follower = Copy-ShinySprites @(
  "Graphics\Characters\Followers shiny",
  "Graphics\Characters\Followers Shiny",
  "Graphics\Characters\Shiny Followers",
  "Graphics\Characters\Followers\Shiny"
) "follower" $allowedIds

$allIds = New-Object "System.Collections.Generic.HashSet[string]"
foreach ($key in $front.Keys) { [void]$allIds.Add($key) }
foreach ($key in $back.Keys)  { [void]$allIds.Add($key) }
foreach ($key in $icon.Keys)  { [void]$allIds.Add($key) }
foreach ($key in $follower.Keys) { [void]$allIds.Add($key) }

$rows = @()
foreach ($id in ($allIds | Sort-Object)) {
  $frontFile = if ($front.ContainsKey($id)) { $front[$id] } else { "" }
  $backFile = if ($back.ContainsKey($id)) { $back[$id] } else { "" }
  $iconFile = if ($icon.ContainsKey($id)) { $icon[$id] } else { "" }
  $rows += @"
  { imageId: "$id", front: "$frontFile", back: "$backFile", icon: "$iconFile" }
"@
}
$dataRows = $rows -join ",`r`n"

$javascript = @'
// Pokémon Lunacore — Shiny Variant Gallery v3
const shinyVariantFiles = [
__SHINY_ROWS__
];

function shinyNormalizeId(value) {
  return String(value || "").toLowerCase().replace(/_/g, "-").replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").replace(/-+/g, "-").replace(/^-|-$/g, "");
}

function allWebsitePokemon() {
  const main = typeof pokemonData !== "undefined" ? pokemonData : [];
  const forms = typeof regionalFormData !== "undefined" ? regionalFormData : [];
  return [...main, ...forms];
}

function findPokemonForShiny(imageId) {
  return allWebsitePokemon().find(mon => shinyNormalizeId(mon.imageId || mon.id) === shinyNormalizeId(imageId));
}

function shinyImageMarkup(fileName, label) {
  if (!fileName) return "";
  return `<div class="shiny-sprite-box"><img src="images/pokemon/${fileName}" alt="${label}" loading="lazy" onerror="this.closest('.shiny-sprite-box').style.display='none';"><span>${label}</span></div>`;
}

function createShinyCard(entry) {
  const mon = findPokemonForShiny(entry.imageId);
  const displayName = mon ? mon.name : entry.imageId;
  const normalFront = mon ? `images/pokemon/${shinyNormalizeId(mon.imageId || mon.id)}-front.png` : "";
  const article = document.createElement("article");
  article.className = "dex-card shiny-card";
  article.innerHTML = `
    <div class="dex-card-header"><span class="dex-number shiny-label">★ Shiny Variant</span><h3>${displayName}</h3></div>
    ${mon && Array.isArray(mon.types) ? `<div class="type-list">${mon.types.map(type => `<span class="type-badge type-${type.toLowerCase()}">${type}</span>`).join("")}</div>` : ""}
    <div class="shiny-comparison">
      ${normalFront ? `<div class="shiny-sprite-box normal-reference"><img src="${normalFront}" alt="${displayName} normal front sprite" loading="lazy" onerror="this.closest('.normal-reference').style.display='none';"><span>Normal</span></div>` : ""}
      ${shinyImageMarkup(entry.front, "Shiny Front")}
      ${shinyImageMarkup(entry.back, "Shiny Back")}
      ${shinyImageMarkup(entry.icon, "Shiny Icon")}
      ${shinyImageMarkup(entry.follower, "Shiny Overworld")}
    </div>`;
  return article;
}

function ensureShinySection() {
  let section = document.getElementById("shinyVariantsSection");
  if (section) return section;
  const main = document.querySelector("main");
  if (!main) return null;
  section = document.createElement("section");
  section.id = "shinyVariantsSection";
  section.innerHTML = `<div class="shiny-section-heading"><div><h2>Shiny Variants</h2><p>Alternate-color Pokémon currently available in Pokémon Lunacore. Only variants with completed shiny artwork are displayed.</p></div><span class="shiny-count" id="shinyVariantCount"></span></div><div id="shinyVariantsGrid" class="dex-grid"></div>`;
  main.appendChild(section);
  return section;
}

function addShinyStyles() {
  if (document.getElementById("lunacoreShinyStyles")) return;
  const style = document.createElement("style");
  style.id = "lunacoreShinyStyles";
  style.textContent = `
    #shinyVariantsSection{margin-top:3rem;padding-top:2.5rem;border-top:1px solid rgba(255,255,255,.14)}
    .shiny-section-heading{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;margin-bottom:1.5rem}
    .shiny-count{display:inline-flex;align-items:center;white-space:nowrap;border:1px solid rgba(255,215,90,.45);border-radius:999px;padding:.4rem .75rem;color:#ffe28a;background:rgba(255,215,90,.08);font-size:.9rem}
    .shiny-card{border-color:rgba(255,215,90,.28)} .shiny-label{color:#ffe28a;white-space:nowrap}
    .shiny-comparison{display:grid;grid-template-columns:repeat(auto-fit,minmax(105px,1fr));gap:.75rem;margin-top:1rem}
    .shiny-sprite-box{min-height:132px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;padding:.75rem;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.035);text-align:center}
    .shiny-sprite-box img{max-width:96px;max-height:96px;image-rendering:pixelated;object-fit:contain}.shiny-sprite-box span{font-size:.82rem;opacity:.82}.normal-reference{opacity:.78}
    @media(max-width:600px){.shiny-section-heading{flex-direction:column}}
  `;
  document.head.appendChild(style);
}

function renderShinyVariants(query = "") {
  const section = ensureShinySection();
  if (!section) return;
  const grid = section.querySelector("#shinyVariantsGrid");
  const count = section.querySelector("#shinyVariantCount");
  const q = query.trim().toLowerCase();
  grid.innerHTML = "";
  const matches = shinyVariantFiles.filter(entry => {
    const mon = findPokemonForShiny(entry.imageId);
    return [entry.imageId, mon ? mon.id : "", mon ? mon.name : "", mon ? mon.category : "", mon && Array.isArray(mon.types) ? mon.types.join(" ") : "", "shiny variant"].join(" ").toLowerCase().includes(q);
  });
  count.textContent = `${matches.length} variant${matches.length === 1 ? "" : "s"}`;
  if (!matches.length) { grid.innerHTML = `<p class="no-results">No shiny variants matched your search.</p>`; return; }
  matches.forEach(entry => grid.appendChild(createShinyCard(entry)));
}

document.addEventListener("DOMContentLoaded", () => {
  addShinyStyles();
  renderShinyVariants();
  const search = document.getElementById("dexSearch");
  if (search) search.addEventListener("input", () => renderShinyVariants(search.value));
});
'@

$javascript = $javascript.Replace("__SHINY_ROWS__", $dataRows)
$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($outputJs, $javascript, $utf8)

$html = Get-Content -LiteralPath $pokedexHtml -Raw -Encoding UTF8
if ($html -notmatch 'shiny-variants\.js') {
  $replacement = '<script src="pokedex.js"></script>' + "`r`n  " + '<script src="shiny-variants.js"></script>'
  $html = [regex]::Replace($html, '<script\s+src=["'']pokedex\.js["'']\s*>\s*</script>', $replacement, 1)
  [System.IO.File]::WriteAllText($pokedexHtml, $html, $utf8)
}

Write-Host ""
Write-Host "Shiny website section updated successfully."
Write-Host "Detected shiny variants: $($allIds.Count)"
Write-Host "Updated: $pokedexHtml"
Write-Host "Created: $outputJs"
Write-Host "Sprites copied to: $outputImages"
