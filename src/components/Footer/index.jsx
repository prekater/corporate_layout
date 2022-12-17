import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.root}>
      <img src="/images/logo-white.svg" alt="STMGCO" className={styles.logo} />
      <span className={styles.email}>office@stmgco.com</span>
      <span>8 916 405 64 97</span>
    </footer>
  )
}
