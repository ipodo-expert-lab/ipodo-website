import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaPhone, FaTelegramPlane, FaWhatsapp, FaViber, FaMapMarkerAlt } from 'react-icons/fa'
import styles from './Contact.module.css'

const contacts = [
  { href: 'tel:+38269295111', icon: React.createElement(FaPhone, { size: 20 }), label: 'Телефон' },
  { href: 'https://t.me/ipodo', icon: React.createElement(FaTelegramPlane, { size: 20 }), label: 'Telegram' },
  { href: 'https://wa.me/38269295111', icon: React.createElement(FaWhatsapp, { size: 20 }), label: 'WhatsApp' },
  { href: 'viber://chat?number=+38269295111', icon: React.createElement(FaViber, { size: 20 }), label: 'Viber' },
  { href: 'https://maps.google.com/?q=Herceg+Novi+Montenegro', icon: React.createElement(FaMapMarkerAlt, { size: 20 }), label: 'Адрес' },
]

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.inner}>

        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            <span>{t('contact.header')}</span>
          </div>
          <h2 className={styles.title}>{t('contact.title')}</h2>
          <p className={styles.sub}>{t('contact.sub')}</p>

          <div className={styles.iconRow}>
            {contacts.map((c) =>
              React.createElement(
                'a',
                {
                  key: c.label,
                  href: c.href,
                  target: c.href.startsWith('http') ? '_blank' : undefined,
                  rel: 'noopener',
                  className: styles.iconLink,
                  'aria-label': c.label,
                },
                c.icon
              )
            )}
          </div>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>✦</div>
              <h3 className={styles.successTitle}>{t('contact.successTitle')}</h3>
              <p className={styles.successSub}>{t('contact.successSub')}</p>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label className={styles.label}>{t('contact.name')}</label>
                <input
                  className={styles.input}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Ваше имя"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>{t('contact.phone')}</label>
                <input
                  className={styles.input}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+382 69 000 000"
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>{t('contact.message')}</label>
                <textarea
                  className={styles.textarea}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  rows={4}
                />
              </div>
              <button type="submit" className={styles.btn}>
                {t('contact.submit')}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}