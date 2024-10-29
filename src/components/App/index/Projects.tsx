import ProjectOneImage from '$/projects/1.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button, {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'

const projectsData = {
  1: {
    tag: 'Венчурные инвестиции, стартапы, ESG',
    heading: 'Проект по созданию логистических коридоров для электротраков',
    description: 'Юристы Korostelev & Partners комплексно сопровождают проект по созданию логистических коридоров для электротраков в России',
    client: 'S8 Capital',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке с продавцом и согласовать с ним юридически обязывающую документацию по сделке, согласовать сделку с Правительственной комиссией по контролю за осуществлением иностранных инвестиций и ФАС, организовать закрытие сделки (передачу акций и долей) у нотариуса и регистратора одновременно (в периметр сделки входили ООО и АО).',
      result: 'Сделка закрыта, актив перешел в собственность S8 Capital (https://www.kommersant.ru/doc/6412480)',
      description: 'В рамках проекта был проведен due diligence актива, была подготовлена и согласована в ходе переговоров с бельгийским и иными подразделениями Bridgestone, а также их юридическими консультантами юридически обязывающая документация по приобретению холдингом S8 Capital шинного завода Bridgestone в России (по английскому праву), подготовлены пакеты документов в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС для согласования сделки, обеспечена координация работы с бельгийским подразделением Bridgestone и его юридическими консультантами для получения разрешения на сделку от государственных органов Бельгии, проведена работа над кредитной документацией для целей финансирования сделки, обеспечена проверка выполнения отлагательных условий для закрытия сделки, проведено закрытие сделки и обеспечена последующая интеграция активов в холдинг S8 Capital.',
    },
    image: ProjectOneImage,
  },
  2: {
    tag: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции',
    heading: 'Приобретение одного из предприятий Bosch в России',
    description: 'Комплексное юридическое сопровождение сделки M&A по приобретению одного из российских активов Bosch и получения государственных одобрений на сделку',
    client: 'S8 Capital',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке с продавцом и согласовать с ним юридически обязывающую документацию по сделке, согласовать сделку с Правительственной комиссией по контролю за осуществлением иностранных инвестиций и ФАС, организовать закрытие сделки у нотариуса',
      result: 'Сделка закрыта, актив перешел в собственность S8 Capital',
      description: 'В рамках проекта была подготовлена и согласована в ходе переговоров со штаб-квартирой Bosch в Германии юридически обязывающая документация по приобретению холдингом S8 Capital одного из активов Bosch в России, подготовлены пакеты документов в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС для согласования сделки, обеспечена проверка выполнения отлагательных условий для закрытия сделки, проведено закрытие сделки и обеспечена последующая интеграция активов в холдинг S8 Capital. ',
    },
    image: ProjectOneImage,
  },
  3: {
    tag: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции',
    heading: 'Приобретение бизнеса KONE в России',
    description: 'Комплексное юридическое сопровождение сделки M&A по приобретению сервисно-монтажного бизнеса KONE (финский производитель лифтов, кранов, эскалаторов, траволаторов и пассажирских подъемников) и получения государственных одобрений на сделку',
    client: 'S8 Capital',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке с продавцом и согласовать с ним юридическую обязывающую документацию по сделке, согласовать сделку с Правительственной комиссией по контролю за осуществлением иностранных инвестиций и ФАС, организовать закрытие сделки у регистратора',
      result: 'Сделка закрыта, актив перешел в собственность S8 Capital (https://www.vedomosti.ru/business/news/2023/10/24/1002134-s8-capital-kupil-biznes-finskogo-proizvoditelya-liftov-kone)',
      description: 'В рамках проекта был проведен due diligence актива, была подготовлена и согласована в ходе переговоров со штаб-квартирой KONE в Финляндии юридически обязывающая документация по приобретению холдингом S8 Capital сервисно-монтажного бизнеса KONE в России, подготовлены пакеты документов в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС для согласования сделки, обеспечена координация работы с представителями штаб-квартиры KONE и их юридическими консультантами для получения разрешения на сделку от государственных органов Финляндии, обеспечена проверка выполнения отлагательных условий для закрытия сделки, проведено закрытие сделки и обеспечена последующая интеграция активов в холдинг S8 Capital. ',
    },
    image: ProjectOneImage,
  },
  4: {
    tag: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции',
    heading: 'Приобретение завода по производству полимеров Huntsman',
    description: 'Комплексное юридическое сопровождение сделки M&A по приобретению российского завода по производству полимеров американской химический компании Huntsman и получения государственных одобрений на сделку',
    client: 'S8 Capital',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке с продавцом и согласовать с ним юридически обязывающую документацию по сделке, согласовать сделку с Правительственной комиссией по контролю за осуществлением иностранных инвестиций и ФАС, организовать закрытие сделки (передачу акций и долей) у нотариуса и регистратора одновременно (в периметр сделки входили ООО и АО). ',
      result: 'Сделка подписана, впоследствии расторгнута по взаимной договоренности сторон',
      description: 'В рамках проекта был проведен due diligence актива, была подготовлена и согласована в ходе переговоров со штаб-квартирой Huntsman в США юридически обязывающая документация по приобретению холдингом S8 Capital завода по производству полимеров Huntsman в России, подготовлены пакеты документов в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС для согласования сделки, обеспечена координация работы со штаб-квартирой Huntsman с целью получения государственного одобрения на сделку в США, обеспечена проверка выполнения отлагательных условий для закрытия сделки, проведена работа над кредитной документацией для целей финансирования сделки (https://www.kommersant.ru/doc/6466169). ',
    },
    image: ProjectOneImage,
  },
  5: {
    tag: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции',
    heading: 'Приобретение завода по производству крепежных изделий французской компании A.Raymond',
    description: 'Комплексное юридическое сопровождение сделки M&A по приобретению поставщика АО "АвтоВАЗ" - российского завода по производству крепежных изделий французской компании A.Raymond и получения государственных одобрений на сделку',
    client: 'S8 Capital',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке с продавцом и согласовать с ним юридически обязывающую документацию по сделке, согласовать сделку с Правительственной комиссией по контролю за осуществлением иностранных инвестиций и ФАС, организовать закрытие сделки у нотариуса. ',
      result: 'Сделка закрыта, актив перешел в собственность одной из структур АО "Кордиант" (входил в холдинг S8 Capital), впоследствии продан в составе группы Кордиант Севергрупп Алексея Мордашова (https://www.forbes.ru/biznes/523370-kordiant-kupil-zavod-avtokomponentov-u-francuzskogo-a-raymond-group)',
      description: 'В рамках проекта был проведен due diligence актива, была подготовлена и согласована в ходе переговоров со штаб-квартирой A.Raymond во Франции юридически обязывающая документация по приобретению холдингом S8 Capital поставщика АО "АвтоВАЗ" - завода по производству крепежных изделий A.Raymond в России с целью снятия санкционных рисков перебоев в поставках комплектующих для АО "АвтоВАЗ", подготовлены пакеты документов в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС для согласования сделки, обеспечена координация работы со штаб-квартирой A.Raymond с целью получения государственного одобрения на сделку во Франции, обеспечена проверка выполнения отлагательных условий для закрытия сделки, проведена работа над финансовой документацией для целей финансирования сделки. ',
    },
    image: ProjectOneImage,
  },
  6: {
    tag: 'M&A, Правительственная комиссия, ФАС, промышленность, санкции и контрсанкции',
    heading: 'Приобретение иностранного завода по производству радиаторов отопления',
    description: 'Комплексное юридическое сопровождение сделки M&A по приобретению завода по производству радиаторов отопления у иностранного собственника и получения государственных одобрений на сделку',
    client: 'Конфиденциально',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке с продавцом и согласовать с ним юридически обязывающую документацию по сделке, согласовать сделку с Правительственной комиссией по контролю за осуществлением иностранных инвестиций и ФАС, организовать закрытие сделки. ',
      result: 'Сделка закрыта, актив перешел в собственность клиента',
      description: 'В рамках проекта был проведен due diligence актива, была подготовлена и согласована в ходе переговоров со штаб-квартирой иностранного продавца юридически обязывающая документация по приобретению клиентом завода по производству радиаторов отопления, подготовлены пакеты документов в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС для согласования сделки, обеспечена координация работы со штаб-квартирой иностранного продавца с целью получения государственного одобрения на сделку в его юрисдикции, обеспечена проверка выполнения отлагательных условий для закрытия сделки, проведена работа над кредитной документацией для целей финансирования сделки. ',
    },
    image: ProjectOneImage,
  },
  7: {
    tag: 'M&A, Правительственная комиссия, ФАС, недвижимость и строительство, санкции и контрсанкции',
    heading: 'Приобретение здания и земельного участка в Москве у немецкой компании',
    description: 'Комплексное юридическое сопровождение сделки M&A по приобретению комплекса недвижимого имущества, состоящего из земельного участка в Москве и здания на нем, у немецкой технологической компании в формате share deal и получения государственных одобрений на сделку',
    client: 'Конфиденциально',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке с продавцом и согласовать с ним юридически обязывающую документацию по сделке, согласовать сделку с Правительственной комиссией по контролю за осуществлением иностранных инвестиций и ФАС, организовать закрытие сделки. ',
      result: 'Сделка подписана',
      description: 'В рамках проекта был проведен due diligence актива с фокусом на права и обременения недвижимого имущества, была подготовлена и согласована в ходе переговоров с представителями иностранного продавца юридически обязывающая документация по приобретению клиентом долей в обществе, которое является собственником недвижимости, подготовлены пакеты документов в Правительственную комиссию по контролю за осуществлением иностранных инвестиций и ФАС для согласования сделки, проведена работа над кредитной документацией для целей финансирования сделки. ',
    },
    image: ProjectOneImage,
  },
  8: {
    tag: 'M&A, FMCG',
    heading: 'Приобретение региональных дилеров лотерейных билетов',
    description: 'Комплексное юридическое сопровождение ряда сделок M&A по приобретению ряда компаний-региональных распространителей лотерейных билетов в целях консолидации рынка',
    client: 'Столото',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке с продавцами и согласовать с ними юридически обязывающую документацию по сделке, организовать закрытие сделки. В сделках должна быть предусмотрена защита приобретателя от утраты точек продаж лотерейных билетов по тем или иным основаниям. ',
      result: 'Сделки закрыты, активы перешли в собственность группы компаний Столото',
      description: 'В рамках проекта проводили due diligence активов с фокусом на права и обременения в отношении точек продаж, были подготовлены и согласованы в ходе переговоров с продавцами комплекты юридически обязывающей документации по приобретению компаний-распостранителей лотерейных билетов, организовано закрытие сделок. ',
    },
    image: ProjectOneImage,
  },
  9: {
    tag: 'Инвестиционные фонды, венчурные инвестиции',
    heading: 'Создание венчурного фонда под управлением одной из крупнейших ИТ-корпораций',
    description: 'Сопровождение сделки по созданию соинвестиционного венчурного фонда под управлением одной из крупнейших российских ИТ-корпораций в форме договора инвестиционного товарищества',
    client: 'Конфиденциально',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке и согласовать юридически обязывающую документацию по сделке по созданию венчурного фонда, обеспечить закрытие сделки',
      result: 'Сделка закрыта, венчурный фонд создан',
      description: 'Была подготовлена и согласована в ходе переговоров со всеми товарищами инвестиционного товарищества (инвесторами и управляющей компанией фонда) юридически обязывающая документация по созданию венчурного фонда в форме инвестиционного товарищества, обеспечено нотариальное удостоверение и закрытие сделки',
    },
    image: ProjectOneImage,
  },
  10: {
    tag: 'Инвестиционные фонды, венчурные инвестиции',
    heading: 'Создание венчурного фонда в сфере медицины и фармацевтики',
    description: 'Сопровождение сделки по созданию венчурного фонда в сфере медицины и фармацевтики в форме договора инвестиционного товарищества под управлением частной управляющей компании',
    client: 'Конфиденциально',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке и согласовать юридически обязывающую документацию по сделке по созданию венчурного фонда, обеспечить закрытие сделки',
      result: 'Сделка закрыта, венчурный фонд создан',
      description: 'Была подготовлена и согласована в ходе переговоров со всеми товарищами инвестиционного товарищества (инвесторами и управляющей компанией фонда) юридически обязывающая документация по созданию венчурного фонда в форме инвестиционного товарищества, обеспечено нотариальное удостоверение и закрытие сделки',
    },
    image: ProjectOneImage,
  },
  11: {
    tag: 'Инвестиционные фонды, венчурные инвестиции',
    heading: 'Создание венчурного фонда в сфере нефтегазовых технологий',
    description: 'Сопровождение сделки по созданию венчурного фонда для инвестиций в нефтегазовые технологии в форме договора инвестиционного товарищества с инвесторами из нефтегазового, финансового и государственного сектора',
    client: 'Конфиденциально',
    content: {
      task: 'Была поставлена задача провести переговоры по сделке и согласовать юридически обязывающую документацию по сделке по созданию венчурного фонда, обеспечить закрытие сделки',
      result: 'Сделка закрыта, венчурный фонд создан',
      description: 'Была подготовлена и согласована в ходе переговоров со всеми товарищами инвестиционного товарищества (инвесторами и управляющей компанией фонда) юридически обязывающая документация по созданию венчурного фонда в форме инвестиционного товарищества, обеспечено нотариальное удостоверение и закрытие сделки',
    },
    image: ProjectOneImage,
  },
  12: {
    tag: 'Инвестиционные фонды, венчурные инвестиции, санкции и контрсанкции',
    heading: 'Реструктуризация венчурного фонда с разделением инвестиционного портфеля на российскую и международную часть в связи с санкционными рисками',
    description: 'Сопровождение сделки по реструктуризации венчурного фонда с диверсифицированным инвестиционным портфелем с разделением портфеля на российскую и международную часть в связи с санкционными рисками, передача части портфеля в дружественный иностранный инвестиционный фонд',
    client: 'Конфиденциально',
    content: {
      task: 'Была поставлена задача подготовить юридическую структуру реструктуризации венчурного фонда, согласовать ее со всеми сторонами (инвесторами и управляющей компанией фонда), подготовить и согласовать юридически обязывающую документацию для реализации данной структуры и обеспечить ее подписание и исполнение',
      result: 'Реструктуризация венчурного фонда завершена, портфель разделен на российский и международный',
      description: 'Была разработана юридическая структура реструктуризации венчурного фонда и согласована со всеми инвесторами и управляющей компанией фонда, внесены требуемые изменения в документацию по фонду, осуществлена сделка по продаже части инвестиционного портфеля',
    },
    image: ProjectOneImage,
  },
}

