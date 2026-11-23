@echo off
REM ============================================================
REM  BUILD.bat - Klik dua kali fail ini untuk bina portfolio.html
REM  Tiada arahan perlu ditaip. Tiada AI diperlukan.
REM ============================================================

cd /d "%~dp0"

echo.
echo  ============================================
echo    MEMBINA PORTFOLIO
echo  ============================================
echo.

powershell -ExecutionPolicy Bypass -NoProfile -File "%~dp0build.ps1"

if errorlevel 1 (
  echo.
  echo  ---------------------------------------------
  echo   ADA MASALAH. Periksa mesej ralat di atas.
  echo  ---------------------------------------------
) else (
  echo.
  echo  ---------------------------------------------
  echo   SIAP. Buka portfolio.html untuk lihat hasil.
  echo   Jika perubahan tak nampak: Ctrl + Shift + R
  echo  ---------------------------------------------
)

echo.
echo  Tekan mana-mana kekunci untuk tutup...
pause >nul
