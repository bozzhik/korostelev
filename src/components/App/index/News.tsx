'use client'
import {useState} from 'react'

import NewsOneImage from '$/news/181024.jpg'
import NewsTwoImage from '$/news/250624.jpg'
import NewsThreeImage from '$/news/250424.jpg'
import NewsFourImage from '$/news/240124.jpg'
// import NewsFiveImage from '$/news/241023.jpg'
// import NewsSixImage from '$/news/201223.jpg'

import Image, {StaticImageData} from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'

type NewsItem = {
  date: string
  token: string
  heading: string
  content: string[]
  image: StaticImageData
  source?: string
}

const servicesData: Record<string, NewsItem> = {
  '18.10.24': {
    date: '18 октября 2024 г.',
    token: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции / Forbes',
    heading: '«Кордиант» купил завод-поставщика АО "АвтоВАЗ" у французского A.Raymond Group',
    content: [`Управляющий партнёр Korostelev & Partners Максим Коростелёв в составе S8 Capital сопровождал сделку M&A по приобретению поставщика АО "АвтоВАЗ" - завода по производству крепежных изделий французской группы A.Raymond. Данная работа включала в себя руководство группой юристов при проведении due diligence целевой компании, подготовку и переговоры по юридически обязывающей документации по сделке со штаб-квартирой A.Raymond во Франции и их юридическими консультантами, подготовку пакетов документов в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС для согласования сделки, а также взаимодействие со штаб-квартирой A.Raymond по вопросу получения регуляторных одобрений на сделку во Франции.`, `Приобретателем актива выступило одно из юридических лиц группы АО «Кордиант» (на тот момент входившей в холдинг S8 Capital). Приобретение завода у французского собственника позволило осуществлять беспрепятственные поставки автокомпонентов на заводы АО «АвтоВАЗ», которые до этого были приостановлены в связи с санкционными рисками. Впоследствии S8 Capital продал бывший завод A.Raymond "Севергрупп" Алексея Мордашова в составе группы "Кордиант".`],
    image: NewsOneImage,
    source: 'https://www.forbes.ru/biznes/523370-kordiant-kupil-zavod-avtokomponentov-u-francuzskogo-a-raymond-group',
  },
  '20.12.23': {
    date: '20 декабря 2023 г.',
    token: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции / Коммерсант',
    heading: 'Максим Коростелёв участвовал в юридическом сопровождении сделки по приобретению шинного завода Bridgestone',
    content: ['Управляющий партнёр Korostelev & Partners Максим Коростелёв в составе S8 Capital сопровождал сделку M&A по приобретению шинного завода Bridgestone в Ульяновской области у японской корпорации Bridgestone.', 'После приобретения шинного завода Bridgestone инвестиционно-промышленный холдинг S8 Capital стал на момент закрытия сделки вторым крупнейшим производителем шин в России.', 'В рамках сделки Максим Коростелёв осуществлял подготовку документацию и переговоры по сделке, курировал вопросы согласования сделки в Правительственной комиссии и ФАС и осуществлял взаимодействие с бельгийским и иными подразделениями Bridgestone по вопросу получения компанией-продавцом государственного одобрения на сделку в Бельгии.'],
    image: NewsTwoImage,
    source: 'https://www.kommersant.ru/doc/6412480',
  },
  '24.10.23': {
    date: '24 октября 2023 г.',
    token: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции / Ведомости',
    heading: 'Максим Коростелёв закрыл сделку по приобретению российских активов KONE',
    content: [`Управляющий партнёр Korostelev & Partners Максим Коростелёв в составе S8 Capital сопровождал сделку M&A по приобретению российского сервисно-монтажного бизнеса у финской корпорации KONE – производителя лифтов, кранов, эскалаторов, траволаторов и пассажирских подъемников. Для KONE данная сделка была уходом с российского рынка.`, `В рамках бизнеса в России KONE не занималась производством лифтов, которые импортировались из других стран, однако российское подразделение KONE осуществляло монтаж лифтов на объектах клиентов и послепродажное обслуживание и ремонт, что составляет львиную долю выручки в бизнесе вертикального транспорта. Российское подразделение KONE имело сервисно-монтажный портфель клиентов в большинстве регионов России.`, `В рамках сделки было приобретено российское акционерное общество, позднее переименованное в АО «ЛифтКоннект». В рамках сделки Максим Коростелёв вел переговоры со штаб-квартирой KONE в Финляндии и ее юридическими консультантами. Максим также руководил группой юристов при проведении due diligence, подготовке юридически обязывающей документации по сделке, подготовке ходатайств в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС и закрытии сделки.`],
    image: NewsThreeImage,
    source: 'https://www.vedomosti.ru/business/news/2023/10/24/1002134-s8-capital-kupil-biznes-finskogo-proizvoditelya-liftov-kone',
  },
  '24.01.24': {
    date: '24 января 2024 г.',
    token: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции / Коммерсант',
    heading: 'Максим Коростелёв сопровождал сделку M&A по приобретению бизнеса американской корпорации Huntsman',
    content: [`Управляющий партнёр Korostelev & Partners Максим Коростелёв в составе S8 Capital сопровождал сделку M&A по приобретению российского бизнеса американской корпорации Huntsman. В периметр сделки входил химический завод по производству полимеров в городе Обнинске Калужской области и торговый дом по продаже продукции завода. Завод выпускает полиуретановую продукцию для строительства, автомобильной, трубной, обувной промышленности.`, `Как указывает Коммерсант, компания Huntsman основана в Калифорнии в 1970 году Джоном Хантсманом, сын которого, его полный тезка,— бывший посол США в России. Взлет бизнеса Huntsman произошел благодаря изобретению контейнера-раскладушки для «Биг Мака» для корпорации McDonald's.`, `Максим Коростелёв обеспечивал и координировал due diligence, переговоры со штаб-квартирой Huntsman в Техасе, США, и ее юридическими консультантами в США и ОАЭ, подготовку и согласование документации по сделке, получение регуляторных одобрений на сделку в России, США и ЕС.`, `Сделка была подписана, но впоследствии расторгнута по взаимной договоренности сторон.`],
    image: NewsFourImage,
    source: 'https://www.kommersant.ru/doc/6466169',
  },
  // '25.06.24': {
  //   date: '25 июня 2024 г.',
  //   token: 'M&A, Правительственная комиссия, санкции и контрсанкции, мероприятия',
  //   heading: 'Максим Коростелёв выступил на XIV Российском M&A Конгрессе: Белые ночи 2024',
  //   content: [`Максим Коростелёв выступил на XIV Российском M&A Конгрессе: Белые ночи 2024 в Санкт-Петербурге 25 июня 2024 г. Конгресс традиционно принимал в гостях лучших специалистов в области M&A в России.`, `Максим выступал в рамках сессии «Новые российские MBO и LBO. Новая география для российского бизнеса. Промежуточные итоги редома 2024». В рамках доклада Максим рассказал про практические аспекты совершения сделок management buyout и leveraged buyout в России, особенности их согласования в Правительственной комиссии, нюансы установления ключевых показателей эффективности компании в протоколе об одобрении сделки и контроля за их исполнением.`],
  //   image: NewsTwoImage,
  //   source: 'https://cbonds-congress.ru/events/1189/agenda/',
  // },
  // '25.04.24': {
  //   date: '25 апреля 2024 г.',
  //   token: 'M&A, Правительственная комиссия, санкции и контрсанкции, мероприятия',
  //   heading: 'Максим Коростелёв выступил на XIV Российском M&A Конгрессе',
  //   content: [`Максим Коростелёв выступил на XIV Российском M&A Конгрессе, организованном Cbonds congress в Москве 25 апреля 2024 г. Конгресс объединил лучших спикеров из инвестиционных банков, инвестиционно-промышленных холдингов и юридических фирм, специализирующихся на M&A, а также наиболее активных юристов и финансистов из сектора M&A.`, `В рамках доклада Максим Коростелёв рассказал про риски оспаривания согласованных Правительственной комиссией сделок, в частности, про то, в каких случаях нужно и в каких не нужно согласовывать сделку с Правительственной комиссией, какими будут последствия отсутствия согласования, а также поделился практическим опытом и отдельными нюансами согласования сделок с Правительственной комиссией в рамках «санкционного M&A».`],
  //   image: NewsThreeImage,
  //   source: 'https://cbonds-congress.ru/events/1115/conference/',
  // },
}

