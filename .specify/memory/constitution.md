# indevelops Constitution

## Core Principles

### I. Precisión guiada por especificaciones
Toda funcionalidad parte de un documento de especificación producido con Spec Kit; ningún componente React se construye sin la especificación correspondiente y su plan técnico asociado.

### II. Diseño minimalista con serenidad visual
La UI debe transmitir orden y control: paleta reducida, tipografía consistente, abundante espacio negativo y uso intencional de bloques para resaltar estructura técnica.

### III. Automatización y buenas prácticas
Los flujos se apoyan en herramientas automatizadas (Spec Kit, linters, formatters) para eliminar ambigüedad entre idea, código y documentación; cualquier tarea manual repetitiva debe documentarse para futura automatización.

### IV. Experiencia impulsada por IA
La narrativa y los componentes deben reforzar que indevelops es un entorno inteligente: secciones que sugieren chat asistido, diagramas o prompts que invitan a preguntar “¿qué es indevelops?”.

### V. Calidad comprobable
Cada entrega incluye pruebas mínimas (component tests o UI smoke tests) y verificación de accesibilidad básica (contraste, navegación teclado) antes de desplegar en GitHub Pages.

## Diseño y contenido
- El home es una experiencia hero tipo terminal/retro con un chat central que despierta curiosidad y con CTA implícita para preguntar qué es indevelops.  
- El tono combina precisión técnica con calidez: copy corto, directo, resaltando “entorno de desarrollo guiado por especificaciones”.  
- Todo arte visual debe reforzar progreso estructurado (pasos, roadmap, specs, bloques).  
- El idioma principal es español; términos técnicos pueden mantenerse en inglés si son estándar (e.g., “Spec Kit”).

## Flujo de trabajo y entregables
- Seguir el pipeline Spec Kit: `/speckit.constitution` → `/speckit.specify` → `/speckit.plan` → `/speckit.tasks` → `/speckit.implement`.  
- Documentar cualquier decisión clave en los archivos `.specify/memory`.  
- El despliegue objetivo es GitHub Pages; la rama principal debe mantener un build listo para `npm run deploy` (o acción equivalente).  
- Commits y PRs deben referenciar la sección de la especificación que satisfacen.

## Gobernanza
Esta constitución manda sobre cualquier preferencia individual; cambios requieren una nueva versión documentada en `.specify/memory/constitution.md` junto con fecha y motivo.

**Version**: 1.0.0 | **Ratified**: 2025-02-15 | **Last Amended**: 2025-02-15
