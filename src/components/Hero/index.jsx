import styles from './Hero.module.scss'

export const Hero = () => {
  return (
    <main className={styles.root}>
      <h1 className={styles.mainHeader}>
        <span className={styles.marquee}>Разработка ПО, SMM, Digital-маркетинг</span>
      </h1>
      <div className={styles.mainBlockWrapper}>
        <span className={styles.mainText}>
          Мы помогаем компаниям выстраивать высокотехнологичные экосистемы и предоставлять клиентам качественный сервис.
        </span>
        <img src="/images/2men.png" srcSet="/images/2men-2x.png 2x" alt="2 men" className={styles.heroImage} />
      </div>
    </main>
  )
}
