import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <div className={styles.logo}>iPODO</div>
          <p className={styles.tagline}>Centre of Podology & Beauty</p>
          <p className={styles.location}>Черногория</p>
        </div>

        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.colTitle}>{t('nav.services')}</div>
            <a href="#services" className={styles.colLink}>Подология</a>
            <a href="#services" className={styles.colLink}>Маникюр & Педикюр</a>
            <a href="#services" className={styles.colLink}>Парикмахерская</a>
            <a href="#services" className={styles.colLink}>Брови & Ресницы</a>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>Партнёрство</div>
            <a href="/franchise" className={styles.colLink}>{t('nav.franchise')}</a>
            <a href="/invest" className={styles.colLink}>{t('nav.invest')}</a>
            <a href="https://ipodoexpertlab.com/" target="_blank" rel="noopener" className={styles.colLink}>Обучение →</a>
          </div>

          <div className={styles.col}>
            <div className={styles.colTitle}>{t('nav.contact')}</div>
            <a href="tel:+38269295111" className={styles.colLink}>+382 69 295 111</a>
            <a href="https://t.me/ipodo" target="_blank" rel="noopener" className={styles.colLink}>Telegram</a>
            <a href="https://wa.me/38269295111" target="_blank" rel="noopener" className={styles.colLink}>WhatsApp</a>
            <a href="mailto:info@ipodo.pro" className={styles.colLink}>info@ipodo.pro</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} iPODO. Все права защищены.</span>
        <span>ipodo.pro</span>
      </div>
    </footer>
  )
}