import { useState } from 'react'
import styles from './Header.module.scss'

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const handleBurger = (param) => () => setIsBurgerOpen(param)

  return (
    <header className={styles.root}>
      <div className={styles.burgerLogoWrapper}>
        {isBurgerOpen ? (
          <img
            src="/images/close-icon.svg"
            alt="close"
            onClick={handleBurger(false)}
            width="24px"
            height="24px"
            className={styles.burgerClose}
          />
        ) : (
          <img
            src="/images/burger-icon.svg"
            alt="menu"
            width="24px"
            height="24px"
            className={styles.burgerIcon}
            onClick={handleBurger(true)}
          />
        )}
        <img src="/images/logo.svg" alt="STMG.CO" className={styles.logo} />
      </div>
      <nav className={styles.navBar}>
        <a className={styles.navItem} href="#about">
          О нас
        </a>
        <a className={styles.navItem} href="#services">
          Наши услуги
        </a>
        <a className={styles.navItem} href="#clients">
          Клиенты
        </a>
      </nav>
      <button type="button" className={styles.contactButton}>
        Cвяжитесь с нами
      </button>
      {isBurgerOpen && (
        <div className={styles.burgerWrapper}>
          <nav className={styles.burger}>
            <a className={styles.burgerItem} href="#about" onClick={handleBurger(false)}>
              О нас
            </a>
            <a className={styles.burgerItem} href="#services" onClick={handleBurger(false)}>
              Наши услуги
            </a>
            <a className={styles.burgerItem} href="#clients" onClick={handleBurger(false)}>
              Клиенты
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
