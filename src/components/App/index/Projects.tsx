import ProjectOneImage from '$/projects/1.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import {ExpandButton} from '~/UI/Button'
import Text from '@/components/UI/Text'

const projectsData = {
  1: {
    type: '// гражданское право',
    title: 'Заключение сделки о покупке завода',
    caption: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
  },
  2: {
    type: '// гражданское право',
    title: 'Заключение сделки о покупке завода',
    caption: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
  },
  3: {
    type: '// гражданское право',
    title: 'Заключение сделки о покупке завода',
    caption: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
  },
  4: {
    type: '// гражданское право',
    title: 'Заключение сделки о покупке завода',
    caption: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
  },
  5: {
    type: '// гражданское право',
    title: 'Заключение сделки о покупке завода',
    caption: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
  },
  6: {
    type: '// гражданское право',
    title: 'Заключение сделки о покупке завода',
    caption: 'Юридическое сопровождение сделки по приобретению шинного завода Bridgestone в Ульяновской области (2023)',
    image: ProjectOneImage,
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
        {Object.entries(projectsData).map(([key, {type, title, caption}]) => (
          <div key={key} className="relative flex flex-col gap-20 p-7 pt-14 bg-background-alt text-foreground group hover:bg-red/80 hover:text-background-alt">
            <Text type="h6" className="font-bold uppercase text-foreground/65 group-hover:text-background-alt/65" text={type} />

            <div className="space-y-5">
              <Text type="h4" text={title} />
              <Text type="h5" className="max-w-[25ch]" text={caption} />
            </div>

            <Image className="absolute inset-0 w-full h-full -z-20" src={ProjectOneImage} alt={title} />
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[70px] border-b-[70px] border-l-transparent border-b-transparent border-r-[70px] border-r-foreground"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
