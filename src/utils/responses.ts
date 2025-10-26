const hints = [
  'Idea → Especificación → Plan → Implementación. Nada fuera de orden.',
  'Spec Kit mantiene el ADN del proyecto legible y ejecutable.',
  'Podemos conectar con tu backend más adelante para respuestas en tiempo real.',
]

const knowledgeBase: Record<string, string> = {
  indevelops:
    'indevelops es un entorno inteligente que transforma ideas técnicas en productos reales siguiendo especificaciones vivas.',
  'spec kit':
    'Spec Kit nos obliga a definir constitución, especificaciones y planes antes de tocar código. Es lo que mantiene la precisión.',
  metodologia:
    'No hacemos “vibe coding”. Cada paso se valida contra la especificación, y la automatización mantiene el foco.',
  roadmap:
    'El flujo se compone de 4 pasos: Idea, Spec, Plan e Implementación. Cada entrega lo respeta.',
}

const clean = (input: string) =>
  input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

export async function getResponse(message: string): Promise<string> {
  const normalized = clean(message)

  if (normalized.includes('hola') || normalized.includes('buen')) {
    return 'Hola. No soy una landing tradicional. Pregunta lo que necesites saber de indevelops.'
  }

  if (normalized.includes('que es') || normalized.includes('qué es')) {
    return `${knowledgeBase.indevelops} Pregunta por nuestro roadmap si quieres ver los pasos.`
  }

  if (normalized.includes('spec kit')) {
    return knowledgeBase['spec kit']
  }

  if (normalized.includes('como funciona') || normalized.includes('cómo funciona')) {
    return (
      'Funciona como un copiloto estructurado: defines la intención, Spec Kit genera las piezas y el front las convierte en experiencia.' +
      ' Nada sale sin pasar por la especificación.'
    )
  }

  if (normalized.includes('roadmap') || normalized.includes('pasos')) {
    return knowledgeBase.roadmap
  }

  if (normalized.includes('metodo') || normalized.includes('metodologia')) {
    return knowledgeBase.metodologia
  }

  const fallback = hints[Math.floor(Math.random() * hints.length)]
  return `${knowledgeBase.indevelops} ${fallback}`
}
