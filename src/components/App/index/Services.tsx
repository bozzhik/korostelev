import Heading from '~/UI/Heading'
import {ExpandButton} from '~/UI/Button'
import Text from '~/UI/Text'

const servicesData = {
  1: {
    heading: 'M&A по российскому и английскому праву',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources staircase / when alpha didn't. Options incentivization drawing-board creep muted need strategies. Quarter revision.`,
  },
  2: {
    heading: 'joint ventures',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources stairca`,
  },
  3: {
    heading: 'венчурные сделки',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources staircase / when alpha didn't. Op`,
  },
  4: {
    heading: 'договоры инвестиционного товарищества',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resourc`,
  },
  5: {
    heading: 'IT и цифровое право',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources staircase / when alpha didn't. Options incentivization drawing-board creep muted need stra`,
  },
  6: {
    heading: 'Конвертируемые займы',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. `,
  },
  7: {
    heading: 'иные формы инвестиций в России и за рубежом',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources s`,
  },
  8: {
    heading: 'валютный контроль',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources st`,
  },
  9: {
    heading: 'недропользование',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources staircase / whe`,
  },
  10: {
    heading: 'промышленная безопасность и экология',
    description: `Stand issues feed 4-blocker nobody. Zoom an quick scraps place also say field. Comes stakeholders nail wanted for involved. Speed eod resources s`,
  },
}

export default function Services() {
  return (
    <section id="services" data-section="services-index" className="relative z-20 w-full min-h-screen">
      <svg className="fill-background-alt" width="100%" height="100%" viewBox="0 0 300 15">
        <path
          d="M 0 0 
             L 290 0 
             L 303 15 
             L 303 15 
             L 0 15 Z"
        />
      </svg>

      <div className="space-y-5 bg-background-alt">
        <div className="flex items-end justify-between px-10">
          <Heading type="h1" className="uppercase " text="Услуги" />
          <ExpandButton to="#" mode="light" text="Посмотреть все" />
        </div>

        <div>
          {Object.entries(servicesData).map(([key, {heading, description}]) => (
            <div key={key} className="relative grid items-center grid-cols-2 gap-20 px-10 py-16 duration-200 border-t-2 border-foreground group hover:bg-red hover:text-background-alt">
              <div className="absolute duration-200 rounded-full inset-9 s-7 bg-foreground group-hover:bg-background-alt"></div>

              <Text type="h4" className="ml-28 max-w-[20ch]" text={heading} />
              <Text type="h5" className="max-w-[50ch]" text={description} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
