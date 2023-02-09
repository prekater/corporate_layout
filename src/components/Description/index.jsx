import styles from './Description.module.scss'

export const Description = ({ refProp }) => {
  return (
    <article className={styles.root} id="about" ref={refProp}>
      <div className={styles.column}>
        <h6 className={styles.title}>
          Почему
          <br />
          IT Technology?
        </h6>
        <p className={styles.text}>
          Занимаемся разработкой программного обеспечения, созданием мобильных приложений, веб-дизайном и продвижением брендов в интернете.
        </p>
      </div>
      <div className={styles.column}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.blueChevron}>‹</span> 5 лет эффективной работы
          </li>
          <li className={styles.listItem}>
            <span className={styles.blueChevron}>‹</span> 80 компаний-клиентов
          </li>
          <li className={styles.listItem}>
            <span className={styles.blueChevron}>‹</span> 50 сотрудников
          </li>
        </ul>
      </div>
    </article>
  )
}
