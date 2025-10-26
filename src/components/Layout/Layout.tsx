import type { PropsWithChildren } from 'react'
import styles from './Layout.module.css'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