export default function Projects() {
  return (
    <section id="projects" data-section="projects-index" className="relative z-20 p-8 pt-32 space-y-8 sm:p-4 xl:pt-20 sm:pt-12 bg-foreground">
      <div className="flex items-end justify-between text-background">
        <SplitText>
          <Heading type="h1" className="uppercase" text="Проекты" />
        </SplitText>
        <SplitText>
          <ExpandButton to="#" className="sm:hidden" text="Посмотреть все" />
        </SplitText>
      </div>

      {/* desktop list */}
      <div className="grid grid-cols-3 gap-5 sm:hidden">
        {Object.entries(projectsData).map(([key, {tag, heading, description, content, image}]) => (
          <ModalTrigger key={key} tag={tag} heading={heading} content={content} image={image}>
            <div id="project-card">
              <div className="relative flex flex-col gap-20 text-left duration-200 xl:gap-10 p-7 pt-14 xl:pt-10 bg-background-alt text-foreground group hover:bg-red/80 hover:text-background-alt">
                <Text type="h6" className="line-clamp-1 max-w-[40ch] font-bold uppercase text-foreground/65 group-hover:text-background-alt/65" text={'//' + tag} />

                <div className="space-y-5">
                  <Text type="h4" className="line-clamp-2 leading-[1.15]" text={heading} />
                  <Text type="h5" className="max-w-[35ch] line-clamp-4 xl:leading-[1.15]" text={description} />
                </div>

                <Image quality={100} className="absolute inset-0 w-full h-full -z-20" src={ProjectOneImage} alt={heading} />
              </div>
            </div>
          </ModalTrigger>
        ))}
      </div>

      {/* mobile list */}
      <div className="hidden grid-cols-3 gap-5 sm:grid sm:grid-cols-1 sm:px-1">
        {Object.entries(projectsData).map(([key, {tag, heading, description, content, image}]) => (
          <div id="project-card" className="relative flex flex-col justify-between gap-16 p-4 pt-8 bg-background-alt text-foreground" key={key}>
            <div className="space-y-2.5">
              <Text type="h6" className="font-bold uppercase text-foreground/65" text={'//' + tag} />

              <div className="space-y-6">
                <Text type="h4" className="sm:text-3xl max-w-[15ch]" text={heading} />
                <Text type="h5" className="max-w-[25ch]" text={description} />
              </div>
            </div>

            <ModalTrigger key={key} tag={tag} heading={heading} content={content} image={image}>
              <Button variant="solid" className="flex-row-reverse w-full text-background bg-red" text="Посмотреть" />
            </ModalTrigger>
          </div>
        ))}
      </div>
    </section>
  )
}
