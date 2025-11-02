import styles from './SocialPreview.module.css'

type SocialPreviewProps = {
  url: string
  handle: string
  teaser: string
  meta: string
}

export function SocialPreview({ url, handle, teaser, meta }: SocialPreviewProps) {
  const initials = handle.replace('@', '').slice(0, 2).toUpperCase()

  return (
    <a className={styles.card} href={url} target="_blank" rel="noreferrer">
      <p className={styles.meta}>{meta}</p>
      <div className={styles.handleRow}>
        <span className={styles.avatar}>{initials}</span>
        <span className={styles.handle}>{handle}</span>
      </div>
      <p className={styles.teaser}>{teaser}</p>
      <span className={styles.cta}>
        Abrir en X <span aria-hidden="true">↗</span>
      </span>
    </a>
  )
}
