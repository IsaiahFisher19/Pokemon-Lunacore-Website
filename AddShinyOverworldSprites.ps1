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

$sourceFolder = Join-Path $GameFolder "Graphics\Characters\Followers shiny"
$imagesFolder = Join-Path $WebsiteFolder "images\pokemon"
$jsPath = Join-Path $WebsiteFolder "shiny-variants.js"

if (-not (Test-Path -LiteralPath $sourceFolder -PathType Container)) {
  throw "Follower shiny folder not found: $sourceFolder"
}

if (-not (Test-Path -LiteralPath $imagesFolder -PathType Container)) {
  throw "Website image folder not found: $imagesFolder"
}

if (-not (Test-Path -LiteralPath $jsPath -PathType Leaf)) {
  throw "Missing file: $jsPath"
}

# Only add overworld sprites for Pokemon already displayed in the shiny gallery.
$galleryIds = New-Object "System.Collections.Generic.HashSet[string]"

Get-ChildItem -LiteralPath $imagesFolder -File |
  Where-Object {
    $_.Name -match '^(.*)-shiny-(front|back|icon)\.(png|gif|jpg|jpeg|webp)$'
  } |
  ForEach-Object {
    $id = Normalize-Id $matches[1]
    if ($id) {
      [void]$galleryIds.Add($id)
    }
  }

$copied = @{}

Get-ChildItem -LiteralPath $sourceFolder -File -Recurse |
  Where-Object {
    $_.Extension -match '^\.(png|gif|jpg|jpeg|webp)$'
  } |
  ForEach-Object {
    $id = Normalize-Id $_.BaseName

    if (-not $galleryIds.Contains($id)) {
      return
    }

    $destinationName = "$id-shiny-follower$($_.Extension.ToLowerInvariant())"
    $destinationPath = Join-Path $imagesFolder $destinationName

    Copy-Item -LiteralPath $_.FullName -Destination $destinationPath -Force
    $copied[$id] = $destinationName
  }

# Rebuild only the data list from sprite files that actually exist.
$entries = @{}

Get-ChildItem -LiteralPath $imagesFolder -File |
  Where-Object {
    $_.Name -match '^(.*)-shiny-(front|back|icon|follower)\.(png|gif|jpg|jpeg|webp)$'
  } |
  ForEach-Object {
    $id = Normalize-Id $matches[1]
    $kind = $matches[2].ToLowerInvariant()

    if (-not $id -or $id -eq "000") {
      return
    }

    if (-not $entries.ContainsKey($id)) {
      $entries[$id] = @{
        front = ""
        back = ""
        icon = ""
        follower = ""
      }
    }

    $entries[$id][$kind] = $_.Name
  }

$rows = @()

foreach ($id in ($entries.Keys | Sort-Object)) {
  $entry = $entries[$id]

  $rows += @"
  {
    imageId: "$id",
    front: "$($entry.front)",
    back: "$($entry.back)",
    icon: "$($entry.icon)",
    follower: "$($entry.follower)"
  }
"@
}

$dataRows = $rows -join ",`r`n"
$content = Get-Content -LiteralPath $jsPath -Raw -Encoding UTF8

$content = [regex]::Replace(
  $content,
  '(?s)const shinyVariantFiles\s*=\s*\[.*?\];',
  "const shinyVariantFiles = [`r`n$dataRows`r`n];"
)

# Make sure the overworld image is rendered after the icon.
if ($content -notmatch 'entry\.follower') {
  $content = $content -replace `
    '(\$\{shinyImageMarkup\(entry\.icon,\s*"Shiny Icon"\)\})', `
    '$1' + "`r`n      " + '${shinyImageMarkup(entry.follower, "Shiny Overworld")}'
}
else {
  $content = $content -replace 'Shiny Follower', 'Shiny Overworld'
}

$utf8Bom = New-Object System.Text.UTF8Encoding($true)
[System.IO.File]::WriteAllText($jsPath, $content, $utf8Bom)

Write-Host ""
Write-Host "Shiny overworld sprites copied: $($copied.Count)"
Write-Host "Gallery entries rebuilt: $($rows.Count)"
Write-Host ""
Write-Host "Refresh the browser with Ctrl+F5."
