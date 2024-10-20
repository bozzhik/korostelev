import Heading from '~/UI/Heading'

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
    <section data-section="services-index" className="relative w-full min-h-screen bg-background z-20 p-8">
      <Heading type="h1" text="Услуги" />
      <div className="space-y-10 text-background">
        {Object.entries(servicesData).map(([key, {heading, description}]) => (
          <div key={key} className="space-y-2">
            <h1 className="text-4xl font-medium">{heading}</h1>
            <p className="text-xl">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
