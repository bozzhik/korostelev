import KorostelevImage from '$/team/korostelev.jpg'
import GubankovImage from '$/team/gubankov.jpg'
import MarkovskiiImage from '$/team/markovskii.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {SplitText} from '~/UI/SplitText'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'

const teamData = {
  1: {
    name: 'Максим <br/> Коростелёв',
    position: 'Управляющий партнёр',
    area: 'M&A, совместные предприятия, венчурные инвестиции, инвестиционные фонды, санкции и контрсанкции, энергетика и природные ресурсы, корпоративная реструктуризация и редомициляция, валютный контроль, IT и цифровое право',
    content: {
      description: ['Максим Коростелёв является основателем Korostelev & Partners. Он консультирует российские и международные компании, специализируясь на таких вопросах, как M&A, совместные предприятия, венчурные инвестиции, инвестиционные фонды, санкции и контрсанкции, энергетика и природные ресурсы, корпоративная реструктуризация и редомициляция, валютный контроль, IT и цифровое право.', 'Среди клиентов Максима – венчурные фонды, фонды прямых инвестиций, инвестиционно-промышленные холдинги, высокотехнологичные компании (стартапы), компании, работающие в сфере промышленности, недропользования, в потребительском секторе, на рынке финансовых услуг.', 'До учреждения Korostelev & Partners Максим возглавлял направление юридического сопровождения M&A в инвестиционно-промышленном холдинге S8 Capital, а ранее был членом Инвестиционного комитета Российской венчурной компании (крупнейшего в России фонда фондов), старшим юристом в EY (Ernst&Young) и российских юридических фирмах. Максим имеет опыт участия в законодательных инициативах, направленных на улучшение инвестиционного климата в России. В частности, он принимал участие в разработке «закона о праве на риск» при венчурном инвестировании государственных средств (Федеральный закон от 31.07.2020 г. №309-ФЗ) и законов о внесении изменений в Федеральный закон «Об инвестиционном товариществе».', 'Образование: Российский государственный университет правосудия при Верховном Суде РФ, 2010, специалист, диплом с отличием; аспирантура МГЮА им. О.Е. Кутафина/Институт законодательства и сравнительного правоведения при Правительстве РФ, 2015, кандидат юридических наук;  University of London, 2022, LLB (бакалавр английского права); квалификационный аттестат СФР 5.0 (деятельность по управлению инвестиционными фондами, ПИФ и НПФ).', 'Языки: русский, английский.'],
      achievements: {
        1: 'Возглавлял направление юридического сопровождения M&A в S8 Capital - одной из самых активных инвестиционных компаний на рынке "санкционного M&A"',
        2: 'Совокупный объем закрытых сделок, которые я сопровождал, превысил 50 млрд рублей, а совокупное количество реализованных проектов при моем участии превысило 80',
        3: 'Был членом Инвестиционного комитета Российской венчурной компании (РВК), который рассматривал все инвестиционные сделки фондов с участием РВК на предмет целесообразности инвестирования в них',
        4: 'Участвовал в разработке законов, направленных на улучшение инвестиционного климата, в частности, «закона о праве на риск» при венчурном инвестировании государственных средств (Федеральный закон от 31.07.2020 г. №309-ФЗ) и изменений в ФЗ «Об инвестиционном товариществе» ',
        5: 'Стал сооснователем Клуба венчурных юристов - неформального сообщества, объединяющего юристов, работающих в сфере венчурной индустрии и стартапах',
        6: 'Получил степень LLB в области английского права в Лондонском университете, что позволило ему уверенно осуществлять юридическое сопровождение международных сделок',
      },
    },
    image: KorostelevImage,
  },
  2: {
    name: 'Евгений <br/> Марковский',
    position: 'Партнёр',
    area: 'Недвижимость и строительство, банки и финансы',
    content: {
      description: ['Евгений Марковский является Партнёром Korostelev & Partners в сфере недвижимости и строительства. Евгений является экспертом в области работы с собственниками недвижимости, арендаторами, управления арендными портфелями, структурирования сделок по заключению, сопровождению, продлению арендных отношений, анализа и реструктуризации портфелей недвижимости.', 'До прихода в Korostelev & Partners Евгений был Директором по недвижимости АО "Райффайзенбанк", а ранее – Заместителем начальника управления розничного кредитования АО "Райффайзенбанк". Евгений занимался управлением портфелем недвижимости федеральной сети банка: арендным на сумму 3,5 млрд рублей и собственными активами на сумму 30 млрд рублей. Евгений участвовал в проведении сделок с недвижимостью на сумму до 5,5 млрд рублей. До этого Евгений занимался управлением процессами выдачи розничных кредитов: ипотека, потребительские, автокредиты, организация процесса андеррайтинга и залога.', 'Евгений консультирует клиентов в отношении купли-продажи недвижимости по российскому и английскому праву, реализации крупных операционных и инфраструктурных проектов, структурирования сделок по приобретению и реализации активов, управления арендным и собственным портфелем недвижимости, реструктуризации банковских сетей при юридическом слиянии банков, сделок build-to-suit.', 'Образование: МГОУ имени В. С. Черномырдина, специалист, гражданское право; кандидат исторических наук, МПГУ; ANSI PMI PMBOK управление проектами в компании; SixSigma Green Belt, методология управление проектами.', 'Языки: русский, английский.'],
      achievements: {
        1: 'Управление гармонизацией процессов розничного кредитования при слиянии Импексбанка с Райффайзенбанком. Имплементация требований к процедурам выдачи кредитов на основе стандартов группы Raiffeisen Bank International. Запуск систем кредитования. Построение команды (500 человек).',
        2: 'Переформатирование портфеля офисной недвижимости центрального офиса Райффайзенбанка, сокращение арендной нагрузки, исключение валютных рисков, снижение бюджетов на аренду на 1,1 млрд рублей/год. Расширение собственных площадей, сделки до 5,5 млрд рублей. Построение централизованного процесса управления, принятия решений, систем контроля. Управление портфелем аренды около 3,5 млрд рублей, собственными активами на сумму более 30 млрд рублей.',
        3: 'Создание региональных операционных площадок Райффайзенбанка: Ярославь, Омск, Коломна. Вынос функций 2000 FTE в региональные операционные центры.',
        4: 'Первая на рынке сделка полного build-to-suit формата - строительство 16-этажного бизнес-центра, 34 000 кв. м.: подбор площадки, структурирование и юридическое сопровождение сделки, управление проектированием, проектный менеджмент.',
      },
    },
    image: MarkovskiiImage,
  },
  3: {
    name: 'Станислав <br/> Губанков',
    position: 'Партнёр',
    area: 'Разрешение споров и медиация, госзакупки',
    content: {
      description: [
        'Станислав Губанков является Партнёром Korostelev & Partners в области разрешения споров, медиации и госзакупок.',
        'Станислав более 10 лет руководил претензионно-исковым направлением и непосредственно осуществлял судебное представительство по особо важным судебным процессам, а также обеспечивал взаимодействие с органами государственной власти и правоохранительными органами в крупных российских компаниях, в том числе, с государственным участием (IT/финансовый сектор, авиастроение). С 2022 по 2024 год занимал должность заместителя директора юридического департамента в компании "Кронштадт", специализирующейся на разработке и производстве наукоемкой продукции и решений в области беспилотной авиации. Курировал направление претензионно-исковой работы и взаимодействия с государственными органами: прокуратурой, ФАС, Министерством промышленности и торговли.',
        'До этого с 2019 по 2022 год в Национальной системе платежных карт, отвечающей за обеспечение бесперебойности операций по картам международных платежных систем на территории России, построение и развитие российской системы платежных карт "Мир", руководил претензионно-исковым направлением, участвовал в организации процессов рассмотрения обращений (претензий) клиентов в рамках программы лояльности для держателей карт "Мир" совместно с Федеральным агентством по туризму в части претензионной работы.',
        'В Объединенной авиастроительной корпорации (более 7 лет с 2012 по 2019 год) Станислав отвечал за претензионно-исковую работу. В сферу ответственности Станислава входило также представление интересов компании во время проведения проверок Федеральной налоговой службы, Генеральной прокуратуры, ФАС России.',
        'Профессионально защищает интересы организаций во внесудебном и судебном порядке, а также при взаимодействии с органами государственной власти. Знает специфику работы по гособоронзаказу и государственным закупкам. Дипломированный медиатор.',
        'Образование: Российский государственный гуманитарный университет, Институт экономики, управления и права, специалист, 2010; удостоверение медиатора, МГЮА имени О.Е. Кутафина, 2021.',
        'Языки: русский. ',
      ],
      achievements: {
        1: 'В Объединенной авиастроительной корпорации организовал претензионно-исковую работу «с нуля». Осуществлял ведение судебных дел: выиграно более 15 дел на сумму, превышающую 1 млрд рублей. Организовал работу комиссии по медиации споров между компаниями группы: урегулировано более 40 споров.',
        2: 'В Национальной системе платежных карт сформировал положительную судебную практику по взысканию текущих платежей в процедурах банкротства банка. Разработал и внедрил процедуры compliance. Проработал юридические аспекты проведения акций «Путешествия по России» и «Путевки в детские лагеря с кешбэком».',
        3: 'В компании «Кронштадт», специализирующейся на разработке и производстве наукоемкой продукции и решений в области беспилотной авиации в рамках гособоронзаказа (275-ФЗ), обеспечивал правовое сопровождение проектов в рамках получаемых государственных субсидий от Минпромторга.',
      },
    },
    image: GubankovImage,
  },
}

