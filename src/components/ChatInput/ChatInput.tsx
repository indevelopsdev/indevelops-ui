import type { FormEvent } from 'react'
import styles from './ChatInput.module.css'

type ChatInputProps = {
  value: string
  onChange: (value: string) => void
  onSubmit: (value: string) => void
  disabled?: boolean
  placeholder?: string
}

export function ChatInput({
  value,
  onChange,
  onSubmit,
  disabled = false,
  placeholder = 'Escribe tu pregunta…',
}: ChatInputProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!value.trim() || disabled) return
    onSubmit(value.trim())
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.inputWrapper}>
        <span className="sr-only">Pregunta a indevelops</span>
        <input
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
        />
      </label>
      <button className={styles.submit} type="submit" disabled={disabled}>
        Preguntar
      </button>
    </form>
  )
}
