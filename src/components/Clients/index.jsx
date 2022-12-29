import styles from './Clients.module.scss'

export const Clients = ({ refProp }) => {
  return (
    <article className={styles.root} id="clients" ref={refProp}>
      <h3 className={styles.title}>
        НАШИ
        <br /> клиенты
      </h3>
      <div className={styles.tilesWrapper}>
        <img src="/images/clients/LibrateGroup.svg" width="100%" alt="LibrateGroup" className={styles.librate} />
        <img src="/images/clients/JTI.svg" width="100%" alt="JTI" className={styles.jti} />
        <img src="/images/clients/GreenWorks.svg" width="100%" alt="GreenWorks" className={styles.green} />
        <img src="/images/clients/APK_Kamskiy.svg" width="100%" alt="APK_Kamskiy" className={styles.apk} />
        <img src="/images/clients/AutoProfi.svg" width="100%" alt="AutoProfi" className={styles.autoProfi} />
        <img src="/images/clients/Garo.svg" width="100%" alt="Garo" className={styles.garo} />
        <img src="/images/clients/CreateCool.svg" width="100%" alt="CreateCool" className={styles.create} />
      </div>
    </article>
  )
}
