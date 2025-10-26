import { useReducer, useState } from 'react'
import { getResponse } from '../utils/responses'

export type ChatMessage = {
  id: string
  sender: 'user' | 'indevelops'
  text: string
  timestamp: number
}

type Action =
  | { type: 'append'; payload: ChatMessage }
  | { type: 'reset'; payload: ChatMessage[] }

type ChatState = {
  messages: ChatMessage[]
}

const initialMessages: ChatMessage[] = [
  {
    id: 'intro',
    sender: 'indevelops',
    text: 'Pregúntame qué es indevelops o cómo ordenamos tus specs.',
    timestamp: Date.now(),
  },
]

function reducer(state: ChatState, action: Action): ChatState {
  switch (action.type) {
    case 'append':
      return { messages: [...state.messages, action.payload] }
    case 'reset':
      return { messages: action.payload }
    default:
      return state
  }
}

const createId = () =>
  typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`

export function useChatEngine() {
  const [state, dispatch] = useReducer(reducer, { messages: initialMessages })
  const [inputValue, setInputValue] = useState('')
  const [isThinking, setIsThinking] = useState(false)

  const sendMessage = async (raw: string) => {
    const trimmed = raw.trim()
    if (!trimmed || isThinking) return

    const outbound: ChatMessage = {
      id: createId(),
      sender: 'user',
      text: trimmed,
      timestamp: Date.now(),
    }

    dispatch({ type: 'append', payload: outbound })
    setInputValue('')
    setIsThinking(true)

    const delay = 500 + Math.random() * 400

    window.setTimeout(async () => {
      const replyText = await getResponse(trimmed)
      const inbound: ChatMessage = {
        id: createId(),
        sender: 'indevelops',
        text: replyText,
        timestamp: Date.now(),
      }

      dispatch({ type: 'append', payload: inbound })
      setIsThinking(false)
    }, delay)
  }

  return {
    messages: state.messages,
    inputValue,
    setInputValue,
    sendMessage,
    isThinking,
  }
}
