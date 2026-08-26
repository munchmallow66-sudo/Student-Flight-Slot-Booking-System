# serve.ps1 - Tiny static file web server for this project (no external installs)
# Usage:  powershell -NoProfile -ExecutionPolicy Bypass -File serve.ps1 [-Port 8000]
param(
  [int]$Port = 8000
)

$ErrorActionPreference = 'Continue'
$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }
$statusFile = Join-Path $env:TEMP 'tif-serve-status.txt'

$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.htm'  = 'text/html; charset=utf-8'
  '.js'   = 'text/javascript; charset=utf-8'
  '.mjs'  = 'text/javascript; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'
  '.map'  = 'application/json'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.gif'  = 'image/gif'
  '.svg'  = 'image/svg+xml'
  '.webp' = 'image/webp'
  '.ico'  = 'image/x-icon'
  '.txt'  = 'text/plain; charset=utf-8'
  '.md'   = 'text/plain; charset=utf-8'
  '.pdf'  = 'application/pdf'
}

function Get-MimeType([string]$p) {
  $ext = [System.IO.Path]::GetExtension($p).ToLower()
  if ($mime.ContainsKey($ext)) { return $mime[$ext] }
  return 'application/octet-stream'
}

$listener = New-Object System.Net.HttpListener
try {
  $listener.Prefixes.Add("http://localhost:$Port/")
  $listener.Start()
} catch {
  Set-Content -Path $statusFile -Value ("ERROR: " + $_.Exception.Message)
  exit 1
}
Set-Content -Path $statusFile -Value "RUNNING port=$Port root=$root pid=$PID at $(Get-Date -Format o)"

try {
  while ($true) {
    $ctx = $listener.GetContext()
    $req = $ctx.Request
    $res = $ctx.Response
    try {
      $decoded = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath)
      if ($decoded -eq '/' -or $decoded -eq '') { $decoded = '/index.html' }
      $rel = $decoded.TrimStart('/').Replace('/', '\')
      $full = [System.IO.Path]::GetFullPath((Join-Path $root $rel))
      $rootWithSep = $root.TrimEnd('\') + '\'
      if (-not $full.StartsWith($rootWithSep, [System.StringComparison]::OrdinalIgnoreCase)) {
        $res.StatusCode = 403
      } elseif ([System.IO.File]::Exists($full)) {
        $bytes = [System.IO.File]::ReadAllBytes($full)
        $res.StatusCode = 200
        $res.ContentType = Get-MimeType $full
        $res.ContentLength64 = $bytes.Length
        $res.OutputStream.Write($bytes, 0, $bytes.Length)
      } else {
        $res.StatusCode = 404
      }
    } catch {
      $res.StatusCode = 500
    } finally {
      try { $res.Close() } catch { }
    }
  }
} finally {
  $listener.Stop()
}