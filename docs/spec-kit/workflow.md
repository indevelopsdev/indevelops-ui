# Flujo Spec Kit en indevelops UI

## Artefactos
- `constitution.md`: principios del proyecto (diseño, automatización, calidad).
- `specification.md`: describe la experiencia del home y el alcance del chat funcional.
- `plan.md`: decisiones técnicas (React/Vite, componentes, estilos, despliegue).
- `tasks.md`: checklist por fases para ejecutar la implementación.

Todos se encuentran en `.specify/memory/` y se versionan junto con el código.

## Ciclo por feature
1. **Constitución (si aplica):** ajusta principios cuando cambien normas o políticas.
2. **/speckit.specify:** redacta qué se construirá (UX, contenidos, fuera de alcance).
3. **/speckit.plan:** traduce la especificación al plan técnico.
4. **/speckit.tasks:** genera la lista de tareas ordenadas.
5. **/speckit.implement:** ejecuta las tareas y valida con tests/builds.

## Recomendaciones
- Cada pull request debe indicar qué artefactos actualizó.
- Mantén sincronizados los enlaces entre `docs/` y los archivos de Spec Kit para evitar divergencias.
- Para features grandes, considera añadir `/speckit.clarify`, `/speckit.checklist` o `/speckit.analyze` como pasos adicionales.