export default function News() {
  const [selectedNews, setSelectedNews] = useState(servicesData['18.10.24'])

  const handleNewsHover = (news: NewsItem) => {
    setSelectedNews(news)
  }

  return (
    <section id="news" data-section="news-index" className="relative z-20 pt-32 space-y-8 xl:pt-24 sm:pt-12 sm:space-y-6 bg-background sm:bg-red sm:text-background">
      <div className="flex items-end justify-between px-8 sm:px-4">
        <SplitText>
          <Heading type="h1" className="uppercase" text="Новости" />
        </SplitText>
        {/* <SplitText>
          <ExpandButton to="#" className="sm:hidden" mode="light" text="Посмотреть все" />
        </SplitText> */}
      </div>

      {/* desktop view */}
      <div className="grid grid-cols-2 sm:hidden">
        <div className="flex flex-col justify-between">
          {Object.entries(servicesData).map(([key, {date, token, heading, content, image, source}]) => (
            <ModalTrigger key={key} tag={token} heading={heading} content={content} image={image} source={source}>
              <div onMouseEnter={() => handleNewsHover({date, token, heading, content, image, source})} className="relative h-full pl-10 text-left duration-200 cursor-pointer py-7 group hover:bg-red hover:text-background hover:pl-14">
                <div className="space-y-2 pr-6 sm:px-4">
                  <Text type="h6" className="max-w-[70ch] uppercase line-clamp-1 text-foreground/65 group-hover:text-background-alt/65" text={`${date} // ${token}`} />
                  <Text type="h4" className="line-clamp-2 max-w-[35ch] font-normal" text={heading} />
                </div>
              </div>
            </ModalTrigger>
          ))}
        </div>

        <Image quality={100} priority={true} className="object-cover w-full h-full" src={selectedNews.image} alt="" key={selectedNews.image.src} />
      </div>

      {/* mobile view */}
      <div className="flex-col justify-between hidden gap-0 sm:flex">
        {Object.entries(servicesData).map(([key, {date, token, heading, content, image, source}]) => (
          <div onMouseEnter={() => handleNewsHover({date, token, heading, content, image, source})} key={key} className="relative h-full pb-5 space-y-5 duration-200 group hover:bg-red hover:text-background">
            <Image quality={100} className="object-cover aspect-square" src={image} alt="" />

            <div className="space-y-2 sm:px-4">
              <Text type="h6" className="max-w-[70ch] uppercase line-clamp-1 text-foreground/65 sm:text-background-alt/65 group-hover:text-background-alt/65 sm:group-hover:text-background/65" text={`${date} // ${token}`} />
              <Text type="h4" className="line-clamp-2 max-w-[35ch] font-normal" text={heading} />
            </div>

            <div className="w-full px-4">
              <ModalTrigger key={key} tag={token} heading={heading} content={content} source={source}>
                <Button variant="solid" mode="dark" className="w-[90vw] flex-row-reverse text-foreground bg-background" text="Посмотреть" />
              </ModalTrigger>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
