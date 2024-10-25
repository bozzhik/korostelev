import ProjectOneImage from '$/projects/1.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button, {ExpandButton} from '~/UI/Button'
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
    <section id="projects" data-section="projects-index" className="relative z-20 p-8 sm:p-4 pt-32 sm:pt-12 space-y-8 bg-foreground">
      <div className="flex items-end justify-between text-background">
        <Heading type="h1" className="uppercase " text="Проекты" />
        <ExpandButton to="#" className="sm:hidden" text="Посмотреть все" />
      </div>

      {/* desktop list */}
      <div className="sm:hidden grid grid-cols-3 gap-5">
        {Object.entries(projectsData).map(([key, {type, heading, description, content}]) => (
          <ModalTrigger key={key} type={'Услуга'} heading={heading} content={content}>
            <div id="project-card">
              <div className="relative flex flex-col gap-20 xl:gap-10 p-7 pt-14 xl:pt-10 bg-background-alt text-foreground group hover:bg-red/80 hover:text-background-alt text-left">
                <Text type="h6" className="font-bold uppercase text-foreground/65 group-hover:text-background-alt/65" text={type} />

                <div className="space-y-5">
                  <Text type="h4" text={heading} />
                  <Text type="h5" className="max-w-[25ch] xl:leading-[1.15]" text={description} />
                </div>

                <Image quality={100} className="absolute inset-0 w-full h-full -z-20" src={ProjectOneImage} alt={heading} />
              </div>
            </div>
          </ModalTrigger>
        ))}
      </div>

      {/* mobile list */}
      <div className="hidden sm:grid grid-cols-3 sm:grid-cols-1 gap-5 sm:px-1">
        {Object.entries(projectsData).map(([key, {type, heading, description, content}]) => (
          <div id="project-card" className="relative flex flex-col gap-16 justify-between p-4 pt-8 bg-background-alt text-foreground" key={key}>
            <div className="space-y-2.5">
              <Text type="h6" className="font-bold uppercase text-foreground/65 " text={type} />

              <div className="space-y-6">
                <Text type="h4" className="sm:text-3xl max-w-[15ch]" text={heading} />
                <Text type="h5" className="max-w-[25ch]" text={description} />
              </div>
            </div>

            <ModalTrigger key={key} type={type} heading={heading} content={content}>
              <Button variant="solid" className="w-full flex-row-reverse text-background bg-red" text="Посмотреть" />
            </ModalTrigger>
          </div>
        ))}
      </div>
    </section>
  )
}
