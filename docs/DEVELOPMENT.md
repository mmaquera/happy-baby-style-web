# 💻 Guía de Desarrollo

Esta guía explica el workflow de desarrollo, herramientas disponibles y mejores prácticas para el proyecto Happy Baby Style.

## 🚀 Inicio Rápido

### Configuración del Entorno
```bash
# Clonar el repositorio
git clone https://github.com/mmaquera/happy-baby-style-web.git
cd happy-baby-style-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🔧 Herramientas de Desarrollo

### Servidor de Desarrollo
```bash
# Servidor con live reload
npm run dev

# Modo watch para cambios automáticos
npm run watch
```

### Formateo y Linting
```bash
# Formatear código automáticamente
npm run format

# Verificar calidad del código
npm run lint

# Corregir errores automáticamente
npm run lint:fix
```

### Validación
```bash
# Validar HTML
npm run validate

# Test de performance
npm run test
```

## 📁 Estructura del Proyecto

### Archivos Principales
```
happy-baby-style-web/
├── index.html              # Página principal
├── script.js               # JavaScript principal
├── package.json            # Configuración del proyecto
├── css/
│   ├── style.css          # CSS principal
│   ├── critical.css       # CSS crítico (inline)
│   └── non-critical.css   # CSS no crítico (carga diferida)
└── imgs/                   # Imágenes del sitio
```

### Archivos de Configuración
```
├── postcss.config.js       # Configuración PostCSS
├── workbox-config.js       # Configuración Service Worker
├── replace-assets-prod.js  # Script de reemplazo de rutas
└── .gitignore             # Archivos ignorados por Git
```

## 🎨 Guías de Estilo

### CSS
- Usar variables CSS para colores y espaciado
- Seguir metodología BEM para nombres de clases
- Mantener especificidad baja
- Usar flexbox y grid para layouts

### JavaScript
- Usar ES6+ features
- Mantener funciones pequeñas y enfocadas
- Documentar funciones complejas
- Usar nombres descriptivos para variables

### HTML
- Usar HTML semántico
- Incluir atributos de accesibilidad
- Optimizar para SEO
- Mantener estructura limpia

## 🔄 Workflow de Desarrollo

### 1. Configuración Inicial
```bash
# Instalar dependencias
npm install

# Verificar que todo funciona
npm run dev
```

### 2. Desarrollo Diario
```bash
# Iniciar servidor de desarrollo
npm run dev

# En otra terminal, modo watch
npm run watch
```

### 3. Antes de Commit
```bash
# Formatear código
npm run format

# Verificar calidad
npm run lint

# Validar HTML
npm run validate

# Test de performance
npm run test
```

### 4. Build de Desarrollo
```bash
# Build para testing
npm run build

# Preview del build
npm run preview
```

## 🛠️ Herramientas Recomendadas

### Editores de Código
- **VS Code**: Con extensiones para HTML, CSS, JS
- **Sublime Text**: Configurado para desarrollo web
- **WebStorm**: IDE completo para desarrollo web

### Extensiones Recomendadas
- **Live Server**: Para desarrollo local
- **Prettier**: Formateo automático
- **ESLint**: Linting de JavaScript
- **HTML CSS Support**: Soporte para HTML/CSS
- **Auto Rename Tag**: Para HTML
- **Bracket Pair Colorizer**: Para mejor legibilidad

### Herramientas de Navegador
- **Chrome DevTools**: Para debugging
- **Lighthouse**: Para análisis de performance
- **WebPageTest**: Para testing de velocidad

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First */
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large Desktop */ }
```

### Testing de Dispositivos
- Usar DevTools para simular dispositivos
- Testear en dispositivos reales
- Verificar touch targets (mínimo 44px)
- Probar orientación landscape

## 🔍 Debugging

### Console Logging
```javascript
// Para desarrollo
console.log('Debug info:', data);

// Para producción (se elimina automáticamente)
console.warn('Warning message');
console.error('Error message');
```

### Chrome DevTools
- **Elements**: Inspeccionar HTML y CSS
- **Console**: Ver logs y errores
- **Network**: Analizar carga de recursos
- **Performance**: Medir rendimiento
- **Lighthouse**: Análisis completo

### Errores Comunes
1. **404 en recursos**: Verificar rutas
2. **CSS no aplicado**: Verificar especificidad
3. **JavaScript no funciona**: Verificar console
4. **Imágenes no cargan**: Verificar rutas y formato

## 📊 Testing

### Testing Manual
- Navegar por todas las páginas
- Probar en diferentes dispositivos
- Verificar accesibilidad
- Testear performance

### Testing Automatizado
```bash
# Validar HTML
npm run validate

# Test de performance
npm run test

# Análisis con Lighthouse
npm run lighthouse
```

## 🚀 Optimización

### Durante el Desarrollo
- Usar imágenes optimizadas
- Minimizar requests HTTP
- Usar CSS crítico
- Implementar lazy loading

### Antes de Producción
```bash
# Build optimizado
npm run build:prod

# Análisis final
npm run lighthouse

# Verificar métricas
npm run test-performance
```

## 📝 Mejores Prácticas

### Performance
- Minimizar archivos CSS y JS
- Optimizar imágenes
- Usar CDN para recursos externos
- Implementar caching

### SEO
- Usar HTML semántico
- Incluir meta tags
- Optimizar títulos y descripciones
- Implementar structured data

### Accesibilidad
- Usar ARIA labels
- Mantener contraste adecuado
- Proporcionar texto alternativo
- Asegurar navegación por teclado

### Seguridad
- Validar inputs de usuario
- Usar HTTPS en producción
- Mantener dependencias actualizadas
- Implementar CSP headers

## 🔧 Configuración Avanzada

### Variables de Entorno
```bash
# Crear archivo .env
NODE_ENV=development
PORT=3000
```

### Configuración de Git
```bash
# Configurar hooks pre-commit
npm install husky --save-dev

# Agregar scripts al package.json
"husky": {
  "hooks": {
    "pre-commit": "npm run lint && npm run validate"
  }
}
```

## 📞 Soporte

### Recursos Útiles
- **MDN Web Docs**: Documentación web
- **CSS-Tricks**: Tips y trucos CSS
- **JavaScript.info**: Guía moderna de JS
- **Web.dev**: Recursos de Google

### Comunidad
- **Stack Overflow**: Para preguntas técnicas
- **GitHub Issues**: Para reportar bugs
- **Discord/Slack**: Para discusiones

---

**Happy Baby Style** - Desarrollo web de calidad 💕 