import ProjectOneImage from '$/projects/1.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'

const projectsData = {
  1: {
    type: '// гражданское право',
    heading: 'Заключение сделки о покупке завода',
    description: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  2: {
    type: '// гражданское право',
    heading: 'Заключение сделки о покупке завода',
    description: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  3: {
    type: '// гражданское право',
    heading: 'Заключение сделки о покупке завода',
    description: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  4: {
    type: '// гражданское право',
    heading: 'Заключение сделки о покупке завода',
    description: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
    content: [`Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources staircase / when alpha didn't. Op`],
  },
  5: {
    type: '// гражданское право',
    heading: 'Заключение сделки о покупке завода',
    description: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  6: {
    type: '// гражданское право',
    heading: 'Заключение сделки о покупке завода',
    description: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
}

export default function Projects() {
  return (
    <section id="projects" data-section="projects-index" className="relative z-20 p-8 pt-32 space-y-8 bg-foreground">
      <div className="flex items-end justify-between text-background">
        <Heading type="h1" className="uppercase " text="Проекты" />
        <ExpandButton to="#" text="Посмотреть все" />
      </div>

      <div className="grid grid-cols-3 gap-5">
        {Object.entries(projectsData).map(([key, {type, heading, description, content}]) => (
          <ModalTrigger key={key} type={'Услуга'} heading={heading} description={description} content={content}>
            <div key={key} className="relative flex flex-col gap-20 p-7 pt-14 bg-background-alt text-foreground group hover:bg-red/80 hover:text-background-alt text-left">
              <Text type="h6" className="font-bold uppercase text-foreground/65 group-hover:text-background-alt/65" text={type} />

              <div className="space-y-5">
                <Text type="h4" text={heading} />
                <Text type="h5" className="max-w-[25ch]" text={description} />
              </div>

              <Image className="absolute inset-0 w-full h-full -z-20" src={ProjectOneImage} alt={heading} />
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[70px] border-b-[70px] border-l-transparent border-b-transparent border-r-[70px] border-r-foreground"></div>
            </div>
          </ModalTrigger>
        ))}
      </div>
    </section>
  )
}
