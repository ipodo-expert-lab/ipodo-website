import styles from './InvestHero.module.css'

export default function InvestHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          <span>iPODO · Инвестиции</span>
        </div>
        <h1 className={styles.title}>
          Ваши деньги<br />
          работают.<br />
          <em>Вы — нет.</em>
        </h1>
        <p className={styles.sub}>
          Пассивный доход без участия в операционной деятельности. Мы управляем студией — вы получаете доход.
        </p>
        <div className={styles.cta}>
          <a href="#details" className={styles.btnPrimary}>Узнать условия</a>
          <a href="#contact" className={styles.btnSecondary}>Задать вопрос</a>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <div className={styles.statNum}>1%</div>
          <div className={styles.statLabel}>в месяц</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <div className={styles.statNum}>12%</div>
          <div className={styles.statLabel}>годовых</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <div className={styles.statNum}>100 000 €</div>
          <div className={styles.statLabel}>минимальный вход</div>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.stat}>
          <div className={styles.statNum}>30%</div>
          <div className={styles.statLabel}>скидка на услуги</div>
        </div>
      </div>
    </section>
  )
}