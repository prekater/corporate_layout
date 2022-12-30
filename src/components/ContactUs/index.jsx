import { useState, useRef } from 'react'
import axios from 'axios'

import { useScrollLock } from '../../hooks'

import { AgreementPopup } from './AgreementPopup/AgreementPopup'

import styles from './ContactUs.module.scss'

const API_PATH = 'http://a0759874.xsph.ru/api/contact/index.php'

export const ContactUs = ({ refProp }) => {
  const [isShowAgree, setIsShowAgree] = useState(false)
  const [formValues, setFormValues] = useState({ name: '', phone: '', email: '', isAgree: true })

  const { lockScroll, unlockScroll } = useScrollLock()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: formValues,
    })
      .then((result) => setFormValues({ ...formValues, mailSent: result.data.mailSent }))
      .catch((error) => setFormValues({ ...formValues, error: error.message }))
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleChangeCheckbox = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.checked })
  }

  const handleShowAgreement = () => {
    setIsShowAgree(!isShowAgree)
    isShowAgree ? unlockScroll() : lockScroll()
  }

  const overlayRef = useRef(null)

  const handleCloseByOverlay = (e) => {
    if (e.target === overlayRef.current) {
      handleShowAgreement()
    }
  }

  return (
    <article className={styles.root} id="contact-us" ref={refProp}>
      <h2 className={styles.title}>
        Закажите
        <br />
        консультацию
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <label htmlFor="name" className={styles.label}>
            Ваше имя
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formValues.name}
              className={styles.input}
              required
              pattern="^[[A-Za-zА-Яа-яЁё][[A-Za-zА-Яа-яЁё0-9-_\.\s*]{1,20}$"
              title="Имя должно начинаться с буквы"
            />
          </label>
          <label htmlFor="phone" className={styles.label}>
            Телефон
            <input type="text" name="phone" onChange={handleChange} value={formValues.phone} className={styles.input} />
          </label>
          <label htmlFor="email" className={styles.label}>
            Email
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={formValues.email}
              className={styles.input}
              required
              pattern="(\w\.?)+@[\w\.-]+\.\w{2,}"
              title="Например, example@mail.ru"
            />
          </label>
        </div>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" name="isAgree" checked={formValues.isAgree} onChange={handleChangeCheckbox} required />Я принимаю
          <button className={styles.agreement} onClick={handleShowAgreement} type="button">
            Условия соглашения
          </button>
          <span className={styles.checkboxMark} />
        </label>
        <button type="submit" className={styles.submitButton}>
          Отправить запрос
        </button>
        {formValues.mailSent && <div className={styles.afterSubmit}>Спасибо за обращение! Мы свяжемся с Вами</div>}
      </form>
      {isShowAgree && (
        <div className={styles.wrapperAgreement} onClick={handleCloseByOverlay} ref={overlayRef}>
          <button type="button" className={styles.closeButton} onClick={handleShowAgreement} />
          <AgreementPopup />
        </div>
      )}
    </article>
  )
}
