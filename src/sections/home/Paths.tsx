import { useTranslation } from 'react-i18next'
import styles from './Paths.module.css'

export default function Paths() {
  const { t } = useTranslation()

  const directions = [
    {
      tag: '01',
      key: 'clients',
      href: '#contact',
    },
    {
      tag: '02',
      key: 'franchise',
      href: '/franchise',
    },
    {
      tag: '03',
      key: 'invest',
      href: '/invest',
    },
  ]

  return (
    <section className={styles.paths}>
      <div className={styles.header}>
        <span className={styles.headerDot} />
        <span className={styles.headerText}>{t('directions.header')}</span>
      </div>

      <div className={styles.grid}>
        {directions.map((dir) => (
          <div key={dir.tag} className={styles.card}>
            <div className={styles.cardTag}>{dir.tag}</div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{t(`directions.${dir.key}.title`)}</h2>
              <p className={styles.cardDesc}>{t(`directions.${dir.key}.desc`)}</p>
            </div>
            <a href={dir.href} className={styles.cardCta}>
              {t(`directions.${dir.key}.cta`)}
              <span className={styles.ctaArrow}>→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}