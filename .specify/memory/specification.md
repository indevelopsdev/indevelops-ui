# indevelops UI Specification

## Visión
Crear un home hero que rompa la lógica tradicional de una landing y refuerce la idea de que indevelops es un entorno de desarrollo guiado por specs que “piensa” junto al usuario. La interfaz debe sentirse como un chat retro-centro de comando que provoca curiosidad y motiva al visitante a interactuar en lugar de leer una pared de texto.

## Público objetivo
Desarrolladores/teams técnicos interesados en metodologías rigurosas, automatización e IA, y personas que valoran claridad estructurada sobre marketing vacío.

## Objetivos clave
1. Transmitir precisión técnica, serenidad visual y control inteligente apenas se carga la página.
2. Enfatizar que indevelops es un entorno guiado por specs y que reduce la brecha entre idea, código y documentación.
3. Invitar a la interacción mediante un chat central con tono retro-terminal y foco en IA asistiendo el flujo.
4. Mostrar señales de progreso estructurado (pasos, roadmap, specs) sin saturar la vista.
5. Mantener la interfaz abierta a futuras secciones sin forzar el layout actual.

## Experiencia del usuario
- Hero pantalla completa con gradiente oscuro o fondo minimalista.
- Chat central (card) con tipografía monoespaciada y estilo terminal retro-moderna.
- Título principal con la marca “indevelops” en tipografía grande.
- Campo de input/prompt que anima a escribir.
- Copy auxiliar muy corto con mensaje de valor (sin marketing extendido).
- Barra/roadmap con pasos para reforzar estructura.
- Footer mínimo con marca y enlace social si aplica.

## Contenidos obligatorios
- Título principal con la marca.
- Subtítulo que resuma la propuesta (idea → specs → producto).
- Etiquetas breves destacando precisión técnica e IA (texto sujeto a iteración).
- Indicador visual de progreso (pasos con etiquetas).

## Restricciones de diseño
- Diseño limpio, minimalista, abundante espacio negativo, contraste controlado.
- Paleta oscura con acentos fríos; tipografía sans combinada con mono para chat.
- Accesibilidad: contraste AA, foco visible, estructuras semánticas correctas.

## Alcance técnico del MVP
- Aplicación React (Vite) desplegable en GitHub Pages.
- Componentes clave de hero, chat y roadmap (nombres internos sujetos a cambio).
- Responsividad básica (desktop, tablet, móvil).
- Animaciones suaves permitidas (fade-in, cursor parpadeante) sin impactar performance.
- Chat funcional básico con respuestas locales/heurísticas y memoria de sesión (sin backend).

## Fuera de alcance (por ahora)
- Autenticación, dashboards, documentación completa.
- Integraciones backend/LLM reales.
- Persistencia en la nube (solo memoria local de sesión).

## Métricas de éxito
- Claridad del mensaje: comprensión rápida de que es una herramienta estructurada e inteligente.
- Interacción instigada: el chat invita a escribir y genera curiosidad.

## Dependencias
- Constitución vigente.
- Setup React + Vite + GitHub Pages (gh-pages o GitHub Actions).
- Documentación técnica en `docs/` (ver [arquitectura](../../docs/architecture.md) y [componentes](../../docs/components/README.md)).

## Preguntas abiertas
- ¿Se integrarán más secciones (features, comunidad) en esta versión?
- ¿Cuál será el tono final de los textos y el mix de idiomas?
