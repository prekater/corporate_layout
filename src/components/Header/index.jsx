import styles from './Header.module.scss'

export const Header = ()=>{
    return (
        <header className={styles.root}>
            <img src="/images/logo.svg" alt="STMG.CO" width="212px" height="72px"/>
            <nav>
                <span>О нас</span>
                <span>Наши услуги</span>
                <span>Клиенты</span>
            </nav>
            <button type="button" className={styles.contactButton}>Cвяжитесь с нами</button>
        </header>
    )
}