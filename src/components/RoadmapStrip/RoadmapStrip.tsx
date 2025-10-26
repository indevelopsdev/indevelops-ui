import styles from './RoadmapStrip.module.css'

const steps = [
  { title: 'Idea', active: true },
  { title: 'Spec', active: true },
  { title: 'Plan', active: true },
  { title: 'Implementación', active: false },
]

export function RoadmapStrip() {
  return (
    <div className={styles.strip}>
      {steps.map((step) => (
        <span
          key={step.title}
          className={`${styles.step} ${step.active ? styles.stepActive : ''}`}
        >
          <span className={styles.indicator} aria-hidden="true" />
          {step.title}
        </span>
      ))}
    </div>
  )
}
