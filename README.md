# nooelanag.github.io


# Portfolio Premium - Ingeniero de Telecomunicaciones

Portfolio web de diseño premium con glassmorphism, sistema de partículas animadas y efectos visuales de última generación. Optimizado para ingenieros de telecomunicaciones con una estética futurista y profesional.

## Características Premium

### Diseño Visual
- **Glassmorphism**: Efectos de vidrio esmerilado con backdrop-filter
- **Sistema de Partículas**: Canvas animado con partículas conectadas
- **Gradientes Mesh**: Fondos con múltiples gradientes radiales superpuestos
- **Esferas Flotantes**: Formas degradadas que flotan en el fondo
- **Grid Animado**: Rejilla sutil con líneas de neón
- **Efectos de Brillo**: Sombras y resplandores con los colores corporativos

### Animaciones
- Parallax en hero section
- Scroll progress bar superior
- Fade-in progresivo de secciones
- Barras de skills animadas
- Efecto typing en subtítulo
- Efecto glitch en hover
- Ripple effect en botones
- Transiciones suaves en todos los elementos

### Características Técnicas
- **100% Responsive**: Diseño adaptativo perfecto
- **Alto Rendimiento**: Animaciones optimizadas con RequestAnimationFrame
- **Glassmorphism Real**: Uso de backdrop-filter para efectos de cristal
- **Tipografía Premium**: Space Grotesk + JetBrains Mono
- **Paleta Futurista**: Cyan (#00f0ff), Púrpura (#7b2ff7), Rosa (#ff2e97)

## Despliegue Rápido en GitHub Pages

### Método Recomendado: Repositorio Personal

1. **Crea el repositorio**
   - Nombre: `tu-usuario.github.io` (reemplaza con tu usuario real de GitHub)
   - Ejemplo: si tu usuario es `jlopez`, el repo debe ser `jlopez.github.io`

2. **Sube los archivos**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Premium portfolio"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/tu-usuario.github.io.git
   git push -u origin main
   ```

3. **Configura GitHub Pages**
   - Ve a `Settings` → `Pages`
   - Source: `main` branch, `/ (root)` folder
   - Guarda

4. **¡Listo!** 
   - Tu portfolio estará en: `https://tu-usuario.github.io`
   - Tarda 1-2 minutos en estar disponible

## Personalización Completa

### 1. Información Personal

#### En `index.html`:

**Línea ~14 - Logo/Nombre:**
```html
<span>TU NOMBRE</span>
```

**Líneas ~55-60 - Hero:**
```html
<h1 class="hero-title">
    <span class="glitch-text" data-text="Ingeniero de">Ingeniero de</span>
    <span class="glitch-text highlight" data-text="Telecomunicaciones">Telecomunicaciones</span>
</h1>
<p class="hero-subtitle">Tu frase personal aquí</p>
```

**Líneas ~62-80 - Estadísticas:**
```html
<div class="stat-item">
    <span class="stat-number">5+</span>
    <span class="stat-label">Años de experiencia</span>
</div>
<!-- Repite para cada estadística -->
```

### 2. Secciones de Contenido

#### About Me (línea ~95)
Personaliza tu biografía, pasiones y objetivos profesionales.

#### Estudios (línea ~135)
```html
<div class="timeline-date">2015 - 2019</div>
<h3 class="timeline-title">Grado en Ingeniería</h3>
<p class="timeline-institution">Tu Universidad</p>
<ul class="timeline-highlights">
    <li>Logro 1</li>
    <li>Logro 2</li>
</ul>
```

#### Experiencia Laboral (línea ~200)
Misma estructura que Estudios. Añade o elimina items según necesites.

#### Proyectos (línea ~280)
```html
<h3 class="project-title">Nombre del Proyecto</h3>
<p class="project-description">Descripción...</p>
<div class="project-tags">
    <span class="tag">Tecnología 1</span>
    <span class="tag">Tecnología 2</span>
</div>
```

#### Skills (línea ~400)
Ajusta el porcentaje cambiando `--skill-width`:
```html
<div class="skill-fill" style="--skill-width: 95%"></div>
```

#### Contacto (línea ~520)
```html
<a href="mailto:tu.email@example.com">
<a href="tel:+34123456789">
<a href="https://linkedin.com/in/tu-perfil">
<a href="https://github.com/tu-usuario">
```

### 3. Personalización de Colores

En `styles.css`, líneas 1-15, modifica las variables:

```css
:root {
    /* Colores de fondo */
    --color-bg: #050510;
    --color-surface: rgba(20, 20, 40, 0.6);
    
    /* Colores primarios */
    --color-primary: #00f0ff;      /* Cyan brillante */
    --color-accent: #7b2ff7;        /* Púrpura */
    --color-secondary: #ff2e97;     /* Rosa */
    
    /* Gradientes */
    --gradient-primary: linear-gradient(135deg, #00f0ff 0%, #7b2ff7 100%);
}
```

**Paletas sugeridas:**

**Azul Profesional:**
```css
--color-primary: #0088ff;
--color-accent: #00d4ff;
--color-secondary: #0056cc;
```

**Verde Tech:**
```css
--color-primary: #00ff88;
--color-accent: #00cc6a;
--color-secondary: #7b2ff7;
```

**Púrpura Premium:**
```css
--color-primary: #b84cff;
--color-accent: #8b2ff7;
--color-secondary: #ff2e97;
```

### 4. Tipografía

Cambia las fuentes en el `<head>` del HTML:

```html
<!-- Actual: Space Grotesk + JetBrains Mono -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap">

<!-- Alternativas modernas: -->
<!-- Poppins + Fira Code -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap">

<!-- Inter + Source Code Pro -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Code+Pro:wght@400;500;600&display=swap">
```

Y actualiza en CSS:
```css
--font-display: 'Tu Fuente Display', sans-serif;
--font-mono: 'Tu Fuente Mono', monospace;
```

## Añadir Imágenes

### Foto de Perfil en About
Reemplaza las barras de frecuencia (línea ~120):
```html
<div class="about-visual">
    <img src="tu-foto.jpg" alt="Tu nombre" 
         style="width: 100%; height: 100%; object-fit: cover; border-radius: 30px;">
</div>
```

### Imágenes de Proyectos
Reemplaza los SVG placeholders:
```html
<div class="project-image">
    <img src="proyecto1.jpg" alt="Proyecto" 
         style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### Optimización de Imágenes
Antes de subirlas:
1. Redimensiona a máximo 1920px de ancho
2. Comprime con [TinyPNG](https://tinypng.com)
3. Usa formato WebP para mejor rendimiento

## Efectos Especiales Incluidos

### Sistema de Partículas
Las partículas se generan automáticamente en el canvas. Puedes ajustar:

En `script.js`, líneas 3-7:
```javascript
this.particleCount = 80;           // Número de partículas
this.connectionDistance = 150;     // Distancia de conexión
```

### Esferas Flotantes
Ajusta en `styles.css`, líneas 70-95:
```css
.sphere-1 {
    width: 600px;                  /* Tamaño */
    opacity: 0.5;                  /* Transparencia */
    animation-delay: 0s;           /* Timing */
}
```

### Efecto Glitch
Se activa automáticamente al pasar el ratón sobre el título. Personalízalo en `script.js`, línea 200.

## Secciones del Portfolio

1. **Hero** - Presentación impactante con estadísticas
2. **About** - Biografía personal y profesional
3. **Estudios** - Timeline educativa expandible
4. **Experiencia** - Timeline de trabajos con detalles
5. **Proyectos** - Grid de proyectos destacados
6. **Skills** - Habilidades técnicas con barras animadas
7. **Contacto** - Métodos de contacto con efectos hover

## Funcionalidades Avanzadas

### Timeline Expandible
Haz clic en el botón "+" para ver más detalles. Personaliza el contenido en las secciones de Estudios y Experiencia.

### Navegación Inteligente
- Resalta automáticamente la sección activa
- Scroll suave a secciones
- Menú hamburguesa responsive en móvil

### Animaciones on Scroll
- Fade-in progresivo de elementos
- Activación de barras de skills
- Parallax en hero

### Barra de Progreso
Muestra el avance del scroll en la parte superior.

## Diseño Responsive

El portfolio se adapta perfectamente a:
- Móviles (320px - 640px)
- Tablets (641px - 968px)
- Desktop (969px+)

Los breakpoints están en `styles.css` líneas 1100+.

## Dominio Personalizado

Para usar tu propio dominio (ej: `www.tunombre.com`):

1. Compra un dominio en Namecheap, GoDaddy, etc.
2. En tu repo, crea archivo `CNAME`:
   ```
   www.tunombre.com
   ```
3. Configura DNS:
   ```
   Tipo A → 185.199.108.153
   Tipo A → 185.199.109.153
   Tipo A → 185.199.110.153
   Tipo A → 185.199.111.153
   ```
4. Espera 24-48h para propagación DNS

## Tips para un Portfolio Destacado

### Contenido
1. **Sé específico**: Usa métricas (reducción 40%, 20+ proyectos)
2. **Cuenta historias**: No solo listes, explica el impacto
3. **Muestra variedad**: Diferentes tipos de proyectos
4. **Actualiza regularmente**: Mantén el portfolio fresco

### Diseño
1. **Menos es más**: No sobrecargues de información
2. **Jerarquía visual**: Lo importante primero
3. **Consistencia**: Mantén el estilo cohesivo
4. **Performance**: Optimiza imágenes

### SEO
1. Personaliza el `<title>` en el HTML
2. Añade meta descriptions:
   ```html
   <meta name="description" content="Portfolio de [Tu Nombre] - Ingeniero de Telecomunicaciones especializado en 5G, IoT y redes">
   ```
3. Usa etiquetas semánticas (ya incluidas)

## Estructura de Archivos

```
portfolio/
│
├── index.html       # Estructura HTML
├── styles.css       # Estilos con glassmorphism
├── script.js        # Partículas y animaciones
└── README.md        # Esta guía
```

## Solución de Problemas

### El sitio no carga
- Espera 5-10 minutos después del primer deploy
- Verifica que el repo sea público
- Revisa Settings → Pages por errores

### Las animaciones no funcionan
- Abre DevTools (F12) y busca errores en Console
- Verifica que `script.js` esté cargando
- Prueba en modo incógnito

### Problemas de rendimiento
- Reduce `particleCount` en script.js
- Comprime las imágenes
- Desactiva parallax en móviles

### Glassmorphism no se ve
- Requiere navegadores modernos (Chrome 76+, Firefox 70+)
- No funciona en IE11
- En Safari puede verse diferente

## Mejoras Futuras Sugeridas

- [ ] Añadir modo oscuro/claro
- [ ] Integrar con Google Analytics
- [ ] Añadir blog section
- [ ] Formulario de contacto funcional
- [ ] Galería de imágenes de proyectos
- [ ] Testimonios de clientes/colegas
- [ ] Certificaciones descargables

## Próximos Pasos

1. **Personaliza** todo el contenido con tu información
2. **Añade** tus proyectos reales con imágenes
3. **Optimiza** para SEO con meta tags
4. **Comparte** en LinkedIn, GitHub, CV
5. **Actualiza** regularmente con nuevos proyectos

## Recursos Útiles

- [GitHub Pages Docs](https://docs.github.com/es/pages)
- [Google Fonts](https://fonts.google.com)
- [TinyPNG](https://tinypng.com) - Compresión de imágenes
- [Coolors](https://coolors.co) - Generador de paletas
- [Can I Use](https://caniuse.com) - Compatibilidad de CSS

## Performance

Este portfolio está optimizado para:
- Carga rápida (<2s en 4G)
- Animaciones a 60fps
- Lighthouse score >90
- Core Web Vitals excelentes

---

*Última actualización: Diciembre 2025*