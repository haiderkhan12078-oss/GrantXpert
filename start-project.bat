@echo off
setlocal
cd /d "%~dp0"
title GrantXpert React - Local Server

echo.
echo =============================================
echo   GrantXpert React - Starting Project
ECHO =============================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or is not available in PATH.
  echo Install Node.js LTS from https://nodejs.org/ then run this file again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo First run: installing project packages...
  call npm install
  if errorlevel 1 (
    echo.
    echo npm install failed. Check your internet connection and run this file again.
    pause
    exit /b 1
  )
)

echo.
echo Starting website at http://localhost:3000
call npm run dev
endlocal
