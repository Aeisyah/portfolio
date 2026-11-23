# ============================================================================
#  BUILD.PS1 — Gabungkan portfolio-editable/ menjadi SATU fail portfolio.html
# ----------------------------------------------------------------------------
#  Cara guna: klik kanan fail ini > "Run with PowerShell"
#             atau dalam terminal:  powershell -ExecutionPolicy Bypass -File build.ps1
#
#  Jalankan setiap kali anda selesai edit content.js / styles.css / index.html.
# ============================================================================

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$src  = Join-Path $root 'portfolio-editable'
$out  = Join-Path $root 'portfolio.html'

Write-Host ''
Write-Host '  Membina portfolio.html ...' -ForegroundColor Cyan

$html    = Get-Content (Join-Path $src 'index.html') -Raw -Encoding UTF8
$css     = Get-Content (Join-Path $src 'styles.css') -Raw -Encoding UTF8
$content = Get-Content (Join-Path $src 'content.js') -Raw -Encoding UTF8
$app     = Get-Content (Join-Path $src 'app.js')     -Raw -Encoding UTF8

# --- masukkan CSS ---
$html = $html.Replace(
  '<link rel="stylesheet" href="styles.css">',
  "<style>`n$css`n</style>")

# --- masukkan JS ---
$html = $html.Replace(
  '<script src="content.js"></script>',
  "<script>`n$content`n</script>")

$html = $html.Replace(
  '<script src="app.js"></script>',
  "<script>`n$app`n</script>")

# --- nota di bahagian atas fail ---
$note = @'
<!--
  ===========================================================================
  PORTFOLIO — FAIL TUNGGAL (standalone)
  CSS dan JavaScript telah digabungkan ke dalam fail ini.
  Klik dua kali untuk buka dalam browser, atau muat naik terus ke hosting.

  Untuk mengedit kandungan, gunakan folder "portfolio-editable" dan
  jalankan semula build.ps1 selepas selesai.
  ===========================================================================
-->
'@
$html = $html.Replace('<!DOCTYPE html>', "<!DOCTYPE html>`n$note")

# --- tulis keluar sebagai UTF-8 ---
[System.IO.File]::WriteAllText($out, $html, (New-Object System.Text.UTF8Encoding $false))

$kb = [math]::Round((Get-Item $out).Length / 1KB, 1)
Write-Host "  Siap: portfolio.html ($kb KB)" -ForegroundColor Green
Write-Host ''
