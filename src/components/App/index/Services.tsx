'use client'

import {useState} from 'react'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'
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
    content: [
      `Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`,
      `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`,
      `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`,
      `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`,
      `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`,
    ],
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
  const [visibleDescriptions, setVisibleDescriptions] = useState<{[key: string]: boolean}>({})

  const toggleDescriptionVisibility = (key: string) => {
    setVisibleDescriptions((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }))
  }

  return (
    <section id="services" data-section="services-index" className="relative z-20">
      <div className="pt-20 space-y-5 sm:space-y-5 bg-background-alt sm:pt-14">
        <div className="flex items-end justify-between px-10 sm:px-3">
          <SplitText>
            <Heading type="h1" className="uppercase" text="Услуги" />
          </SplitText>
          <SplitText>
            <ExpandButton to="#" className="sm:hidden" mode="light" text="Посмотреть все" />
          </SplitText>
        </div>

        {/* desktop list */}
        <div className="flex flex-col sm:hidden">
          {Object.entries(servicesData).map(([key, {heading, description, content}]) => (
            <ModalTrigger key={key} type={'Услуга'} heading={heading} content={content}>
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
          {Object.entries(servicesData).map(([key, {heading, description, content}]) => (
            <div key={key} className="relative grid items-center grid-cols-1 gap-5 px-4 py-10 group">
              <SplitText duration={1} y={0}>
                <div className="grid rounded-full s-5 text-background bg-red place-items-center">
                  <span className="hidden sm:block text-[13px]">{key}</span>
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
                      <ModalTrigger key={key} type={'Услуга'} heading={heading} content={content}>
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
