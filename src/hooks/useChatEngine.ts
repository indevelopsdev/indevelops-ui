import { useReducer, useState } from 'react'
import { getResponse, type ChatReply } from '../utils/responses'

export type ChatMessage = {
  id: string
  sender: 'user' | 'indevelops'
  kind: 'text' | 'social'
  text: string
  timestamp: number
  url?: string
  handle?: string
  teaser?: string
  meta?: string
  avatarUrl?: string
  name?: string
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
    kind: 'text',
    text: 'Hola, ¿en qué puedo ayudarte hoy?',
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
      kind: 'text',
      text: trimmed,
      timestamp: Date.now(),
    }

    dispatch({ type: 'append', payload: outbound })
    setInputValue('')
    setIsThinking(true)

    const delay = 900 + Math.random() * 600

    window.setTimeout(async () => {
      const reply: ChatReply = await getResponse(trimmed)
      const baseInbound = {
        id: createId(),
        sender: 'indevelops' as const,
        timestamp: Date.now(),
      }

      const inbound: ChatMessage =
        reply.type === 'social'
          ? {
              ...baseInbound,
              kind: 'social',
              text: reply.message,
              url: reply.url,
              handle: reply.handle,
              teaser: reply.teaser,
              meta: reply.meta,
              avatarUrl: reply.avatarUrl,
              name: reply.name,
            }
          : {
              ...baseInbound,
              kind: 'text',
              text: reply.message,
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
