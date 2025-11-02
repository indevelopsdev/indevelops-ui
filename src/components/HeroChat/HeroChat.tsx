import { useEffect, useRef } from 'react'
import { useChatEngine } from '../../hooks/useChatEngine'
import { ChatInput } from '../ChatInput/ChatInput'
import { SocialPreview } from '../SocialPreview/SocialPreview'
import styles from './HeroChat.module.css'

export function HeroChat() {
  const { messages, inputValue, setInputValue, sendMessage, isThinking } = useChatEngine()
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = chatRef.current
    if (node) {
      node.scrollTop = node.scrollHeight
    }
  }, [messages])

  return (
    <section className={styles.hero}>
      <div>
        <p className={styles.kicker}>Specification-Driven Development · IA</p>
        <h1 className={styles.headline}>
          No te explicamos qué es indevelops. Te dejamos preguntarlo.
        </h1>
        <p className={styles.subcopy}>
          Una experiencia para devs que prefieren precisión antes que humo. indevelops piensa como
          tú: parte de una especificación, sigue un plan y transforma el código en un producto
          nítido.
        </p>
        <div className={styles.badgeGroup}>
          <span className={styles.badge}>Spec Kit</span>
          <span className={styles.badge}>Chat asistido</span>
          <span className={styles.badge}>Roadmap claro</span>
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelHeader}>
          <span>terminal/indevelops</span>
          <span>⌘ control inteligente</span>
        </div>
        <div className={styles.chatlog} ref={chatRef} role="log" aria-live="polite">
          {messages.map((message) => (
            <div key={message.id} className={styles.message}>
              <span className={styles.sender}>
                {message.sender === 'user' ? 'Tú' : 'indevelops'}
              </span>
              {message.kind === 'social' ? (
                <div className={styles.messageBody}>
                  <p className={styles.messageText}>{message.text}</p>
                  <SocialPreview
                    url={message.url ?? '#'}
                    handle={message.handle ?? '@in_develops'}
                    teaser={message.teaser ?? ''}
                    meta={message.meta ?? 'X'}
                  />
                </div>
              ) : (
                <p className={styles.messageText}>{message.text}</p>
              )}
            </div>
          ))}
        </div>
        {isThinking && <div className={styles.thinking}>indevelops está pensando…</div>}
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSubmit={sendMessage}
          disabled={isThinking}
          placeholder="Pregúntanos cómo ordenamos tus specs…"
        />
        <a
          className={styles.cta}
          href="https://github.github.io/spec-kit/"
          target="_blank"
          rel="noreferrer"
        >
          Ver cómo funciona <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  )
}
