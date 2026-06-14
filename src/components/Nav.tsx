import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <a href="/" className={styles.logo}>iPODO</a>
      <div className={styles.links}>
        <a href="#services">Услуги</a>
        <a href="#franchise">Франшиза</a>
        <a href="#invest">Инвестиции</a>
        <a href="#contact">Контакт</a>
      </div>
    </nav>
  )
}