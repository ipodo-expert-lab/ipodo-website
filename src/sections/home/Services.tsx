import { useTranslation } from 'react-i18next'
import styles from './Services.module.css'

export default function Services() {
  const { t } = useTranslation()

  const services = [
    {
      key: 'podology',
      icon: '✦',
    },
    {
      key: 'manicure',
      icon: '✦',
    },
    {
      key: 'hair',
      icon: '✦',
    },
    {
      key: 'brows',
      icon: '✦',
    },
  ]

  return (
    <section className={styles.services} id="services">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.headerDot} />
          <span className={styles.headerText}>{t('services.header')}</span>
        </div>
        <h2 className={styles.headerTitle}>{t('services.title')}</h2>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.key} className={styles.card}>
            <div className={styles.cardIcon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{t(`services.${s.key}.title`)}</h3>
            <p className={styles.cardDesc}>{t(`services.${s.key}.desc`)}</p>
            <div className={styles.cardLine} />
          </div>
        ))}
      </div>
    </section>
  )
}