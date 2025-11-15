# indevelops UI Implementation Plan

## Arquitectura general
- Stack: React 18 + Vite + TypeScript.
- Estilos: CSS Modules o Tailwind? choose CSS Modules for minimal dependency.
- Estado: `useReducer` para chat (mensajes, input), `useEffect` para animaciones.
- Despliegue: GitHub Pages usando `gh-pages` package y `npm run deploy`, configurando `vite.config.ts` con `base` correcto.
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
- `useChatEngine` mantiene historial (`{id, sender, text, timestamp}`) y estado del input.
- Respuestas generadas por un motor sencillo:
  - Detectar palabras clave (“qué es indevelops”, “spec kit”, “cómo funciona”, etc.).
  - Proveer fallback inspiracional resaltando especificaciones.
  - Añadir retardo simulado (500-800ms) antes de mostrar la respuesta.
- Preparar punto de extensión: función `sendMessage` que hoy usa reglas locales pero mañana podrá llamar a backend (API fetch) sin reescribir UI.

## Componentes clave
- `HeroChat`: contenedor principal con título, subcopy, chat log, input y CTA secundario.
- `ChatInput`: maneja input + submit, muestra placeholder retro (“Escribe tu pregunta…”).
- `RoadmapStrip`: tira horizontal con pasos “Idea → Spec → Plan → Implementación”.
- `Layout`: envuelve en fondo oscuro, controla tipografía y responsive spacing.

## Estilo y animación
- Paleta: fondo #05060A, texto #E4E7EC, acentos #30F0C2 / #84E6FF.
- Efectos: cursor parpadeante, glow sutil en bordes del chat, animación de aparición para mensajes.
- Responsivo: stack vertical en mobile, roadmap en carrusel sencillo si < 480px.

## Accesibilidad
- Colores AA, focus ring visibles.
- `aria-live="polite"` para el contenedor de mensajes.
- Botones/inputs con labels claros.

## Build + Deploy
- Scripts npm: `dev`, `build`, `preview`, `deploy` (usa `gh-pages -d dist`).
- GitHub Pages config: `vite.config.ts` con `base: "/"` para servir en `indevelops.com`.

## Validaciones
- ESLint + Prettier? (opcional) – al menos `npm run build`.
- Test ligero: `vitest` snapshot para `useChatEngine`? (podría ser en iteración siguiente; en este MVP se validará con unit simple si tiempo permite).

## Riesgos
- Sin backend real; asegurarse de desacoplar la lógica.
- GitHub Pages requiere router en modo hash o base correcta (usaremos landing single-page sin routing complejo).
