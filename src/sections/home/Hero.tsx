import { useTranslation } from 'react-i18next'
import styles from './Hero.module.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className={styles.hero}>
      <video className={styles.heroBg} autoPlay muted loop playsInline>
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.heroOverlay} />
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span className={styles.eyebrowText}>{t('hero.eyebrow')}</span>
        </div>
        <h1 className={styles.heroTitle}>
          {t('hero.line1')}<br />
          {t('hero.line2')}<br />
          <em>{t('hero.line3')}</em>
        </h1>
        <p className={styles.heroSub}>{t('hero.sub')}</p>
        <div className={styles.heroCta}>
          <a href="#services" className={styles.btnPrimary}>{t('hero.cta1')}</a>
          <a href="/franchise" className={styles.btnSecondary}>{t('hero.cta2')}</a>
        </div>
      </div>
    </section>
  )
}