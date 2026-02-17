# indevelops UI Implementation Plan

## Arquitectura general
- Stack: React 18 + Vite + TypeScript.
- Estilos: preferencia por CSS Modules para mantener dependencias livianas.
- Estado: manejo local para el chat y sus mensajes.
- Despliegue: GitHub Pages usando `gh-pages` y `npm run deploy`, configurando `vite.config.ts` con `base` correcto según dominio.
- Referencia actualizada en `docs/architecture.md` y fichas de componentes en `docs/components/`.

## Estructura de carpetas propuesta
```
src/
  components/
    HeroChat/
      HeroChat.tsx
      HeroChat.module.css
    RoadmapStrip/
      RoadmapStrip.tsx
      RoadmapStrip.module.css
    Layout/
      Layout.tsx
      Layout.module.css
    ChatInput/
      ChatInput.tsx
      ChatInput.module.css
  hooks/
    useChatEngine.ts
  utils/
    responses.ts
  App.tsx
  main.tsx
  styles/global.css
```

## Lógica del chat
- Hook de chat con historial, input y estado de respuesta.
- Respuestas generadas por un motor sencillo de palabras clave + fallback.
- Retardo simulado antes de mostrar la respuesta para reforzar “procesando”.
- Punto de extensión para reemplazar reglas locales por backend cuando sea necesario.

## Componentes clave
- `HeroChat`: contenedor principal con título, subcopy, chat log e input.
- `ChatInput`: maneja input + submit.
- `RoadmapStrip`: tira horizontal con pasos.
- `Layout`: envuelve en fondo, tipografía y spacing responsive.

## Estilo y animación
- Paleta oscura con acentos fríos.
- Efectos: cursor parpadeante, glow sutil en bordes del chat, animación de aparición para mensajes.
- Responsivo: stack vertical en mobile y ajustes de layout según breakpoints.

## Accesibilidad
- Colores AA, focus ring visibles.
- `aria-live="polite"` para el contenedor de mensajes.
- Botones/inputs con labels claros.

## Build + Deploy
- Scripts npm: `dev`, `build`, `preview`, `deploy` (usa `gh-pages -d dist`).
- GitHub Pages config: `vite.config.ts` con `base` según dominio/route.

## Validaciones
- Al menos `npm run build` + revisión rápida de accesibilidad básica.
- Test ligero opcional en el hook de chat si hay tiempo.

## Riesgos
- Sin backend real; asegurarse de desacoplar la lógica.
- GitHub Pages requiere router en modo hash o base correcta (usaremos landing single-page sin routing complejo).
