import { useTranslation } from 'react-i18next'
import styles from './FranchiseHero.module.css'

export default function FranchiseHero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        
        <h1 className={styles.title}>{t('franchise.title')}</h1>
        <p className={styles.sub}>{t('franchise.sub')}</p>
        <div className={styles.cta}>
          <a href="#formats" className={styles.btnPrimary}>{t('franchise.cta1')}</a>
          <a href="#contact" className={styles.btnSecondary}>{t('franchise.cta2')}</a>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statNum}>от 5 000 €</div>
          <div className={styles.statLabel}>{t('franchise.stat1')}</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <div className={styles.statNum}>30 дней</div>
          <div className={styles.statLabel}>{t('franchise.stat2')}</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <div className={styles.statNum}>150+</div>
          <div className={styles.statLabel}>{t('franchise.stat3')}</div>
        </div>
      </div>
    </section>
  )
}