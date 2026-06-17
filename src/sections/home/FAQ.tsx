import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './FAQ.module.css'

const FAQ_KEYS = ['start','duration','income','formats','remote','guarantee','minAmount','countries']

export default function FAQ() {
  const { t } = useTranslation()
  const [open, setOpen] = useState<string | null>(null)
  const toggle = (key: string) => setOpen(prev => prev === key ? null : key)
  const col1 = FAQ_KEYS.slice(0, 4)
  const col2 = FAQ_KEYS.slice(4)

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.headerDot} />
          <span className={styles.headerText}>{t('faq.header')}</span>
        </div>
        <h2 className={styles.title}>{t('faq.title')}</h2>
      </div>
      <div className={styles.grid}>
        {[col1, col2].map((col, ci) => (
          <div key={ci} className={styles.column}>
            {col.map(key => (
              <div key={key} className={styles.item}>
                <button
                  className={`${styles.question} ${open === key ? styles.questionOpen : ''}`}
                  onClick={() => toggle(key)}
                >
                  <span>{t(`faq.items.${key}.q`)}</span>
                  <span className={`${styles.icon} ${open === key ? styles.iconOpen : ''}`}>+</span>
                </button>
                <div className={`${styles.answer} ${open === key ? styles.answerOpen : ''}`}>
                  <span className={styles.tag}>{t(`faq.items.${key}.tag`)}</span>
                  <p>{t(`faq.items.${key}.a`)}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}