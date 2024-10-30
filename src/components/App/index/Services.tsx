'use client'

import {useState} from 'react'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'
import {ChevronDown} from 'lucide-react'
import {cn} from '@/lib/utils'

type Service = {
  best?: boolean
  heading: string
  description: string
  content: string[]
}

const servicesData: Record<string, Service> = {
  1: {
    best: true,
    heading: 'M&A',
    description: 'Мы сопровождаем внутрироссийские и международные сделки M&A по российскому и английскому праву',
    content: [`Наш опыт работы как в международных юридических фирмах, так и в инвестиционных фондах и инвестиционно-промышленных холдингах заключался в сопровождении процесса M&A, начиная с момента самого зарождения идеи и обсуждения основных условий сделки (term sheet) с продавцом/покупателем и заканчивая закрытием сделки и процессом интеграции актива в холдинг после закрытия. Это позволяет нам видеть процесс приобретения бизнеса не только в юридическом, но и в более широком бизнес ключе. Наш совокупный объем закрытых сделок превышает 50 млрд рублей и охватывает такие отрасли, как промышленность, коммерческая и жилая недвижимость, IT, нефтегазовая и горнодобывающая промышленность, медицина и фармацевтика. `, `Мы осуществляем юридическую и налоговую проверку (due diligence) целевой компании (target company) или группы компаний, юридическое структурирование сделки, подготовку (если требуется) юридически необязывающей документации по сделке (term sheet, letter of intent, memorandum of understanding и др.), подготовку юридически обязывающей документации по сделке, переговоры по сделке, сопровождение выполнения отлагательных условий и закрытия сделки. При необходимости мы также помогаем с реструктуризацией активов для целей их интеграции в группу покупателя.`, `Если для совершения сделки требуется получение разрешений государственных органов Российской Федерации, мы обеспечиваем подготовку соответствующих заявлений и ходатайств в государственные органы и взаимодействие с данными органами с целью получения разрешений.`, `В процессе сопровождения сделок M&A мы также обеспечиваем соблюдение законодательства о валютном регулировании и контроле (если предполагается совершение трансграничных платежей), взаимодействуем с банками, нотариусами, регистраторами и иными заинтересованными лицами с целью достижения консенсуса по всем условиям и беспрепятственного проведения сделки.`],
  },
  2: {
    heading: 'Совместные предприятия',
    description: 'Мы сопровождаем cделки по созданию совместных предприятий (joint ventures) в России и за рубежом',
    content: [
      `Мы имеем обширный опыт во всех сферах, касающихся структурирования, подготовки юридически обязывающей документации и запуска совместных предприятий в форме обществ с ограниченной ответственностью, акционерных обществ и иностранных организаций в различных юрисдикциях, создаваемых для преследования различных бизнес-интересов клиента.`,
      `Мы понимаем юридические и операционные нюансы, которые могут повлиять на договоренности с финансовым, технологическим или стратегическим партнёром, включая федеральное законодательство, налоговые последствия, отраслевые особенности регулирования и цели каждого из партнёров в совместном предприятии. Успешное совместное предприятие должно быть специально «настроено» под каждый конкретный бизнес, и мы являемся теми, кто может привнести дополнительную ценность для клиента в сделке по созданию совместного предприятия.`,
      `Мы осуществляем юридическое структурирование сделки по созданию совместного предприятия с партнёром (партнёрами), подготовку (если требуется) юридически необязывающей документации по сделке (term sheet, letter of intent, memorandum of understanding и др.), подготовку корпоративного договора (акционерного соглашения), подготовку документов о приобретении партнёрами долей в совместном предприятии (cash-in или cash-out), документов о передаче интеллектуальной собственности, оборудования и (или) недвижимости в совместное предприятие,  переговоры по сделке, сопровождение выполнения отлагательных условий и закрытия сделки.`,
      `Если для совершения сделки требуется получение разрешений государственных органов Российской Федерации, мы обеспечиваем подготовку соответствующих заявлений и ходатайств в государственные органы и взаимодействие с данными органами с целью получения разрешений.`,
      `В процессе сопровождения сделок по созданию совместных предприятий мы также обеспечиваем соблюдение законодательства о валютном регулировании и контроле (если предполагается совершение трансграничных платежей), взаимодействуем с банками, нотариусами, регистраторами и иными заинтересованными лицами с целью достижения консенсуса по всем условиям и беспрепятственного проведения сделки.`,
    ],
  },
  3: {
    best: true,
    heading: 'Венчурные инвестиции',
    description: 'Мы помогаем инвесторам осуществить инвестиции, а основателям стартапов - привлечь инвестиции в стартап на удовлетворяющих их условиях и с минимальными рисками',
    content: [`Мы имеем опыт сопровождения сделок по осуществлению венчурных инвестиций в стартапы как на стороне инвесторов, так и на стороне основателей стартапов, и понимаем данный процесс с обеих сторон. Мы сопровождали раунды привлечения инвестиций от посевной стадии (seed stage) до pre-IPO. Управляющий партнёр Korostelev & Partners Максим Коростелёв является сооснователем Клуба венчурных юристов (https://vclawyersclub.ru).`, `Мы осуществляем юридическую и налоговую проверку (due diligence) стартапа, юридическое и налоговое структурирование инвестиционной сделки, подготовку (если требуется) юридически необязывающей документации по сделке (term sheet, letter of intent, memorandum of understanding и др.), подготовку юридически обязывающей документации по сделке, в том числе корпоративного договора (акционерного соглашения), опционов, договоров займа, договоров конвертируемого займа и иных документов по сделке, переговоры по сделке, сопровождение выполнения отлагательных условий и закрытия сделки. Мы также учитываем отраслевую специфику стартапа и регуляторные аспекты для совершения сделки.`, `Мы также консультируем инвесторов и сопровождаем сделки по выходу инвесторов из инвестиций в стартап путем продажи доли основателям или стратегическому инвестору.`, `В процессе сопровождения венчурных сделок мы также обеспечиваем соблюдение законодательства о валютном регулировании и контроле (если предполагается совершение трансграничных платежей), взаимодействуем с банками, нотариусами, регистраторами и иными заинтересованными лицами с целью достижения консенсуса по всем условиям и беспрепятственного проведения сделки.`, `Для стартапов доступно также абонентское юридическое сопровождение их бизнеса, включающее решение любых юридических задач, возникающих перед стартапом.`],
  },
  4: {
    best: true,
    heading: 'Инвестиционные фонды',
    description: 'Наши услуги включают в себя сопровождение создания инвестиционных фондов в форме инвестиционного товарищества в России и в иных формах за рубежом',
    content: [`Пятилетний опыт по созданию, реструктуризации и ликвидации инвестиционных фондов, полученный в ходе работы в крупнейшем в России фонде фондов – Российской венчурной компании – позволяет нам оказывать клиентам услуги по структурированию инвестиционных фондов и регулированию отношений между управляющими фондов и инвесторами на высочайшем уровне. Управляющий партнёр Korostelev & Partners Максим Коростелёв является автором многочисленных публикаций о юридических аспектах договора инвестиционного товарищества, а также принимал участие в разработке федеральных законов, направленных на регулирование инвестиционного товарищества.`, `Наши услуги включают в себя сопровождение создания инвестиционных фондов в форме инвестиционного товарищества, а также инвестиционных фондов в иностранных юрисдикциях в форме limited partnership. Мы также помогаем нашим клиентам произвести реструктуризацию инвестиционного фонда, если это требуется для реализации определенных целей клиента, например, для разделения инвестиционного портфеля фонда на две или несколько частей.`, `В ходе создания фонда в форме инвестиционного товарищества мы занимаемся подготовкой необходимой документации по сделке, участвуем в переговорах и взаимодействуем с нотариусом по поводу нотариального удостоверения договора.`, `При создании инвестиционных фондов в иностранной юрисдикции наши услуги включают в себя выбор оптимальной юрисдикции для фонда, подготовку юридически обязывающей документации и переговоры с инвесторами и другими заинтересованными лицами. Мы также обеспечиваем получение лицензий и разрешений, необходимых для деятельности фонда.`],
  },
  5: {
    best: true,
    heading: 'Санкции и контрсанкции',
    description: 'Мы консультируем клиентов по санкционному законодательству США, Великобритании и Европейского союза, а также по российскому контрсанкционному регулированию, включая получение разрешений Правительственной комиссии по контролю за осуществлением иностранных инвестиций на сделки',
    content: [`Юристы Korostelev & Partners имеют опыт сопровождения сделок с санкционным элементом и структурирования бизнеса с учетом санкционных и контрсанкционных рисков. Мы консультировали клиентов по санкционным режимам США, Великобритании и Европейского союза, помогая клиентам обеспечивать санкционный комплаенс при проведении M&A сделок, венчурных сделок, создании и управлении инвестиционными фондами, поставках товаров и структурировании международных холдингов. Также команда Korostelev & Partners имеет опыт работы с российским контрсанкционным регулированием, обеспечивая соответствие бизнеса и сделок клиента Указам Президента РФ и другим актам контрсанкционного регулирования.`, `Кроме того, юристы Korostelev & Partners консультировали клиентов по вопросам получения разрешения Правительственной комиссии по контролю за осуществлением иностранных инвестиций (включая подкомиссию Правительственной комиссии) на отдельные сделки и занимались подготовкой соответствующих документов для получения разрешения.`, `Мы также консультируем клиентов в тех ситуациях, когда их контрагент не исполнил или отказался от исполнения договора в связи с введёнными санкционными ограничениями.`],
  },
  6: {
    heading: 'Антимонопольное право',
    description: 'Мы представляем интересы наших клиентов в Федеральной антимонопольной службе и получаем одобрения на сделки',
    content: [`Мы имеем опыт в представлении интересов российских и международных компаний, действующих в различных отраслях промышленности, в сфере финансов, торговли и услуг, в Федеральной антимонопольной службе.`, `Наши услуги включают в себя консультирование клиентов по антимонопольным вопросам в контексте корпоративных сделок, подготовку ходатайств о согласовании с ФАС России сделок M&A и иных сделок экономической концентрации, а также консультирование по вопросам законодательства об иностранных инвестициях в стратегические секторы экономики, включая подготовку соответствующих ходатайств и получение разрешений.`],
  },
  7: {
    heading: 'Недвижимость и строительство',
    description: 'Помогаем клиентам защитить их инвестиции в недвижимость',
    content: [`Мы имеем большой опыт в области работы с собственниками недвижимости и арендаторами. Мы знаем юридические аспекты управления арендными портфелями, структурируем сделки по купле-продаже недвижимости, заключению, сопровождению, продлению арендных отношений, реструктуризации портфелей недвижимости. Мы сопровождали инвестиционные проекты в сфере недвижимости в России и за рубежом. Наши услуги также включают в себя создание инвестиционных структур в России и других юрисдикциях для приобретения, финансирования и управления недвижимостью, сделки build-to-suit.`, `Мы также консультируем по вопросам прав на землю и водные ресурсы, приобретения земельных участков для целей строительства зданий и сооружений в рамках реализации крупных операционных и инфраструктурных проектов. Мы готовим для наших клиентов договоры на проектирование и строительство и участвуем в переговорах по ним, а также помогаем обеспечить комплаенс в области экологических требований, промышленной безопасности и иных регуляторных требований.`],
  },
  8: {
    best: true,
    heading: 'Энергетика и природные ресурсы',
    description: 'Мы консультируем клиентов по сделкам и регуляторным вопросам в сфере недропользования и реализации природных ресурсов',
    content: [`Опыт юристов Korostelev & Partners, полученный, в том числе, в Федеральном агентстве по недропользованию (государственный орган, выдающий лицензии на право пользования недрами), позволяет консультировать российских и иностранных клиентов по любым юридическим вопросам, возникающим на различных этапах жизненного цикла проектов по добыче нефти, газа и твердых полезных ископаемых – от геологического изучения, разведки и разработки месторождений до реализации продукции.`, `Управляющий партнёр Korostelev & Partners Максим Коростелёв прекрасно ориентируется в операционных и регуляторных аспектах недропользования имеет опыт оформления и переоформления лицензий на право пользования недрами, установления факта открытия месторождения, поставки запасов на баланс и оспаривания актов государственных органов в сфере недропользования.`, `Юристы Korostelev & Partners оказывают поддержку клиентам в связи со сделками M&A и созданием совместных предприятий в сфере недропользования, в связи с разрешением споров, вопросами регуляторного характера (включая вопросы экологии и промышленной безопасности) и другими вопросами, возникающими в процессе реализации проектов в сфере недропользования.`, `Наши услуги включают в себя: сопровождение сделок M&A в сфере недропользования; сопровождение создания совместных предприятий в сфере недропользования; консультирование по вопросам государственного регулирования и надзора за деятельностью в области недропользования; консультирование по вопросам реализации нефти, газа и твердых полезных ископаемых.`],
  },
  9: {
    heading: 'Корпоративная реструктуризация и редомициляция',
    description: 'Наши услуги включают в себя реструктуризацию российских и международных холдингов, а также редомициляцию иностранных компаний в САР',
    content: [`Команда Korostelev & Partners помогает клиентам с проведением корпоративных реструктуризаций холдингов, как российских, так и международных, которые связаны с решением тех или иных бизнес-задач клиентов, в частности, если стоит задача разделения российского и международного периметра бизнеса. В рамках данного направления работы юристы Korostelev & Partners проводят анализ текущей структуры холдинга и разрабатывают новую структуру холдинга с учетом целей, поставленных клиентом, готовят необходимые документы для проведения реструктуризации, в том числе внутригрупповые сделки купли-продажи акций/долей в уставном капитале, корпоративные одобрения, проводят реорганизацию юридических лиц, получают необходимые государственные одобрения на сделки (если требуется).`, `Команда Korostelev & Partners также помогает клиентам провести редомициляцию иностранных компаний в специальные административные районы России (САР). Наши услуги включают в себя анализ корпоративной структуры и основных видов деятельности компаний с целью определения целевой компании для переезда, анализ применимости льгот, действующих в САР, к ситуации клиента, а также анализ соотношения данных льгот с преимуществами иных юрисдикций для редомициляции. Совместно с международными партнёрами в соответствующей юрисдикции, откуда предполагается редомициляция, мы разрабатываем план редомициляции, в том числе с учетом требований локального законодательства соответствующей юрисдикции, выбираем подходящую организационно-правовую форму будущей международной компании, приводим учредительные документы и корпоративное управление в соответствие с императивными положениями российского законодательства, а также готовим пакет регистрационных документов для регистрации международной компании в САР.`],
  },
  10: {
    heading: 'Разрешение споров и медиация',
    description: 'Мы защищаем интересы наших клиентов в судах по спорам, связанным с защитой инвестиций и корпоративных прав',
    content: [`Мы представляем клиентов в коммерческих спорах в российских государственных судах всех уровней и третейских судах. Наши основные специализации: судебные споры, связанные с защитой инвестиций, в том числе с защитой права собственности на акции/доли/иные финансовые инструменты, защита участников корпораций (корпоративные конфликты, споры из корпоративных договоров и акционерных соглашений, оспаривание корпоративных сделок и решений и др.), оспаривание актов государственных органов, связанных с инвестициями и недропользованием.`, `Юристы Korostelev & Partners также имеют опыт в досудебном разрешении споров и медиации и обладают соответствующими сертификатами медиатора.`],
  },
  11: {
    heading: 'Валютное регулирование и валютный контроль',
    description: 'Мы консультируем клиентов в отношении соблюдения требований российского законодательства о валютном регулировании и валютном контроле при осуществлении внешнеэкономической деятельности',
    content: [
      `Юристы Korostelev & Partners имеют значительный опыт консультирования клиентов по вопросам валютного регулирования и валютного контроля, возникающим, в том числе, в ходе трансграничных сделок M&A, JV, венчурных сделок, корпоративных реструктуризаций, а также поставок товаров и услуг.`,
      `Наши услуги включают в себя:
      <br/>
        •        Консультирование по всем вопросам российского валютного законодательства в сфере внешнеэкономической деятельности, в том числе связанным с соблюдением требований о репатриации валютной выручки
      <br/>
        •        Консультирование по российским контрсанкционным мерам, касающимся валютных ограничений и ограничений на распоряжение финансовыми инструментами
      <br/>
        •        Консультирование и представление интересов клиента в ходе проверки Федеральной налоговой службы/Федеральной таможенной службы в отношении соблюдения законодательства о валютном регулировании и валютном контроле, обжалование штрафов/постановлений органов валютного контроля
      <br/>
        •        Анализ рисков, связанных с альтернативным исполнением обязательств сторонами (вопросы допустимости зачета встречных требований, новации, прощения долга)
      <br/>
        •        Реструктуризация задолженности по займам с нерезидентами`,
    ],
  },
  12: {
    best: true,
    heading: 'IT и цифровое право',
    description: 'Мы консультируем IT компании по полному спектру бизнес-вопросов, с которыми они сталкиваются',
    content: [`Мы имеем опыт работы с IT-стартапами, владельцами веб-сайтов, интернет-магазинов, производителями программного обеспечения, разработчиками мобильных приложений и игр, краудфандинговыми площадками.`, `Наши услуги включают в себя комплексное юридическое сопровождение IT проектов на различных стадиях – стартап, выход продукта на рынок, сделки с инвесторами, включение ПО в реестр отечественного ПО, аккредитацию IT компаний, консультирование по вопросам интеллектуальной собственности (прав на ПО, домены, товарные знаки и др.), юридическое сопровождение электронной коммерции и подготовку обязательных юридических документов для сайта компании, консультирование в отношении соблюдения законодательства о защите персональных данных, консультирование по вопросу подписок на цифровые ресурсы.`],
  },
}

