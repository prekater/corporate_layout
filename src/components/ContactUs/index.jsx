import { useState } from 'react'

import styles from './ContactUs.module.scss'

export const ContactUs = () => {
  const [formValues, setFormValues] = useState({ name: '', phone: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('formValues', formValues)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  return (
    <article className={styles.root}>
      <h2 className={styles.title}>
        Закажите
        <br />
        консультацию
      </h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.fields}>
          <label htmlFor="name" className={styles.label}>
            Ваше имя
            <input type="text" name="name" onChange={handleChange} value={formValues.name} className={styles.input} />
          </label>
          <label htmlFor="phone" className={styles.label}>
            Телефон
            <input type="text" name="phone" onChange={handleChange} value={formValues.phone} className={styles.input} />
          </label>
          <label htmlFor="email" className={styles.label}>
            Email
            <input type="text" name="email" onChange={handleChange} value={formValues.email} className={styles.input} />
          </label>
        </div>
        <button type="submit" className={styles.submitButton}>
          Отправить запрос
        </button>
      </form>
    </article>
  )
}
