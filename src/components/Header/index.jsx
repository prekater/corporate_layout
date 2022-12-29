import { useState } from 'react'
import styles from './Header.module.scss'
import { useScrollLock } from '../../hooks'

export const Header = ({ onHandleScroll, aboutRef, servicesRef, contactUsRef, clientsRef }) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false)

  const { lockScroll, unlockScroll } = useScrollLock()

  const handleBurger = (param, element) => () => {
    setIsBurgerOpen(param)
    isBurgerOpen ? unlockScroll() : lockScroll()
    onHandleScroll(element)
  }

  const handleNavItemClick = (element) => {
    if (isBurgerOpen) {
      setIsBurgerOpen(false)
      unlockScroll()
    }
    onHandleScroll(element)
  }

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
        <div className={styles.navItem} onClick={() => handleNavItemClick(aboutRef)}>
          О нас
        </div>
        <div className={styles.navItem} onClick={() => handleNavItemClick(servicesRef)}>
          Наши услуги
        </div>
        <div className={styles.navItem} onClick={() => handleNavItemClick(clientsRef)}>
          Клиенты
        </div>
      </nav>
      <div className={styles.contactButton} onClick={() => handleNavItemClick(contactUsRef)}>
        Cвяжитесь с нами
      </div>
      {isBurgerOpen && (
        <div className={styles.burgerWrapper}>
          <nav className={styles.burger}>
            <div className={styles.burgerItem} onClick={handleBurger(false, aboutRef)}>
              О нас
            </div>
            <div className={styles.burgerItem} onClick={handleBurger(false, servicesRef)}>
              Наши услуги
            </div>
            <div className={styles.burgerItem} onClick={handleBurger(false, clientsRef)}>
              Клиенты
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
