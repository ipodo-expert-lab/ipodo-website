import { useTranslation } from 'react-i18next'
import styles from './Marquee.module.css'

export default function Marquee() {
  const { t } = useTranslation()
  const items = t('marquee.items', { returnObjects: true }) as string[]
  const repeated = [...items, ...items, ...items]

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {repeated.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}