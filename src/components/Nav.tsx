import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  const scrollToSection = (id: string) => {
    closeMenu()
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuIsOpen : ''}`}
      >
        <Link to="/" className={styles.logo}>
          iPODO
        </Link>

        <div className={styles.links}>
          <button className={styles.navBtn} onClick={() => scrollToSection('services')}>
            {t('nav.services')}
          </button>
          <Link to="/franchise">{t('nav.franchise')}</Link>
          <Link to="/invest">{t('nav.invest')}</Link>
          <button className={styles.navBtn} onClick={() => scrollToSection('contact')}>
            {t('nav.contact')}
          </button>
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

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileLinks}>
          <button className={styles.mobilNavBtn} onClick={() => scrollToSection('services')}>
            {t('nav.services')}
          </button>
          <Link to="/franchise" onClick={closeMenu}>
            {t('nav.franchise')}
          </Link>
          <Link to="/invest" onClick={closeMenu}>
            {t('nav.invest')}
          </Link>
          <button className={styles.mobilNavBtn} onClick={() => scrollToSection('contact')}>
            {t('nav.contact')}
          </button>
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
          <a href="tel:+38269295111" className={styles.mobilePhone}>
            +382 69 295 111
          </a>
        </div>
      </div>
    </>
  )
}