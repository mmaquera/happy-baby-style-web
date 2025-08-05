# Happy Baby Style - Sitio Web

Sitio web optimizado para SEO y responsive design de Happy Baby Style, marca de ropa orgánica para bebés con enfoque en sostenibilidad y comodidad.

## 🚀 Inicio Rápido

### 📋 Prerrequisitos
```bash
# Verificar versiones
node --version  # Requiere v16.0.0+
npm --version   # Requiere v8.0.0+

# Instalar dependencias
npm install
```

### 🔧 Comandos Principales
```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con live reload
npm run watch        # Modo watch - reconstruye automáticamente

# Build y Producción
npm run build        # Build completo con minificación
npm run build:prod   # Build de producción con compresión
npm run serve        # Servir build de producción localmente
npm run preview      # Preview completo (build + serve)

# Análisis y Testing
npm run test         # Test de performance con Lighthouse
npm run lighthouse   # Generar reporte Lighthouse
npm run validate     # Validar HTML
```

## 📁 Estructura del Proyecto

```
happy-baby-style-web/
├── 📄 index.html              # Página principal optimizada
├── 📄 script.js               # JavaScript principal
├── 📄 package.json            # Configuración del proyecto
├── 📄 README.md               # Este archivo
├── 📁 css/                    # Estilos CSS
│   ├── style.css             # CSS principal
│   ├── critical.css          # CSS crítico (inline)
│   └── non-critical.css      # CSS no crítico (carga diferida)
├── 📁 imgs/                   # Imágenes del sitio
│   ├── ic_logo.png           # Logo principal
│   └── ic_first_image.jpg    # Imagen hero
├── 📁 dist/                   # Build de producción (generado)
│   ├── index.html            # HTML minificado
│   ├── css/*.min.css         # CSS minificado
│   ├── script.min.js         # JavaScript minificado
│   └── imgs/                 # Imágenes optimizadas
└── 📁 docs/                   # Documentación
    ├── BUILD.md              # Guía de build y minificación
    ├── DEVELOPMENT.md        # Guía de desarrollo
    ├── PERFORMANCE.md        # Optimizaciones y métricas
    ├── SEO.md               # Configuración SEO
    └── TROUBLESHOOTING.md   # Solución de problemas
```

## 🎯 Características Principales

### ✅ Diseño Responsive
- **Header adaptativo**: Layout vertical en móviles
- **Touch targets**: Mínimo 44px para accesibilidad
- **Breakpoints optimizados**: Desktop, tablet, móvil
- **Landscape support**: Layout horizontal optimizado

### ✅ SEO Avanzado
- **Meta tags completos**: Title, description, keywords
- **Open Graph**: Optimizado para redes sociales
- **Schema.org**: Datos estructurados
- **Accesibilidad**: ARIA labels, roles semánticos

### ✅ Performance Optimizado
- **Minificación**: HTML, CSS y JavaScript
- **Critical CSS**: CSS crítico inline
- **Lazy Loading**: Carga diferida de imágenes
- **PWA Ready**: Service Worker y App Manifest

## 📚 Documentación

### 🔧 [BUILD.md](docs/BUILD.md)
Guía completa de build y minificación, scripts disponibles y configuración.

### 💻 [DEVELOPMENT.md](docs/DEVELOPMENT.md)
Guía de desarrollo, workflow recomendado y herramientas.

### ⚡ [PERFORMANCE.md](docs/PERFORMANCE.md)
Optimizaciones implementadas, métricas y Core Web Vitals.

### 🔍 [SEO.md](docs/SEO.md)
Configuración SEO, meta tags y datos estructurados.

### 🚨 [TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md)
Solución de problemas comunes y debugging.

## 🎨 Paleta de Colores

- **Primary Purple**: #A285D1
- **Coral Accent**: #FF7B5A
- **Turquoise**: #5CBDB4
- **Warm Gray**: #8B8680
- **Dark Gray**: #2C2C2C

## 📊 Métricas de Optimización

| Archivo | Antes | Después | Reducción |
|---------|-------|---------|-----------|
| HTML | ~15KB | ~8KB | 47% |
| CSS | ~50KB | ~25KB | 50% |
| JavaScript | ~3KB | ~1.5KB | 50% |
| Imágenes | ~200KB | ~80KB | 60% |

## 🎯 Core Web Vitals

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 📝 Changelog

### v1.4.0 - Build System & Minificación
- ✅ Sistema completo de build y minificación
- ✅ Package.json con scripts automatizados
- ✅ Minificación de HTML, CSS y JavaScript
- ✅ Optimización automática de imágenes
- ✅ Reemplazo automático de rutas de assets

### v1.3.0 - Header Responsive Optimization
- ✅ Layout vertical en móviles
- ✅ Logo centrado en dispositivos móviles
- ✅ Touch targets mejorados

### v1.2.0 - SEO Implementation
- ✅ Meta tags completos
- ✅ Schema.org structured data
- ✅ Open Graph y Twitter Cards

### v1.1.0 - Content Sections
- ✅ Hero section con CTA
- ✅ Sección productos
- ✅ Sección valores
- ✅ Sección nosotros

### v1.0.0 - Initial Release
- ✅ Diseño base responsive
- ✅ Paleta de colores definida
- ✅ Estructura HTML semántica

## 📞 Soporte

Para consultas sobre desarrollo, SEO o optimización:
- **Desarrollo**: Equipo técnico
- **SEO**: Especialistas en optimización
- **Diseño**: Equipo de UX/UI

---

**Happy Baby Style** - Ropa orgánica y sostenible para los momentos más importantes de tu bebé. 💕 