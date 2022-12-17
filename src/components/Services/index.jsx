import { useState } from 'react'
import styles from './Services.module.scss'

const content = [
  {
    title: 'Разработка ПО',
    img: 'sandglass',
    content:
      'Разрабатываем ПО для смартфонов на Andriod/iOS, планшетов и ПК. Поддерживаем, сопровождаем ПО для заказчиков. DevOps: настройка, управление и развертывание ПО с использованием ведущих облачных платформ. QA и тестирование: проверка программных продуктов на соответствие требованиям и ожиданиям клиентов.',
  },
  {
    title: 'Digital-маркетинг',
    img: 'like',
    content:
      'Создаем и закупаем контекстную рекламу. Создаем креатив. Influence-маркетинг. Анализируем рекламные площадки. Разрабатываем сайты. Внедряем  CRM-системы. ',
  },
  {
    title: 'SMM',
    img: 'target',
    content:
      'Ищем целевую аудиторию. Разрабатываем стратегии продвижения в соцсетях. Прорабатываем контент-план и контент. Создаем и публикуем контент для продвижения бренда. Проводим аналитику метрик и оценку результативности каналов.',
  },
  {
    title: 'SEO-оптимизация и продвижение сайтов',
    img: 'megaphone',
    content:
      'SEO-оптимизация сайта и SEO-копирайтинг. Поисковое продвижение сайта. Поддержка сайта и его редакция в соответствии с текущими ключевыми словами, ссылками и популярными запросами',
  },
]

export const Services = () => {
  const [activeServiceImg, setActiveServiceImg] = useState('sandglass')
  const [isShowDetails, setIsShowDetails] = useState(false)
  const [activeService, setActiveService] = useState(content[0])

  const handleActiveImage = (param) => setActiveServiceImg(param)

  const handleClickItem = (index) => {
    setActiveService(content[index])
    setActiveServiceImg(content[index].img)
    setIsShowDetails(true)
  }

  const handleCloseDetails = () => setIsShowDetails(false)

  return (
    <article className={styles.root}>
      <div className={styles.leftColumn}>
        <span className={styles.title}>Услуги</span>
        <img
          src={`/images/services/${activeServiceImg}.png`}
          srcSet={`/images/services/${activeServiceImg}-2x.png 2x`}
          alt={activeServiceImg}
          className={styles.image}
        />
      </div>
      <div className={styles.rightColumn}>
        {isShowDetails ? (
          <article className={styles.details}>
            <div className={styles.detailsHeader}>
              <span className={styles.detailsTitle}>{activeService.title}</span>
              <img src="/images/close-icon.svg" alt="close" className={styles.detailsCloseBtn} onClick={handleCloseDetails} />
            </div>
            <img
              src={`/images/services/${activeServiceImg}.png`}
              srcSet={`/images/services/${activeServiceImg}-2x.png 2x`}
              alt={activeServiceImg}
              className={styles.detailsImage}
            />
            <p className={styles.detailsText}>{activeService.content}</p>
          </article>
        ) : (
          <ul className={styles.list}>
            {content.map((item, index) => (
              <li
                className={styles.listItem}
                onMouseOver={() => handleActiveImage(item.img)}
                key={item.title}
                onClick={() => handleClickItem(index)}
              >
                <span className={styles.listItemText}> {item.title}</span>
                <img src="/images/chevron-right.svg" alt={item.title} className={styles.chevronRight} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
