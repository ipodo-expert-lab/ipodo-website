import styles from './InvestAbout.module.css'

export default function InvestAbout() {
  return (
    <section className={styles.about} id="details">

      <div className={styles.block}>
        <div className={styles.blockLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span>Как это работает</span>
          </div>
          <h2 className={styles.title}>
            Просто.<br />
            Прозрачно.<br />
            <em>Гарантировано.</em>
          </h2>
        </div>
        <div className={styles.blockRight}>
          <div className={styles.steps}>
            {[
              { num: '01', title: 'Вы инвестируете', text: 'От 100 000 € — единовременный взнос. Договор с фиксированными условиями.' },
              { num: '02', title: 'Мы открываем студию', text: 'iPODO берёт на себя всё — помещение, оборудование, персонал, операционку.' },
              { num: '03', title: 'Вы получаете доход', text: '1% в месяц — 12% годовых. Выплаты ежемесячно. Гарантировано договором.' },
              { num: '04', title: 'Бонус инвестора', text: 'Пожизненная скидка 30% на все услуги iPODO для вас и вашей семьи.' },
            ].map((s) => (
              <div key={s.num} className={styles.step}>
                <span className={styles.stepNum}>{s.num}</span>
                <div>
                  <div className={styles.stepTitle}>{s.title}</div>
                  <div className={styles.stepText}>{s.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      <div className={styles.block}>
        <div className={styles.blockLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span>Стать агентом</span>
          </div>
          <h2 className={styles.title}>
            Порекомендуйте<br />
            и получите<br />
            <em>1 000 €.</em>
          </h2>
        </div>
        <div className={styles.blockRight}>
          <p className={styles.text}>
            Знаете кого-то кто ищет надёжные инвестиции или хочет открыть бизнес в сфере красоты? Порекомендуйте iPODO — и получите 1 000 € после заключения договора.
          </p>
          <p className={styles.text}>
            Никаких формальностей. Просто познакомьте нас с нужным человеком.
          </p>
          <a href="#contact" className={styles.btn}>Стать агентом</a>
        </div>
      </div>

    </section>
  )
}