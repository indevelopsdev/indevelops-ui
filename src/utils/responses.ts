const hints = [
  'Idea → Especificación → Plan → Implementación. Nada fuera de orden.',
  'Spec Kit mantiene el ADN del proyecto legible y ejecutable.',
  'Podemos conectar con tu backend más adelante para respuestas en tiempo real.',
]

const knowledgeBase = {
  indevelops:
    'indevelops es un entorno inteligente que transforma ideas técnicas en productos reales siguiendo especificaciones vivas.',
  specKit:
    'Spec Kit nos obliga a definir constitución, especificaciones y planes antes de tocar código. Es lo que mantiene la precisión.',
  metodologia:
    'No hacemos “vibe coding”. Cada paso se valida contra la especificación, y la automatización mantiene el foco.',
  roadmap:
    'El flujo se compone de 4 pasos: Idea, Spec, Plan e Implementación. Cada entrega lo respeta.',
  comunidad: {
    name: 'indevelops',
    headline: '@indevelops_ai',
    url: 'https://x.com/indevelops_ai',
    teaser: 'Seguinos en X para ver el roadmap en tiempo real y preguntar cómo construimos con especificaciones.',
    meta: 'X · indevelops · Spec Kit drops',
    prompt:
      'En X publicamos drops de specs, sesiones en vivo y abrimos preguntas a la comunidad. Sumate si querés co-crear indevelops.',
    avatarUrl: '/profile.png',
  },
} as const

export type ChatReply =
  | { type: 'text'; message: string }
  | {
      type: 'social'
      message: string
      name: string
      url: string
      handle: string
      teaser: string
      meta: string
      avatarUrl?: string
    }

const clean = (input: string) =>
  input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export async function getResponse(message: string): Promise<ChatReply> {
  const normalized = clean(message)

  if (normalized.includes('hola') || normalized.includes('buen')) {
    return {
      type: 'text',
      message:
        'Hola. No soy una landing tradicional. Pregunta lo que necesites saber de indevelops.',
    }
  }

  if (normalized.includes('que es') || normalized.includes('qué es')) {
    return {
      type: 'text',
      message: `${knowledgeBase.indevelops} Pregunta por nuestro roadmap si quieres ver los pasos.`,
    }
  }

  if (normalized.includes('spec kit')) {
    return { type: 'text', message: knowledgeBase.specKit }
  }

  if (normalized.includes('como funciona') || normalized.includes('cómo funciona')) {
    return {
      type: 'text',
      message:
        'Funciona como un copiloto estructurado: defines la intención, Spec Kit genera las piezas y el front las convierte en experiencia. Nada sale sin pasar por la especificación.',
    }
  }

  if (normalized.includes('roadmap') || normalized.includes('pasos')) {
    return { type: 'text', message: knowledgeBase.roadmap }
  }

  if (normalized.includes('metodo') || normalized.includes('metodologia')) {
    return { type: 'text', message: knowledgeBase.metodologia }
  }

  if (
    normalized.includes('x.com') ||
    normalized.includes(' en x') ||
    normalized.endsWith(' x') ||
    normalized.includes('x?') ||
    normalized.includes('x )') ||
    normalized.includes(' twitter') ||
    normalized.includes('twitter ') ||
    normalized.includes('seguir') ||
    normalized.includes('redes') ||
    normalized.includes('comunidad') ||
    normalized.includes('participar')
  ) {
    return {
      type: 'social',
      message: knowledgeBase.comunidad.prompt,
      url: knowledgeBase.comunidad.url,
      handle: knowledgeBase.comunidad.headline,
      teaser: knowledgeBase.comunidad.teaser,
      meta: knowledgeBase.comunidad.meta,
      avatarUrl: knowledgeBase.comunidad.avatarUrl,
      name: knowledgeBase.comunidad.name,
    }
  }

  const fallback = hints[Math.floor(Math.random() * hints.length)]
  return {
    type: 'text',
    message: `${knowledgeBase.indevelops} ${fallback}`,
  }
}
