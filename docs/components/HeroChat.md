# HeroChat

- **Ruta:** `src/components/HeroChat/HeroChat.tsx`
- **Responsabilidad:** arma el hero de la home, renderizando copy principal, badges y el panel del chat.
- **Dependencias:**
  - `useChatEngine` para estado y lógica del chat.
  - `ChatInput` para el formulario accesible.
  - `SocialPreview` para mostrar la tarjeta de X cuando corresponde.

## Flujo interno
1. Inicializa el hook `useChatEngine` → recibe mensajes, input y estado `isThinking`.
2. Renderiza el historial: cada mensaje muestra emisor (`Tú` / `indevelops`); si `kind === 'social'`, se invoca `SocialPreview`.
3. Mantiene el scroll al final mediante un `ref` y `useEffect`.
4. Muestra una etiqueta `indevelops está pensando…` durante la espera simulada.
5. Incluye CTA “Ver cómo funciona” apuntando a la documentación de Spec Kit.

## Estilos
- `HeroChat.module.css` define la grid hero, los badges, panel retro y animaciones de mensajes.
- Las tarjetas sociales heredan el contraste y la tipografía monoespaciada para mantener la estética terminal.

Mantén este archivo actualizado si agregas nuevas acciones (por ejemplo, comandos intra-chat, conectores a backend o métricas visuales).
