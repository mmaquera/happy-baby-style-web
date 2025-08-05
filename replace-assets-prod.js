const fs = require('fs');
const path = require('path');

const distHtml = path.join(__dirname, 'dist', 'index.html');
const distJs = path.join(__dirname, 'dist', 'script.min.js');

// Reemplazar en HTML
if (fs.existsSync(distHtml)) {
  let html = fs.readFileSync(distHtml, 'utf8');
  
  // Reemplazos de CSS
  html = html.replace(/css\/critical\.css/g, 'css/critical.min.css');
  html = html.replace(/css\/non-critical\.css/g, 'css/non-critical.min.css');
  
  // Reemplazo de JS
  html = html.replace(/script\.js/g, 'script.min.js');
  
  fs.writeFileSync(distHtml, html, 'utf8');
  console.log('✔️  Rutas de assets minificados actualizadas en dist/index.html');
}

// Reemplazar en JavaScript
if (fs.existsSync(distJs)) {
  let js = fs.readFileSync(distJs, 'utf8');
  
  // Reemplazos de CSS en JavaScript
  js = js.replace(/css\/critical\.css/g, 'css/critical.min.css');
  js = js.replace(/css\/non-critical\.css/g, 'css/non-critical.min.css');
  
  fs.writeFileSync(distJs, js, 'utf8');
  console.log('✔️  Rutas de assets minificados actualizadas en dist/script.min.js');
}