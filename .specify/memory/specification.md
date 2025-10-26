# indevelops UI Specification

## Visión
Crear un home hero que rompa la lógica tradicional de una landing y refuerce la idea de que indevelops es un entorno de desarrollo guiado por especificaciones que “piensa” junto al usuario. La interfaz debe sentirse como un chat retro-centro de comando que provoca curiosidad y motiva al visitante a preguntar “¿qué es indevelops?” en lugar de leer un tocho de contenido.

## Público objetivo
Desarrolladores/teams técnicos interesados en metodologías rigurosas (Spec Kit, automatización, IA) y personas que valoran claridad estructurada sobre marketing vacío.

## Objetivos clave
1. Transmitir precisión técnica, serenidad visual y control inteligente apenas se carga la página.
2. Enfatizar que indevelops es “un entorno de desarrollo guiado por especificaciones” y que elimina la brecha entre idea, código y documentación.
3. Invitar a la interacción mediante un chat central grande estilo retro-terminal que sugiere IA asistiendo el flujo.
4. Mostrar señales de progreso estructurado (pasos, roadmap, specs) sin saturar la vista.
5. Preparar la interfaz para expandirse a más secciones en el futuro (e.g., detalles de plataforma, documentación).

## Experiencia del usuario
- Hero pantalla completa con gradiente oscuro o fondo minimalista.
- Chat central (card) con tipografía monoespaciada y estilo terminal retro-moderna.
- Mensaje inicial contundente: “No te explicamos qué es indevelops. Te dejamos preguntarlo.”
- Campo de input/prompt simulado (no funcional en esta fase) que anima a escribir.
- Copy auxiliar muy corto (ej. “Entorno de desarrollo guiado por especificaciones · Powered by Spec Kit + IA”).
- Pequeña barra/roadmap con pasos (“Idea → Spec → Plan → Implementación”) para reforzar estructura.
- Botón/CTA secundario “Ver cómo funciona” apuntando a una sección futura o placeholder.
- Footer mínimo con enlace a GitHub Pages / repositorio.

## Contenidos obligatorios
- Título o mensaje hero con la frase clave anterior.
- Subtítulo que resuma la propuesta: “indevelops es un entorno inteligente que transforma ideas técnicas en productos reales basándose en especificaciones.”
- Etiquetas destacando: “Spec Kit”, “Specification-Driven Development”, “IA integrada”.
- Indicador visual de progreso (4 pasos con etiquetas).

## Restricciones de diseño
- Diseño limpio, minimalista, abundante espacio negativo, contraste controlado.
- Paleta: fondo oscuro + acentos en cian/verde fosforescente + tipografía neutra (sans) combinada con mono para chat.
- Accesibilidad: contraste AA, foco visible, estructuras semánticas correctas.

## Alcance técnico del MVP
- Aplicación React (Vite) desplegable en GitHub Pages.
- Componentes previstos: `HeroChat`, `RoadmapStrip`, `Layout`.
- Responsividad básica (desktop ≥1024px, tablet ≥768px, móvil).
- Animaciones suaves permitidas (fade-in, cursor parpadeante) sin impactar performance.
- Chat funcional básico: el usuario escribe y recibe respuestas predefinidas/heurísticas locales (sin backend). Guardar historial en memoria local para la sesión y mostrarlo en la tarjeta tipo terminal.

## Fuera de alcance (por ahora)
- Autenticación, dashboards, documentación completa.
- Backend remoto/LLM reales: esta versión usa respuestas locales, pero la UI y arquitectura deben quedar preparadas para conectar posteriormente con un servicio que reciba el mensaje y devuelva respuestas.
- Persistencia en la nube (solo memoria local de sesión).

## Métricas de éxito
- Claridad del mensaje (usuarios entienden en 5 segundos que es una herramienta estructurada e inteligente).
- Interacción instigada: al menos un CTA visible invita a continuar explorando.
- LCP < 2s en GitHub Pages y bundle inicial < 250KB.

## Dependencias
- Constitución vigente.
- Setup React + Vite + GitHub Pages (gh-pages o GitHub Actions).

## Preguntas abiertas
- ¿Se integrarán más secciones (features, comunidad) en esta versión?
- ¿Se desea copy multilingüe o solo español?
