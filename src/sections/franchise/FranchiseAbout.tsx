import styles from "./FranchiseAbout.module.css";

export default function FranchiseAbout() {
  return (
    <section className={styles.about}>
      {/* Блок 1 — Что такое активная франшиза */}
      <div className={styles.block}>
        <div className={styles.blockLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span>Активная франшиза</span>
          </div>
          <h2 className={styles.title}>
            Вы управляете.
            <br />
            Вы зарабатываете
            <br />
            <em>максимум.</em>
          </h2>
        </div>
        <div className={styles.blockRight}>
          <p className={styles.text}>
            Активная франшиза iPODO — это для тех, кто хочет быть внутри
            бизнеса. Вы становитесь не просто владельцем, но и операционным
            директором своей студии.
          </p>
          <p className={styles.text}>
            Вы работаете по стандартам iPODO, согласовываете решения с нами — и
            получаете максимальную прибыль от бизнеса.
          </p>
          <div className={styles.price}>
            <span className={styles.priceNum}>от 5 000 €</span>
            <span className={styles.priceLabel}>минимальный старт</span>
          </div>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Блок 2 — Модульная система */}
      <div className={styles.block}>
        <div className={styles.blockLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span>Модульная система</span>
          </div>
          <h2 className={styles.title}>
            Соберите свой
            <br />
            салон как
            <br />
            <em>конструктор.</em>
          </h2>
        </div>
        <div className={styles.blockRight}>
          <p className={styles.text}>
            Не нужно брать всё сразу. Выберите только те направления которые вам
            нужны — и начните с малого.
          </p>
          <div className={styles.modules}>
            {[
              { name: "Место подолога", price: "от 5 000 €" },
              { name: "Место маникюра / педикюра", price: "от 5 000 €" },
              { name: "Место парикмахера", price: "от 5 000 €" },
              { name: "Полный центр iPODO", price: "от 20 000 €" },
            ].map((m) => (
              <div key={m.name} className={styles.module}>
                <span className={styles.moduleName}>{m.name}</span>
                <span className={styles.modulePrice}>{m.price}</span>
              </div>
            ))}
          </div>
          <p className={styles.textSmall}>
            Стерилизационное оборудование входит в комплект. Расширяйте студию
            по мере роста.
          </p>
        </div>
      </div>

      <div className={styles.divider} />

      {/* Блок 3 — Почему iPODO */}
      <div className={styles.block}>
        <div className={styles.blockLeft}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span>Почему iPODO</span>
          </div>
          <h2 className={styles.title}>
            Готовая система.
            <br />
            <em>Ваш успех.</em>
          </h2>
        </div>
        <div className={styles.blockRight}>
          <div className={styles.reasons}>
            {[
              {
                num: "01",
                text: "Бренд с историей — узнаваемость и доверие клиентов с первого дня",
              },
              {
                num: "02",
                text: "Стандарты качества — медицинский подход, стерильность, сервис",
              },
              {
                num: "03",
                text: "Обучение команды — онлайн и офлайн форматы для ваших мастеров",
              },
              {
                num: "04",
                text: "Поддержка 24/7 — мы рядом на каждом этапе открытия и работы",
              },
            ].map((r) => (
              <div key={r.num} className={styles.reason}>
                <span className={styles.reasonNum}>{r.num}</span>
                <span className={styles.reasonText}>{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
