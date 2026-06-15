import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>

      {/* Видео фон */}
      <video
        className={styles.heroBg}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Тёмный оверлей */}
      <div className={styles.heroOverlay} />

      {/* Контент */}
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span className={styles.eyebrowText}>
            iPODO · Centre of Podology & Beauty · Черногория
          </span>
        </div>

        <h1 className={styles.heroTitle}>
          iPODO —<br />
          больше чем<br />
          <em>салон.</em>
        </h1>

        <p className={styles.heroSub}>
          Медицинский подход. Салонный сервис. Партнёрство.<br />
          Всё в одном месте.
        </p>

        <div className={styles.heroCta}>
          <a href="#services" className={styles.btnPrimary}>
            Наши услуги
          </a>
          <a href="/franchise" className={styles.btnSecondary}>
            Франшиза и инвестиции
          </a>
        </div>
      </div>

    </section>
  )
}