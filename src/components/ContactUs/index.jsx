import { useState } from 'react'
import styles from './ContactUs.module.scss'

import axios from 'axios'
const API_PATH = 'http://a0759874.xsph.ru/api/contact/index.php'

export const ContactUs = () => {
  const [formValues, setFormValues] = useState({ name: '', phone: '', email: '', mailSent: false, error: null })

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

  return (
    <article className={styles.root} id="contact-us">
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
              pattern="^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я0-9-_\.]{1,20}$"
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
        <button type="submit" className={styles.submitButton}>
          Отправить запрос
        </button>
        {formValues.mailSent && <div className={styles.afterSubmit}>Спасибо за обращение! Мы свяжемся с Вами</div>}
      </form>
    </article>
  )
}
