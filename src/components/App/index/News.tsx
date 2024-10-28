import ProjectOneImage from '$/projects/1.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button, {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'

const servicesData = {
  1: {
    date: '28.09.2024',
    token: 'News & Articles By Steven Barreto',
    heading: 'Fidelity National Information Services 2023 Data Breach Impacts Consumers',
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  2: {
    date: '13.09.2024',
    token: 'news & articles by',
    heading: 'Data breach impacts consumers',
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  3: {
    date: '28.09.2024',
    token: 'News & Articles By Steven Barreto',
    heading: 'Fidelity National Information Services 2023 Data Breach Impacts Consumers',
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
  4: {
    date: '13.09.2024',
    token: 'news & articles by',
    heading: 'Data breach impacts consumers',
    content: [`Pole cadence us status comes shelf-ware performance eco-system know. Pretend build they requirements see. Churning mindfulness manager container every closing wider weaponize status that. My speed so lift cause responsible uat procrastinating game. We've win six time engagement if reinvent define unit price. Closing rehydrate solutions you hands agile support. Food feed key could launch price box comms hits reality. Yet believe get for moments turn commitment revision focus. Policy dogpile air seems move data usabiltiy too. Moments t-shaped live investigation pivot running. Base finish move comes now.`, `Zoom diligence race creep identify join about. Strategic effects stakeholders out pushback call hiring 2 chime productive. Production performance creep game point line watches here move awareness. Hours dog asserts attached thought time what's win-win-win speed crack. Feed manager culture policy manager no.`, `Must define hour us pollination assassin files strategy principles expectations. Awareness goto feature for email start wheel. Turn back-end hanging message pants. Individual interim put intersection idea involved ensure future-proof. Club innovation barn your busy win-win-win container it. Sky only seems skulls plan unlock note donuts. Say team cadence indicators donuts crystallize procrastinating forward points. Air pups good status three. Boys pups organic closing seems items seat eow. Hill time practices.`],
  },
}

export default function News() {
  return (
    <section id="news" data-section="news-index" className="relative z-20 pt-32 xl:pt-24 sm:pt-12 space-y-8 sm:space-y-6 bg-background sm:bg-red sm:text-background">
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
          {Object.entries(servicesData).map(([key, {date, token, heading, content}]) => (
            <div key={key} className="relative pl-10 sm:space-y-5 duration-200 py-7 h-full sm:p-0 sm:pb-5 group hover:bg-red hover:text-background hover:pl-14 sm:hover:pl-0">
              <Image quality={100} className="hidden sm:block object-cover aspect-square" src={ProjectOneImage} alt="" />

              <div className="sm:px-4 space-y-2">
                <Text type="h6" className="uppercase text-foreground/65 sm:text-background-alt/65 group-hover:text-background-alt/65 sm:group-hover:text-background/65" text={`${date} // ${token}`} />
                <Text type="h4" className="max-w-[35ch] font-normal" text={heading} />
              </div>

              <div className="hidden w-full px-4 sm:block">
                <ModalTrigger key={key} type={token} heading={heading} content={content}>
                  <Button variant="solid" mode="dark" className="w-[90vw] flex-row-reverse text-foreground bg-background" text="Посмотреть" />
                </ModalTrigger>
              </div>
            </div>
          ))}
        </div>

        <Image quality={100} className="object-cover w-full h-full sm:hidden" src={ProjectOneImage} alt="" />
      </div>
    </section>
  )
}
