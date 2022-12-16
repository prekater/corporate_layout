import styles from './Header.module.scss'

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={styles.burgerLogoWrapper}>
        <img src="/images/burger-icon.svg" alt="menu" width="24px" height="24px" className={styles.burgerIcon} />
        <img src="/images/logo.svg" alt="STMG.CO" className={styles.logo} />
      </div>
      <nav className={styles.navBar}>
        <span className={styles.navItem}>О нас</span>
        <span className={styles.navItem}>Наши услуги</span>
        <span className={styles.navItem}>Клиенты</span>
      </nav>
      <button type="button" className={styles.contactButton}>
        Cвяжитесь с нами
      </button>
    </header>
  )
}
