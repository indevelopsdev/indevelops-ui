# SocialPreview

- **Ruta:** `src/components/SocialPreview/SocialPreview.tsx`
- **Responsabilidad:** mostrar una tarjeta enlazable a `@in_develops` cuando el chat detecta intención de participación/comunidad.

## Props
| Prop | Tipo | Descripción |
|------|------|-------------|
| `url` | `string` | Enlace hacia la cuenta en X (abierto en una nueva pestaña). |
| `handle` | `string` | Handle a mostrar (incluyendo `@`). |
| `teaser` | `string` | Mensaje corto invitando a seguir la cuenta. |
| `meta` | `string` | Texto pequeño superior (p. ej. “X · indevelops · Spec Kit drops”). |

## Comportamiento
- Deriva las iniciales para el avatar cuadrado.
- Usa un `<a>` con clases de estilo para que toda la card sea clicable.
- Incluye CTA “Abrir en X ↗”.

## Estilos
- `SocialPreview.module.css` aplica borde brillante, background con gradiente y hover con elevación.

Actualiza este documento si agregas nuevas variantes (por ejemplo, previews para Discord, newsletter, etc.).
