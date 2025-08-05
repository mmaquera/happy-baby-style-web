# 🚨 Guía de Troubleshooting

Esta guía proporciona soluciones para problemas comunes que pueden surgir durante el desarrollo y despliegue del sitio web de Happy Baby Style.

## 🔧 Problemas de Instalación

### Error: "command not found"

#### Síntomas
```bash
sh: npm: command not found
sh: node: command not found
```

#### Solución
```bash
# Verificar si Node.js está instalado
node --version
npm --version

# Si no está instalado, instalar Node.js
# macOS (con Homebrew)
brew install node

# macOS (descarga directa)
# Descargar desde https://nodejs.org/

# Linux (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Windows
# Descargar instalador desde https://nodejs.org/
```

### Error de permisos

#### Síntomas
```bash
npm ERR! EACCES: permission denied
```

#### Solución
```bash
# macOS/Linux - Cambiar permisos
sudo chown -R $USER /usr/local/lib/node_modules
sudo chown -R $USER ~/.npm

# O usar nvm para gestionar Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install node
nvm use node

# Windows - Ejecutar como administrador
# Abrir PowerShell como administrador
```

## 🏗️ Problemas de Build

### Build falla con errores de dependencias

#### Síntomas
```bash
npm ERR! peer dep missing
npm ERR! unmet peer dependency
```

#### Solución
```bash
# Limpiar caché y reinstalar
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# Si persiste, actualizar npm
npm install -g npm@latest
```

### Error: "cant go up that far" (copyfiles)

#### Síntomas
```bash
Error: cant go up that far
    at dealWith (/node_modules/copyfiles/index.js:31:11)
```

#### Solución
```bash
# Verificar que el archivo existe
ls -la robots.txt sitemap.xml site.webmanifest

# Si no existen, crear archivos vacíos
touch robots.txt sitemap.xml site.webmanifest

# O modificar el script en package.json
"copy-assets": "cp robots.txt sitemap.xml site.webmanifest dist/ 2>/dev/null || echo 'Some files may not exist, continuing...'"
```

### Error de minificación de JavaScript

#### Síntomas
```bash
Parse error at script.js:103,0
ERROR: Unexpected token: operator «<»
```

#### Solución
```bash
# Verificar que no hay HTML en archivos JS
grep -n "</body>" script.js

# Eliminar etiquetas HTML incorrectas
# Buscar y eliminar líneas como:
# </body>
# </html>
```

## 🌐 Problemas de Servidor

### Puerto ya en uso

#### Síntomas
```bash
This port was picked because 8080 is in use.
```

#### Solución
```bash
# Encontrar proceso usando el puerto
lsof -i :8080

# Terminar proceso
kill -9 <PID>

# O usar puerto diferente
npm run serve -- --port 3000
```

### Error 404 en recursos

#### Síntomas
```bash
Failed to load resource: the server responded with a status of 404 (Not Found)
```

#### Solución
```bash
# Verificar que los archivos existen
ls -la dist/css/
ls -la dist/script.min.js

# Verificar rutas en HTML
grep -n "css/" dist/index.html
grep -n "script" dist/index.html

# Reconstruir proyecto
npm run build
```

## 📱 Problemas de Responsive Design

### Layout roto en móviles

#### Síntomas
- Elementos superpuestos
- Texto ilegible
- Botones no clickeables

#### Solución
```css
/* Verificar viewport meta tag */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Verificar media queries */
@media (max-width: 768px) {
  /* Estilos móviles */
}

/* Verificar touch targets */
button, a {
  min-height: 44px;
  min-width: 44px;
}
```

### Imágenes no responsive

#### Síntomas
- Imágenes muy grandes en móviles
- Imágenes pixeladas en desktop

#### Solución
```css
/* Usar imágenes responsive */
img {
  max-width: 100%;
  height: auto;
}

/* O usar picture element */
<picture>
  <source media="(min-width: 768px)" srcset="large.jpg">
  <source media="(min-width: 480px)" srcset="medium.jpg">
  <img src="small.jpg" alt="Description">
</picture>
```

## 🔍 Problemas de Performance

### LCP (Largest Contentful Paint) lento

#### Síntomas
- Tiempo de carga > 2.5s
- Imágenes hero tardan en cargar

#### Solución
```bash
# Optimizar imágenes
npm run optimize-images

# Verificar CSS crítico
npm run build

# Usar preload para recursos críticos
<link rel="preload" href="critical.css" as="style">
```

