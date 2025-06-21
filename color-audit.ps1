# PowerShell script to find hardcoded color values in .tsx and .css files
# Usage: Run in project root. Outputs results to color-usage.txt
Get-ChildItem -Path .\src -Recurse -Include *.jsx,*.js,*.css |
  Select-String -Pattern '#[0-9a-fA-F]{3,8}' |
  Out-File -Encoding utf8 color-usage.txt
Write-Host 'Color usage written to color-usage.txt'
