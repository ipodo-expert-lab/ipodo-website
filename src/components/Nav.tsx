import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Nav.module.css'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Закрывать меню при скролле
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuIsOpen : ''}`}>
        <a href="/" className={styles.logo}>iPODO</a>

        {/* Десктоп меню */}
        <div className={styles.links}>
          <a href="#services">{t('nav.services')}</a>
          <a href="#franchise">{t('nav.franchise')}</a>
          <a href="#invest">{t('nav.invest')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </div>

        <div className={styles.navRight}>
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

          {/* Бургер */}
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Мобильное меню */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileLinks}>
          <a href="#services" onClick={closeMenu}>{t('nav.services')}</a>
          <a href="#franchise" onClick={closeMenu}>{t('nav.franchise')}</a>
          <a href="#invest" onClick={closeMenu}>{t('nav.invest')}</a>
          <a href="#contact" onClick={closeMenu}>{t('nav.contact')}</a>
        </div>

        <div className={styles.mobileLang}>
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

        <div className={styles.mobileFooter}>
          <a href="tel:+38269295111" className={styles.mobilePhone}>+382 69 295 111</a>
        </div>
      </div>
    </>
  )
}