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
        <p className={styles.kicker}>Specification-Driven Development · AI</p>
        <div className={styles.brand}>
          <img
            className={styles.logo}
            src="/profile-cropped.png"
            alt="indevelops"
          />
          <h1 className={styles.headline}>indevelops</h1>
        </div>
        <p className={styles.subcopy}>
          Convierte tus preguntas en especificaciones ejecutables.
        </p>
        <div className={styles.badgeGroup}>
          <span className={styles.badge}>Spec kit</span>
          <span className={styles.badge}>Chat asistido</span>
          <span className={styles.badge}>Roadmap</span>
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
                    name={message.name ?? 'indevelops'}
                    handle={message.handle ?? '@indevelops_ai'}
                    teaser={message.teaser ?? ''}
                    meta={message.meta ?? 'X'}
                    avatarUrl={message.avatarUrl}
                  />
                </div>
              ) : (
                <p className={styles.messageText}>{message.text}</p>
              )}
            </div>
          ))}
        </div>
        {isThinking && <div className={styles.thinking}>Procesando…</div>}
        <ChatInput
          value={inputValue}
          onChange={setInputValue}
          onSubmit={sendMessage}
          disabled={isThinking}
          placeholder="Pregunta lo que quieras"
        />
      </div>
    </section>
  )
}
