import { useTranslation } from 'react-i18next'
import styles from './Marquee.module.css'

export default function Marquee() {
  const { t } = useTranslation()
  const items: string[] = t('marquee.items', { returnObjects: true })
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