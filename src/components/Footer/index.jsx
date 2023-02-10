import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.contacts}>
        <img src="/images/logo-white.svg" alt="IT Technology" className={styles.logo} />
        <span className={styles.email}>it-technology@internet.ru</span>
        <span>+7 915 278 77 13</span>
      </div>
      <span className={styles.copyright}>
        ©2018-{String(new Date().getFullYear())}, ООО "АЙ-ТИ ТЕХНОЛОДЖИ", ОГРН:&nbsp;1225000127714, ИНН:&nbsp;5032348463
      </span>
    </footer>
  )
}
