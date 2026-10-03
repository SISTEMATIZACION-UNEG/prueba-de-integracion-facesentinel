param (
    [string]$ServerUser = "uneg",
    [string]$ServerHost = "150.188.128.20",
    [int]$ServerPort = 2220,
    [string]$RemoteDir = "/home/uneg/facesentinel-integration-client"
)

$ErrorActionPreference = "Stop"

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "[*] DESPLIEGUE REMOTO: Sistema Cliente SSO FaceSentinel" -ForegroundColor Cyan
Write-Host "    Servidor Destino: $ServerUser@$ServerHost en puerto $ServerPort" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

# 1. Compilar el Frontend Vite
Write-Host "`n[1/4] Compilando Frontend Vite..." -ForegroundColor Yellow
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if (-not $ScriptDir) { $ScriptDir = Get-Location }

$ClientDir = Join-Path $ScriptDir "client"
Push-Location $ClientDir
try {
    npm run build
} finally {
    Pop-Location
}

# 2. Crear archivo comprimido tar.gz (formato nativo Linux con rutas relativas)
Write-Host "`n[2/4] Empaquetando archivos del proyecto con tar.gz..." -ForegroundColor Yellow
$TarFile = Join-Path $env:TEMP "facesentinel-deploy.tar.gz"
if (Test-Path $TarFile) { Remove-Item -Force $TarFile }

Push-Location $ScriptDir
try {
    tar -czf $TarFile server client/dist package.json package-lock.json Dockerfile docker-compose.yml .env.example
} finally {
    Pop-Location
}
Write-Host "    Archivo empaquetado creado: $TarFile" -ForegroundColor Green

# 3. Transferir al servidor remoto por SCP
Write-Host "`n[3/4] Transfiriendo paquete al servidor remoto via SCP (puerto $ServerPort)..." -ForegroundColor Yellow
Write-Host "    (Introduce la contrasena de $ServerUser si es solicitada)" -ForegroundColor Gray

$SshTarget = "$ServerUser@$ServerHost"
$ScpDest = "$ServerUser@$ServerHost`:$RemoteDir/deploy.tar.gz"

# Crear directorio remoto
& ssh -p $ServerPort $SshTarget "mkdir -p $RemoteDir"

# Subir archivo tar.gz
& scp -P $ServerPort $TarFile $ScpDest
if ($LASTEXITCODE -ne 0) {
    Write-Host "Error en la transferencia SCP." -ForegroundColor Red
    exit 1
}

# 4. Descomprimir e iniciar servicio con Docker en el servidor de forma segura (sin apagar otros servicios)
Write-Host "`n[4/4] Levantando contenedor Docker en el servidor remoto..." -ForegroundColor Yellow

$RemoteCommands = "cd $RemoteDir && tar -xzf deploy.tar.gz && [ -f .env ] || cp .env.example .env && mkdir -p data && (docker compose up -d --build facesentinel-client 2>/dev/null || docker-compose up -d --build facesentinel-client) && echo '--- ESTADO DEL CONTENEDOR CLIENTE ---' && docker ps | grep facesentinel-client && echo '--- LOGS DEL SERVIDOR ---' && sleep 2 && docker logs --tail 15 facesentinel-integration-client"

& ssh -p $ServerPort $SshTarget $RemoteCommands

Write-Host "`n==========================================================" -ForegroundColor Green
Write-Host "[OK] DESPLIEGUE COMPLETADO EXITOSAMENTE!" -ForegroundColor Green
Write-Host "     Accede por Túnel SSH: http://localhost:3005" -ForegroundColor Cyan
Write-Host "     Accede por LAN/VPN:   http://10.25.101.20:3005" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Green
