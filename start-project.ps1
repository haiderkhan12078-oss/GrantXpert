Set-Location $PSScriptRoot
if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Node.js is not installed or not in PATH." -ForegroundColor Red
  Write-Host "Install Node.js LTS from https://nodejs.org/ and run this file again."
  Read-Host "Press Enter to close"
  exit 1
}
if (-not (Test-Path "node_modules")) {
  Write-Host "First run: installing packages..." -ForegroundColor Cyan
  npm install
  if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
}
npm run dev
