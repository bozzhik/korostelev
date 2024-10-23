import {isMobile} from '@bozzhik/is-mobile'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {ChevronDown} from 'lucide-react'

type Service = {
  heading: string
  description: string
  content: string[]
}

const servicesData: Record<string, Service> = {
  1: {
    heading: 'M&A по российскому и английскому праву',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources staircase / when alpha didn't. Options incentivization drawing-board creep muted need strategies. Quarter revision.`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  2: {
    heading: 'joint ventures',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources stairca`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  3: {
    heading: 'венчурные сделки',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources staircase / when alpha didn't. Op`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  4: {
    heading: 'договоры инвестиционного товарищества',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resourc`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  5: {
    heading: 'IT и цифровое право',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources staircase / when alpha didn't. Options incentivization drawing-board creep muted need stra`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  6: {
    heading: 'Конвертируемые займы',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved.`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  7: {
    heading: 'иные формы инвестиций в России и за рубежом',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources s`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  8: {
    heading: 'валютный контроль',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources st`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  9: {
    heading: 'недропользование',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources staircase / whe`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  10: {
    heading: 'промышленная безопасность и экология',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources s`,
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
}

export default function Services() {
  return (
    <section id="services" data-section="services-index" className="relative z-20 w-full min-h-screen">
      <svg className="fill-background-alt" width="100%" height="100%" viewBox="0 0 300 30">
        <path d={!isMobile ? 'M 0 0 L 290 0 L 303 15 L 303 15 L 0 15 Z' : 'M 0 0 L 270 0 L 303 30 L 303 30 L 0 30 Z'} />
      </svg>

      <div className="space-y-5 sm:space-y-5 bg-background-alt">
        <div className="flex items-end justify-between px-10 sm:px-3">
          <Heading type="h1" className="uppercase" text="Услуги" />
          <ExpandButton to="#" className="sm:hidden" mode="light" text="Посмотреть все" />
        </div>

        {/* desktop list */}
        <div className="sm:hidden flex flex-col">
          {Object.entries(servicesData).map(([key, {heading, description, content}]) => (
            <ModalTrigger key={key} type={'Услуга'} heading={heading} description={description} content={content}>
              <div className="px-10 py-16 relative grid grid-cols-2 gap-20 items-center duration-200 border-t-2 border-foreground group hover:bg-red hover:text-background-alt text-left">
                <div className="absolute duration-200 rounded-full inset-9 s-7 bg-foreground group-hover:bg-background-alt"></div>

                <Text type="h4" className="ml-28 max-w-[20ch]" text={heading} />
                <Text type="h5" className="max-w-[50ch]" text={description} />
              </div>
            </ModalTrigger>
          ))}
        </div>

        {/* mobile list */}
        <div className="hidden sm:flex flex-col">
          {Object.entries(servicesData).map(([key, {heading}]) => (
            <div key={key} className="px-3 py-10 relative grid grid-cols-1 gap-5 items-center border-b-2 border-foreground/80 group">
              <div className="rounded-full s-5 text-background bg-red grid place-items-center">
                <span className="hidden sm:block text-[13px]">{key}</span>
              </div>

              <div className="grid grid-cols-5 justify-between items-end">
                <Text type="h4" className="col-span-4" text={heading} />
                <ChevronDown className="col-span-1 justify-self-end s-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