export default function Team() {
  return (
    <section id="team" data-section="team-index" className="relative z-20 p-8 pt-32 space-y-8 sm:p-4 xl:pt-20 sm:pt-12 bg-foreground">
      <SplitText>
        <Heading type="h1" className="uppercase text-background" text="Команда" />
      </SplitText>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
        {Object.entries(teamData).map(([key, {position, name, area, image, content}]) => (
          <ModalTrigger key={key} type="team" tag={position} heading={name} content={content} image={image}>
            <div className="flex flex-col justify-between text-left bg-background hover:bg-red sm:hover:bg-background duration-200 group">
              <div className="w-full">
                <Image quality={100} className="object-cover s-full" src={image} alt={`${name} - ${position}`} />
              </div>

              <div className="space-y-3 sm:space-y-1.5 p-5 xl:p-4 sm:p-3 group-hover:text-background sm:group-hover:text-foreground duration-200">
                <div className="space-y-1.5 sm:space-y-0">
                  <Text type="h5" text={position} />
                  <Text type="h4" className="uppercase leading-none" text={name} />
                </div>

                <Text type="h6" className="text-foreground/65 group-hover:text-background/65 sm:group-hover:text-foreground/65 line-clamp-1" text={area} />
              </div>
            </div>
          </ModalTrigger>
        ))}
      </div>
    </section>
  )
}