### CLS (Cumulative Layout Shift) alto

#### Síntomas
- Elementos se mueven durante la carga
- Layout inestable

#### Solución
```css
/* Definir dimensiones de imágenes */
img {
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
}

/* Reservar espacio para contenido dinámico */
.container {
  min-height: 200px;
}
```

## 🎨 Problemas de CSS

### Estilos no se aplican

#### Síntomas
- CSS no se carga
- Estilos no se reflejan

#### Solución
```bash
# Verificar que CSS se está cargando
# En DevTools > Network, buscar archivos CSS

# Verificar rutas
ls -la css/
ls -la dist/css/

# Verificar que no hay errores de sintaxis
npm run lint
```

### CSS no minificado

#### Síntomas
- Archivos CSS muy grandes
- Comentarios visibles en producción

#### Solución
```bash
# Verificar configuración de PostCSS
cat postcss.config.js

# Reconstruir CSS
npm run minify-css

# Verificar archivos minificados
ls -la dist/css/*.min.css
```

## 🔧 Problemas de JavaScript

### JavaScript no funciona

#### Síntomas
- Funcionalidades no responden
- Errores en console

#### Solución
```bash
# Verificar console del navegador
# F12 > Console

# Verificar que JS se está cargando
# En DevTools > Network, buscar script.min.js

# Verificar sintaxis
npm run lint
```

### Google Analytics no funciona

#### Síntomas
- No se registran eventos
- ID de tracking incorrecto

#### Solución
```javascript
// Verificar ID de Google Analytics
gtag('config', 'G-XXXXXXXXXX'); // Reemplazar con ID real

// Verificar que gtag está cargado
// En DevTools > Network, buscar gtag
```

## 📊 Problemas de Testing

### Lighthouse no funciona

#### Síntomas
```bash
Error: Could not connect to Chrome
```

#### Solución
```bash
# Instalar Chrome si no está disponible
# macOS
brew install --cask google-chrome

# Linux
wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update
sudo apt-get install google-chrome-stable

# Verificar instalación
google-chrome --version
```

### Tests fallan

#### Síntomas
```bash
npm ERR! Test failed
```

#### Solución
```bash
# Verificar que el servidor está corriendo
npm run serve

# En otra terminal, ejecutar tests
npm run test

# Verificar logs detallados
npm run test 2>&1 | tee test.log
```

## 🚀 Problemas de Producción

### Archivos no se sirven correctamente

#### Síntomas
- 404 en recursos
- Rutas incorrectas

#### Solución
```bash
# Verificar estructura de archivos
tree dist/

# Verificar configuración del servidor web
# Para Apache (.htaccess)
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.html [QSA,L]

# Para Nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### HTTPS no funciona

#### Síntomas
- Certificado SSL inválido
- Mixed content warnings

#### Solución
```bash
# Verificar certificado SSL
openssl s_client -connect happybabystyle.com:443

# Configurar redirect HTTP a HTTPS
# Para Apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Para Nginx
server {
    listen 80;
    server_name happybabystyle.com;
    return 301 https://$server_name$request_uri;
}
```

## 📞 Obtener Ayuda

### Logs Útiles
```bash
# Logs de build
npm run build 2>&1 | tee build.log

# Logs de servidor
npm run serve 2>&1 | tee server.log

# Logs de tests
npm run test 2>&1 | tee test.log
```

### Información del Sistema
```bash
# Versiones
node --version
npm --version
git --version

# Sistema operativo
uname -a
cat /etc/os-release

# Espacio en disco
df -h

# Memoria disponible
free -h
```

### Recursos de Ayuda
- **GitHub Issues**: Para reportar bugs
- **Stack Overflow**: Para preguntas técnicas
- **Documentación oficial**: Node.js, npm, herramientas
- **Comunidad**: Discord, Slack, foros

## 🔄 Workflow de Debugging

### 1. Identificar el Problema
```bash
# Revisar logs de error
# Verificar console del navegador
# Reproducir el problema
```

### 2. Aislar el Problema
```bash
# Probar en entorno limpio
# Verificar dependencias
# Probar con configuraciones mínimas
```

### 3. Implementar Solución
```bash
# Aplicar fix
# Testear cambios
# Documentar solución
```

### 4. Verificar Solución
```bash
# Probar en diferentes entornos
# Verificar que no rompe otras funcionalidades
# Actualizar documentación
```

---

**Happy Baby Style** - Solución de problemas efectiva 🚨 