import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './Gallery.module.css'

const IMAGES = [1,2,3,4,5,6,7]

export default function Gallery() {
  const { t } = useTranslation()
  const trackRef = useRef<HTMLDivElement>(null)
  const isDown = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const onMouseDown = (e: React.MouseEvent) => {
    isDown.current = true
    startX.current = e.pageX - trackRef.current!.offsetLeft
    scrollLeft.current = trackRef.current!.scrollLeft
    trackRef.current!.style.cursor = 'grabbing'
  }
  const onMouseLeave = () => { isDown.current = false; trackRef.current!.style.cursor = 'grab' }
  const onMouseUp = () => { isDown.current = false; trackRef.current!.style.cursor = 'grab' }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return
    e.preventDefault()
    const x = e.pageX - trackRef.current!.offsetLeft
    trackRef.current!.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5
  }

  return (
    <section className={styles.gallery}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <span className={styles.headerDot} />
          <span className={styles.headerText}>{t('gallery.header')}</span>
        </div>
        <h2 className={styles.title}>{t('gallery.title')}</h2>
      </div>
      <div
        ref={trackRef}
        className={styles.track}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {IMAGES.map(n => (
          <div key={n} className={styles.slide}>
            <img
              src={`/gallery/images/${n}.webp`}
              alt={`iPODO studio ${n}`}
              draggable={false}
            />
          </div>
        ))}
      </div>
      <p className={styles.hint}>{t('gallery.hint')}</p>
    </section>
  )
}