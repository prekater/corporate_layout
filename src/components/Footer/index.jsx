import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={styles.contacts}>
        <img src="/images/logo-white.svg" alt="STMGCO" className={styles.logo} />
        <span className={styles.email}>office@stmgco.com</span>
        <span>8 916 405 64 97</span>
      </div>
      <span className={styles.copyright}>©2021-{String(new Date().getFullYear())}, ООО "СТМГ", ИНН: 9731083256, ОГРН: 1217700431387</span>
    </footer>
  )
}
