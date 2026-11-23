# ============================================================================
#  BUILD-DEPLOY.ps1
#  Sediakan folder "docs" yang boleh terus dinaikkan ke hosting.
# ----------------------------------------------------------------------------
#  Folder docs mengandungi:
#     index.html                 (portfolio, dinamakan semula supaya jadi
#                                 halaman utama tapak)
#     guides/pos2go-guide.html   (panduan interaktif)
#     apk/*.apk                  (fail pemasang Android)
#
#  Fail APK DISERTAKAN secara lalai, jadi folder docs jadi ~474 MB.
#  Kalau hosting anda menolak fail besar (Netlify had 100 MB sefail,
#  Cloudflare Pages 25 MB), set $IncludeApk = $false dan isi $ApkBase
#  dengan alamat GitHub Releases.
# ============================================================================

# --- TETAPAN ---------------------------------------------------------------
# Dua cara menghidangkan fail APK:
#
#   1. $IncludeApk = $true    folder apk/ disalin terus ke dalam docs/
#                             (sesuai untuk hosting sendiri, USB, pratonton)
#
#   2. $ApkBase = '<url>'     butang APK menunjuk ke hosting luar dan fail
#                             TIDAK disalin (sesuai untuk hosting percuma)
#
# $ApkBase mengatasi $IncludeApk kalau kedua-duanya diisi.
# Kosongkan kedua-duanya = butang APK disembunyikan sepenuhnya.
#
# Contoh:
# $ApkBase = 'https://github.com/Aeisyah/portfolio/releases/download/v1'
$IncludeApk = $false
$ApkBase    = 'https://github.com/Aeisyah/portfolio/releases/download/v1'
# ---------------------------------------------------------------------------

$ErrorActionPreference = 'Stop'
$root   = Split-Path -Parent $MyInvocation.MyCommand.Path
$outDir = Join-Path $root 'docs'

Write-Host ''
Write-Host '  Membina portfolio.html dahulu...' -ForegroundColor Cyan
& powershell -ExecutionPolicy Bypass -File (Join-Path $root 'build.ps1')

# --- sediakan folder bersih -------------------------------------------------
# .git dan .gitignore DIKEKALKAN; semua fail lain dibuang dan dijana semula.
if (Test-Path $outDir) {
  Get-ChildItem $outDir -Force |
    Where-Object { $_.Name -ne '.git' -and $_.Name -ne '.gitignore' } |
    Remove-Item -Recurse -Force
}
else {
  New-Item -ItemType Directory -Path $outDir | Out-Null
}
New-Item -ItemType Directory -Path (Join-Path $outDir 'guides') | Out-Null

# --- salin panduan ---
Copy-Item (Join-Path $root 'guides\pos2go-guide.html') (Join-Path $outDir 'guides\pos2go-guide.html')

# --- .nojekyll: beritahu GitHub Pages jangan proses tapak ini dengan Jekyll ---
New-Item -ItemType File -Path (Join-Path $outDir '.nojekyll') -Force | Out-Null

# --- salin portfolio sebagai index.html, laraskan tetapan APK ---
$html = Get-Content (Join-Path $root 'portfolio.html') -Raw -Encoding UTF8

if (-not [string]::IsNullOrWhiteSpace($ApkBase)) {
  # Cara 2 - butang APK menunjuk ke hosting luar, fail tidak disalin.
  $clean = $ApkBase.TrimEnd('/')
  $html  = $html.Replace("apkBase: ''", "apkBase: '$clean'")
  $apkNote = "butang APK menunjuk ke $clean"
}
elseif ($IncludeApk) {
  # Cara 1 - salin folder apk/ terus ke dalam docs/.
  $apkSrc = Join-Path $root 'apk'
  if (Test-Path $apkSrc) {
    Write-Host '  Menyalin fail APK (beberapa ratus MB, sabar sekejap)...' -ForegroundColor Cyan
    Copy-Item $apkSrc (Join-Path $outDir 'apk') -Recurse
    $n = (Get-ChildItem (Join-Path $outDir 'apk') -File).Count
    $apkNote = "$n fail APK disalin ke docs\apk"
  }
  else {
    $html = $html.Replace('showApk: true', 'showApk: false')
    $apkNote = 'folder apk/ tidak dijumpai - butang APK disembunyikan'
  }
}
else {
  $html = $html.Replace('showApk: true', 'showApk: false')
  $apkNote = 'butang APK disembunyikan'
}

[System.IO.File]::WriteAllText(
  (Join-Path $outDir 'index.html'),
  $html,
  (New-Object System.Text.UTF8Encoding $false))

# --- ringkasan ---
$size = [math]::Round(((Get-ChildItem $outDir -Recurse -File | Measure-Object Length -Sum).Sum / 1MB), 2)

Write-Host ''
Write-Host '  ============================================' -ForegroundColor Green
Write-Host "   Folder docs siap - $size MB" -ForegroundColor Green
Write-Host "   $apkNote" -ForegroundColor Green
Write-Host '  ============================================' -ForegroundColor Green
Write-Host ''
Write-Host '  Seterusnya - hantar ke GitHub Pages:'
Write-Host '    git add -A; git commit -m "kemaskini"; git push'
Write-Host ''
