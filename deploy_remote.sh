#!/usr/bin/env bash
# Script de despliegue remoto para Linux / macOS / WSL
# Servidor: uneg@150.188.128.20:2220

set -e

SERVER_USER="uneg"
SERVER_HOST="150.188.128.20"
SERVER_PORT=2220
REMOTE_DIR="/home/uneg/facesentinel-integration-client"

echo "=========================================================="
echo "🚀 DESPLIEGUE REMOTO: Sistema Cliente SSO FaceSentinel"
echo "   Servidor Destino: $SERVER_USER@$SERVER_HOST:$SERVER_PORT"
echo "=========================================================="

# 1. Compilar Frontend Vite
echo ""
echo "📦 [1/4] Compilando Frontend Vite..."
cd client && npm run build && cd ..

# 2. Empaquetar
echo ""
echo "🗜️  [2/4] Empaquetando archivos..."
tar -czf deploy.tar.gz server client/dist package.json package-lock.json Dockerfile docker-compose.yml .env.example

# 3. Transferir
echo ""
echo "📡 [3/4] Transfiriendo paquete vía SCP..."
ssh -p $SERVER_PORT "$SERVER_USER@$SERVER_HOST" "mkdir -p $REMOTE_DIR"
scp -P $SERVER_PORT deploy.tar.gz "$SERVER_USER@$SERVER_HOST:$REMOTE_DIR/"

# 4. Desplegar remotamente de forma segura (sin tumbar otros contenedores ni borrar data)
echo ""
echo "🐳 [4/4] Ejecutando despliegue Docker seguro en el servidor..."
ssh -p $SERVER_PORT "$SERVER_USER@$SERVER_HOST" << EOF
cd $REMOTE_DIR
tar -xzf deploy.tar.gz
[ -f .env ] || cp .env.example .env
mkdir -p data
(docker compose up -d --build facesentinel-client 2>/dev/null || docker-compose up -d --build facesentinel-client)
docker ps | grep facesentinel-client
EOF

rm -f deploy.tar.gz

echo ""
echo "=========================================================="
echo "✅ DESPLIEGUE COMPLETADO EXITOSAMENTE!"
echo "   Acceso vía Túnel SSH: http://localhost:3005"
echo "   Acceso vía LAN / VPN: http://10.25.101.20:3005"
echo "=========================================================="
