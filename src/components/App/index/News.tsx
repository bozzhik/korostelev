'use client'
import {useState} from 'react'

import NewsOneImage from '$/news/1.jpg'
import NewsTwoImage from '$/news/2.jpg'
import NewsThreeImage from '$/news/3.jpg'
import NewsFourImage from '$/news/4.jpg'

import Image, {StaticImageData} from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button, {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'

type NewsItem = {
  date: string
  token: string
  heading: string
  content: string[]
  image: StaticImageData
}

const servicesData: Record<string, NewsItem> = {
  1: {
    date: '18 октября 2024 г.',
    token: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции / Forbes',
    heading: '«Кордиант» купил завод-поставщика АО "АвтоВАЗ" у французского A.Raymond Group',
    content: [`Управляющий партнер Korostelev & Partners Максим Коростелёв в составе S8 Capital сопровождал сделку M&A по приобретению поставщика АО "АвтоВАЗ" - завода по производству крепежных изделий французской группы A.Raymond. Данная работа включала в себя руководство группой юристов при проведении due diligence целевой компании, подготовку и переговоры по юридически обязывающей документации по сделке со штаб-квартирой A.Raymond во Франции и их юридическими консультантами, подготовку пакетов документов в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС для согласования сделки, а также взаимодействие со штаб-квартирой A.Raymond по вопросу получения регуляторных одобрений на сделку во Франции.`, `Приобретателем актива выступило одно из юридических лиц группы АО «Кордиант» (на тот момент входившей в холдинг S8 Capital). Приобретение завода у французского собственника позволило осуществлять беспрепятственные поставки автокомпонентов на заводы АО «АвтоВАЗ», которые до этого были приостановлены в связи с санкционными рисками. Впоследствии S8 Capital продал бывший завод A.Raymond "Севергрупп" Алексея Мордашова в составе группы "Кордиант".`, `https://www.forbes.ru/biznes/523370-kordiant-kupil-zavod-avtokomponentov-u-francuzskogo-a-raymond-group`],
    image: NewsOneImage,
  },
  2: {
    date: '20 декабря 2023 г.',
    token: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции / Коммерсант',
    heading: 'Максим Коростелёв участвовал в юридическом сопровождении сделки по приобретению шинного завода Bridgestone',
    content: ['Управляющий партнер Korostelev & Partners Максим Коростелёв в составе S8 Capital сопровождал сделку M&A по приобретению шинного завода Bridgestone в Ульяновской области у японской корпорации Bridgestone.', 'После приобретения шинного завода Bridgestone инвестиционно-промышленный холдинг S8 Capital стал на момент закрытия сделки вторым крупнейшим производителем шин в России.', 'В рамках сделки Максим Коростелёв осуществлял подготовку документацию и переговоры по сделке, курировал вопросы согласования сделки в Правительственной комиссии и ФАС и осуществлял взаимодействие с бельгийским и иными подразделениями Bridgestone по вопросу получения компанией-продавцом государственного одобрения на сделку в Бельгии.', 'https://www.kommersant.ru/doc/6412480'],
    image: NewsTwoImage,
  },
  3: {
    date: '24 октября 2023 г.',
    token: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции / Ведомости',
    heading: 'Максим Коростелёв закрыл сделку по приобретению российских активов KONE',
    content: [`Управляющий партнер Korostelev & Partners Максим Коростелёв в составе S8 Capital сопровождал сделку M&A по приобретению российского сервисно-монтажного бизнеса у финской корпорации KONE – производителя лифтов, кранов, эскалаторов, траволаторов и пассажирских подъемников. Для KONE данная сделка была уходом с российского рынка.`, `В рамках бизнеса в России KONE не занималась производством лифтов, которые импортировались из других стран, однако российское подразделение KONE осуществляло монтаж лифтов на объектах клиентов и послепродажное обслуживание и ремонт, что составляет львиную долю выручки в бизнесе вертикального транспорта. Российское подразделение KONE имело сервисно-монтажный портфель клиентов в большинстве регионов России.`, `В рамках сделки было приобретено российское акционерное общество, позднее переименованное в АО «ЛифтКоннект». В рамках сделки Максим Коростелёв вел переговоры со штаб-квартирой KONE в Финляндии и ее юридическими консультантами. Максим также руководил группой юристов при проведении due diligence, подготовке юридически обязывающей документации по сделке, подготовке ходатайств в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС и закрытии сделки.`, `https://www.vedomosti.ru/business/news/2023/10/24/1002134-s8-capital-kupil-biznes-finskogo-proizvoditelya-liftov-kone`],
    image: NewsThreeImage,
  },
  4: {
    date: '24 января 2024 г.',
    token: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции / Коммерсант',
    heading: 'Максим Коростелёв сопровождал сделку M&A по приобретению бизнеса американской корпорации Huntsman',
    content: [`Управляющий партнер Korostelev & Partners Максим Коростелёв в составе S8 Capital сопровождал сделку M&A по приобретению российского бизнеса американской корпорации Huntsman. В периметр сделки входил химический завод по производству полимеров в городе Обнинске Калужской области и торговый дом по продаже продукции завода. Завод выпускает полиуретановую продукцию для строительства, автомобильной, трубной, обувной промышленности.`, `Как указывает Коммерсант, компания Huntsman основана в Калифорнии в 1970 году Джоном Хантсманом, сын которого, его полный тезка,— бывший посол США в России. Взлет бизнеса Huntsman произошел благодаря изобретению контейнера-раскладушки для «Биг Мака» для корпорации McDonald's.`, `Максим Коростелёв обеспечивал и координировал due diligence, переговоры со штаб-квартирой Huntsman в Техасе, США, и ее юридическими консультантами в США и ОАЭ, подготовку и согласование документации по сделке, получение регуляторных одобрений на сделку в России, США и ЕС.`, `Сделка была подписана, но впоследствии расторгнута по взаимной договоренности сторон.`, `https://www.kommersant.ru/doc/6466169`],
    image: NewsFourImage,
  },
}

export default function News() {
  const [selectedNews, setSelectedNews] = useState(servicesData[1])

  const handleNewsClick = (news: NewsItem) => {
    setSelectedNews(news)
  }

  return (
    <section id="news" data-section="news-index" className="relative z-20 pt-32 space-y-8 xl:pt-24 sm:pt-12 sm:space-y-6 bg-background sm:bg-red sm:text-background">
      <div className="flex items-end justify-between px-8 sm:px-4">
        <SplitText>
          <Heading type="h1" className="uppercase" text="Новости" />
        </SplitText>
        <SplitText>
          <ExpandButton to="#" className="sm:hidden" mode="light" text="Посмотреть все" />
        </SplitText>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col justify-between sm:gap-0">
          {Object.entries(servicesData).map(([key, news]) => (
            <div key={key} className="relative h-full pl-10 duration-200 sm:space-y-5 py-7 sm:p-0 sm:pb-5 group hover:bg-red hover:text-background hover:pl-14 sm:hover:pl-0" onClick={() => handleNewsClick(news)}>
              <Image quality={100} className="hidden object-cover sm:block aspect-square" src={news.image} alt="" />

              <div className="space-y-2 sm:px-4">
                <Text type="h6" className="max-w-[70ch] uppercase line-clamp-1 text-foreground/65 sm:text-background-alt/65 group-hover:text-background-alt/65 sm:group-hover:text-background/65" text={`${news.date} // ${news.token}`} />
                <Text type="h4" className="line-clamp-2 max-w-[35ch] font-normal" text={news.heading} />
              </div>

              <div className="hidden w-full px-4 sm:block">
                <ModalTrigger key={key} tag={news.token} heading={news.heading} content={news.content}>
                  <Button variant="solid" mode="dark" className="w-[90vw] flex-row-reverse text-foreground bg-background" text="Посмотреть" />
                </ModalTrigger>
              </div>
            </div>
          ))}
        </div>

        <Image quality={100} className="object-cover w-full h-full sm:hidden" src={selectedNews.image} alt="" key={selectedNews.image.src} />
      </div>
    </section>
  )
}
