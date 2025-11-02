# indevelops ui

Home hero para indevelops: un entorno de Specification-Driven Development impulsado por Spec Kit e IA. El landing rompe el patrón clásico y ofrece un chat retro funcional que invita a preguntar “¿qué es indevelops?” mientras una franja muestra el roadmap Idea → Spec → Plan → Implementación.

## Stack
- React 18 + TypeScript + Vite 7.
- CSS Modules + design tokens globales (`src/styles/global.css`).
- Chat heurístico local con `useChatEngine` (listo para conectar a un backend futuro).
- Despliegue objetivo: GitHub Pages (`gh-pages` CLI).

> **Nota:** Vite 7 requiere Node `^20.19.0` o `>=22.12`. El proyecto puede ejecutarse con Node 18 (verás advertencias) pero se recomienda actualizar para producción.

## Scripts

```bash
npm run dev       # Servidor local
npm run build     # Build para producción
npm run preview   # Sirve el build localmente
npm run lint      # ESLint
npm run deploy    # Publica dist/ en GitHub Pages (usa gh-pages)
```

`npm run deploy` ejecuta `npm run build` automáticamente vía el script `predeploy`.

## Estructura destacada
- `src/components/HeroChat`: Hero + chat funcional.
- `src/hooks/useChatEngine`: Maneja historial, respuestas y estado “pensando”.
- `src/utils/responses`: Reglas de respuesta locales, fácilmente reemplazables por una API.
- `src/components/RoadmapStrip`: Visualiza el flujo Idea → Spec → Plan → Implementación.
- `vite.config.ts`: define `base: '/indevelops-ui/'` para que GitHub Pages resuelva rutas.

## Documentación técnica
- [Overview](docs/overview.md)
- [Arquitectura](docs/architecture.md)
- [Componentes](docs/components/README.md)
- [Flujo Spec Kit](docs/spec-kit/workflow.md)
- [GitHub Actions & DevOps](docs/devops/github-actions.md)

## Próximos pasos sugeridos
1. Conectar `useChatEngine` con el backend/LLM planificado (reemplazar `getResponse` por fetch a la API).
2. Añadir pruebas (ej. Vitest) para el motor de respuestas y componentes clave.
3. Configurar un workflow de GitHub Actions que ejecute build + deploy automático a Pages.
4. Mantener y ampliar la documentación en `docs/` a medida que la arquitectura evoluciona.
5. Expandir el sitio con secciones de documentación, comunidad o casos de uso manteniendo la guía Spec Kit.
