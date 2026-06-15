import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Nav.module.css'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="/" className={styles.logo}>iPODO</a>

      <div className={styles.links}>
        <a href="#services">{t('nav.services')}</a>
        <a href="#franchise">{t('nav.franchise')}</a>
        <a href="#invest">{t('nav.invest')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </div>

      <div className={styles.langSwitcher}>
        {['ru', 'en', 'sr'].map((lang) => (
          <button
            key={lang}
            onClick={() => changeLang(lang)}
            className={`${styles.langBtn} ${i18n.language === lang ? styles.langActive : ''}`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  )
}