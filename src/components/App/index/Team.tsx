import TeamOneImage from '$/team/1.jpg'
import TeamTwoImage from '$/team/2.jpg'
import TeamThreeImage from '$/team/3.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {SplitText} from '~/UI/SplitText'

const teamData = {
  1: {
    position: 'Управляющий партнер',
    name: 'максим коростелев',
    area: '//Недвижимость и строительство',
    image: TeamOneImage,
  },
  2: {
    position: 'Управляющий партнер',
    name: 'максим коростелев',
    area: '//Недвижимость и строительство',
    image: TeamTwoImage,
  },
  3: {
    position: 'Управляющий партнер',
    name: 'максим коростелев',
    area: '//Недвижимость и строительство',
    image: TeamThreeImage,
  },
}

export default function Team() {
  return (
    <section id="team" data-section="team-index" className="relative z-20 p-8 sm:p-4 pt-32 xl:pt-20 sm:pt-12 space-y-8 bg-foreground">
      <SplitText>
        <Heading type="h1" className="text-background uppercase" text="Команда" />
      </SplitText>

      <div className="grid grid-cols-3 sm:grid-cols-1 gap-5">
        {Object.entries(teamData).map(([key, {position, name, area, image}]) => (
          <div className="flex flex-col bg-background justify-between" key={key}>
            <div className="w-full">
              <Image quality={100} className="object-cover s-full" src={image} alt={`${name} - ${position}`} />
            </div>

            <div className="space-y-3 sm:space-y-1.5 p-5 xl:p-4 sm:p-3">
              <div className="space-y-1 sm:space-y-0">
                <Text type="h5" text={position} />
                <Text type="h4" className="uppercase" text={name} />
              </div>

              <Text type="h6" className="text-foreground/65" text={area} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
