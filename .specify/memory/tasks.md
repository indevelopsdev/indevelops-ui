# indevelops UI Tasks

## Phase 1 – Project setup
1. Initialize Vite + React + TypeScript scaffold inside `front/indevelops-ui`.
2. Configure `package.json` scripts (`dev`, `build`, `preview`, `deploy` using `gh-pages`).
3. Add base CSS reset/global styles matching palette; ensure fonts loaded (mono + sans).
4. Configure `vite.config.ts` with correct `base` for GitHub Pages.

## Phase 2 – Core layout and styling
5. Create `Layout` component for background, typography, spacing; wrap `App`.
6. Implement global styles (root variables for colors, spacing, breakpoints).
7. Build `RoadmapStrip` component with steps and responsive behavior.

## Phase 3 – Chat experience
8. Implement `useChatEngine` hook (state, sendMessage, heuristics, delay simulation, future backend placeholder).
9. Build `HeroChat` component: heading, subcopy, chat log, CTA and integrate hook.
10. Create `ChatInput` component with accessible input, submit button, focus handling.
11. Wire animations (message fade, cursor blink) and aria attributes (`aria-live`).

## Phase 4 – QA and deployment prep
12. Add basic unit test (optional) or at minimum run `npm run build` to ensure bundle passes.
13. Document instructions in README for running/dev/deploy.
14. Verify GitHub Pages deploy command locally (dry run or instructions if GH token absent).
15. Actualizar documentación en `docs/` (overview, arquitectura, componentes) con los cambios realizados.
