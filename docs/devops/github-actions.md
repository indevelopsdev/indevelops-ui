# GitHub Actions · indevelops UI

## Workflows

### CI (develop) — `.github/workflows/ci.yml`
- **Trigger:** `push` y `pull_request` contra `develop`.
- **Pasos:** checkout → `setup-node@20.19` → `npm ci` → `npm run lint` → `npm run build`.
- **Objetivo:** garantizar que el código es compilable antes de fusionarlo a `develop`.

### Deploy (master) — `.github/workflows/deploy.yml`
- **Trigger:** `push` a `master`.
- **Pasos:** checkout → `setup-node@20.19` → `npm ci` → `npm run build` → `upload-pages-artifact` → `deploy-pages`.
- **Objetivo:** publicar automáticamente la versión de producción en GitHub Pages.

## Git Flow recomendado
1. `feature/*` → merge via PR en `develop`.
2. Opcional `release/*` para preparar una entrega.
3. Merge en `master` dispara el deploy.
4. En caso de hotfix, crea `hotfix/*` desde `master` y vuelve a fusionar en `develop`.

## Configuración adicional sugerida
- Protege las ramas `develop` y `master` exigiendo PR y la ejecución exitosa del CI.
- En Settings → Pages selecciona “GitHub Actions” como fuente.
- Almacena secretos (si fueran necesarios en el futuro) en Settings → Secrets and variables → Actions.

Actualiza este documento cuando agregues nuevos workflows (por ejemplo, pruebas E2E, análisis estático, releases etiquetadas).