export default function Services({where}: {where: 'index' | 'services'}) {
  const isIndex = where === 'index'
  const filteredServices = Object.entries(servicesData).filter(([, service]) => (isIndex ? service.best : true))

  const [visibleDescriptions, setVisibleDescriptions] = useState<{[key: string]: boolean}>({})

  const toggleDescriptionVisibility = (key: string) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }))
  }

  return (
    <section id="services" data-section="services-index" className="relative z-20">
      <div className={cn('space-y-5 sm:space-y-5 bg-background-alt ', isIndex ? 'pt-20 sm:pt-14' : 'pt-32 xl:pt-28 sm:pt-24')}>
        <div className="flex items-end justify-between px-10 sm:px-3">
          <SplitText>
            <Heading type="h1" className="uppercase" text={isIndex ? 'Услуги' : 'Все услуги'} />
          </SplitText>
          {isIndex && (
            <SplitText>
              <ExpandButton to="/services" mode="light" className="sm:hidden" text="Посмотреть все" />
              <Button to="/services" variant="solid" mode="dark" className="hidden sm:flex px-2 py-1 flex-row-reverse gap-2.5 bg-background-alt" text="БОЛЬШЕ" />
            </SplitText>
          )}
        </div>

        {/* desktop list */}
        <div className="flex flex-col sm:hidden">
          {filteredServices.map(([key, {heading, description, content}]) => (
            <ModalTrigger key={key} tag={'Услуга'} heading={heading} content={content}>
              <hr className="h-[0.1rem] bg-foreground" key={key} />

              <div className="relative grid items-center grid-cols-2 gap-20 px-10 py-16 text-left duration-200 group hover:bg-red hover:text-background-alt">
                <SplitText duration={1} y={0} className="absolute inset-9">
                  <div className="duration-200 rounded-full s-7 bg-foreground group-hover:bg-background-alt"></div>
                </SplitText>

                <SplitText duration={0.5}>
                  <Text type="h4" className="ml-28 max-w-[20ch]" text={heading} />
                </SplitText>
                <Text type="h5" className="max-w-[50ch]" text={description} />
              </div>
            </ModalTrigger>
          ))}
        </div>

        {/* mobile list */}
        <div className="flex-col hidden sm:flex">
          {filteredServices.map(([key, {heading, description, content}], index) => (
            <div key={key} className="relative grid items-center grid-cols-1 gap-5 px-4 py-10 group">
              <SplitText duration={1} y={0}>
                <div className="grid rounded-full s-5 text-background bg-red place-items-center">
                  <span className="hidden sm:block text-[13px]">{index + 1}</span>
                </div>
              </SplitText>

              <div className="space-y-7">
                <SplitText duration={0.5}>
                  <div className="grid items-end justify-between grid-cols-5" onClick={() => toggleDescriptionVisibility(key)}>
                    <Text type="h4" className="col-span-4" text={heading} />
                    <ChevronDown className={`col-span-1 justify-self-end dur s-10 ${visibleDescriptions[key] ? 'rotate-[180deg]' : ''}`} />
                  </div>
                </SplitText>

                {visibleDescriptions[key] && (
                  <div className={`space-y-5 ${visibleDescriptions[key] && 'SERVICES_SHOW'}`}>
                    <Text type="h5" text={description} />

                    <div className="w-full">
                      <ModalTrigger key={key} tag={'Услуга'} heading={heading} content={content}>
                        <Button variant="solid" className="w-[90vw] flex-row-reverse text-background bg-red" text="Посмотреть" />
                      </ModalTrigger>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
