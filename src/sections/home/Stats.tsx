import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Stats.module.css'

const STATS = [
  { value: 7,    suffix: '',      key: 'years'    },
  { value: 1000, suffix: '+',     key: 'clients'  },
  { value: 1,    suffix: '%',     key: 'income'   },
  { value: 5000, suffix: ' €',    key: 'franchise' },
]

function useCounter(ref: React.RefObject<HTMLSpanElement | null>, target: number) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      obs.disconnect()
      const duration = 1800
      const start = performance.now()
      const step = (now: number) => {
        const p = Math.min((now - start) / duration, 1)
        const ease = 1 - Math.pow(1 - p, 3)
        el.textContent = Math.round(ease * target).toString()
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref, target])
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  useCounter(ref, value)
  return (
    <div className={styles.item}>
      <div className={styles.number}>
        <span ref={ref}>0</span>{suffix}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}

export default function Stats() {
  const { t } = useTranslation()
  return (
    <section className={styles.stats}>
      {STATS.map(s => (
        <StatItem
          key={s.key}
          value={s.value}
          suffix={s.suffix}
          label={t(`stats.${s.key}`)}
        />
      ))}
    </section>
  )
}