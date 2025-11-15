import styles from './SocialPreview.module.css'

type SocialPreviewProps = {
  url: string
  name: string
  handle: string
  teaser: string
  meta: string
  avatarUrl?: string
}

export function SocialPreview({ url, name, handle, teaser, meta, avatarUrl }: SocialPreviewProps) {
  const initials = handle.replace('@', '').slice(0, 2).toUpperCase()
  const base = import.meta.env.BASE_URL ?? '/'
  const normalizeAvatar = (path: string) => {
    if (path.startsWith('http')) return path
    const trimmedBase = base.endsWith('/') ? base.slice(0, -1) : base
    const normalizedPath = path.startsWith('/') ? path : `/${path}`
    return `${trimmedBase}${normalizedPath}`
  }
  const avatarSrc = avatarUrl ? normalizeAvatar(avatarUrl) : undefined

  return (
    <a className={styles.card} href={url} target="_blank" rel="noreferrer">
      <p className={styles.meta}>{meta}</p>
      <div className={styles.handleRow}>
        {avatarSrc ? (
          <img
            className={styles.avatarImage}
            src={avatarSrc}
            alt={`Avatar de ${handle}`}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className={styles.avatarFallback}>{initials}</span>
        )}
        <div className={styles.identity}>
          <span className={styles.displayName}>{name}</span>
          <span className={styles.handle}>{handle}</span>
        </div>
      </div>
      <p className={styles.teaser}>{teaser}</p>
      <span className={styles.cta}>
        Abrir en X <span aria-hidden="true">↗</span>
      </span>
    </a>
  )
}
