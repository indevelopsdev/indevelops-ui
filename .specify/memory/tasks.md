# indevelops UI Tasks

## Phase 1 – Project setup
1. Initialize Vite + React + TypeScript scaffold inside `front/indevelops-ui`.
2. Configure `package.json` scripts (`dev`, `build`, `preview`, `deploy` using `gh-pages`).
3. Add base CSS reset/global styles matching palette; ensure fonts loaded (mono + sans).
4. Configure `vite.config.ts` with correct `base` for GitHub Pages.

## Phase 2 – Core layout and styling
5. Create layout base for background, typography, spacing; wrap `App`.
6. Implement global styles (variables de color, spacing, breakpoints).
7. Build componente de roadmap con pasos y responsive behavior.

## Phase 3 – Chat experience
8. Implement hook de chat (state, sendMessage, heurísticas, delay, placeholder backend).
9. Build hero con título, subcopy, chat log e input; integrar hook.
10. Create input accesible con submit y focus handling.
11. Wire animations (message fade, cursor blink) y `aria-live`.

## Phase 4 – QA and deployment prep
12. Run `npm run build` y chequeo básico de accesibilidad.
13. Document instructions in README for running/dev/deploy.
14. Verify GitHub Pages deploy command locally (dry run or instructions if GH token absent).
15. Actualizar documentación en `docs/` (overview, arquitectura, componentes) con los cambios realizados.
