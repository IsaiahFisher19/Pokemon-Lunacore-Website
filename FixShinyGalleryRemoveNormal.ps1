param(
  [Parameter(Mandatory = $true)]
  [string]$WebsiteFolder
)

$ErrorActionPreference = "Stop"
$jsPath = Join-Path $WebsiteFolder "shiny-variants.js"

if (-not (Test-Path -LiteralPath $jsPath -PathType Leaf)) {
  throw "Missing file: $jsPath"
}

$content = Get-Content -LiteralPath $jsPath -Raw -Encoding UTF8

$content = [regex]::Replace(
  $content,
  '(?s)\s*const normalFront = mon\s*\?\s*`images/pokemon/\$\{shinyNormalizeId\(mon\.imageId \|\| mon\.id\)\}-front\.png`\s*:\s*"";\s*',
  "`r`n"
)

$content = [regex]::Replace(
  $content,
  '(?s)\s*\$\{normalFront\s*\?\s*`.*?<span>Normal</span>.*?`\s*:\s*""\}\s*',
  "`r`n"
)

$content = $content -replace 'Shiny Follower', 'Shiny Overworld'

if ($content -match 'follower:' -and $content -notmatch 'entry\.follower') {
  $content = $content -replace `
    '(\$\{shinyImageMarkup\(entry\.icon,\s*"Shiny Icon"\)\})', `
    '$1' + "`r`n      " + '${shinyImageMarkup(entry.follower, "Shiny Overworld")}'
}

$content = [regex]::Replace(
  $content,
  '(?s)\s*\.normal-reference\s*\{.*?\}\s*',
  "`r`n"
)

$utf8Bom = New-Object System.Text.UTF8Encoding($true)
[System.IO.File]::WriteAllText($jsPath, $content, $utf8Bom)

Write-Host ""
Write-Host "Patched shiny-variants.js successfully."
Write-Host "Removed the Normal sprite card."
Write-Host "Follower sprites are labeled Shiny Overworld."
Write-Host "Refresh the browser with Ctrl+F5."
