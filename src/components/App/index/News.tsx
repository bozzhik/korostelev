import ProjectOneImage from '$/projects/1.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Button from '~/UI/Button'
import Text from '~/UI/Text'

const servicesData = {
  1: {
    date: '28.09.2024',
    token: 'News & Articles By Steven Barreto',
    title: 'Fidelity National Information Services 2023 Data Breach Impacts Consumers',
  },
  2: {
    date: '13.09.2024',
    token: 'news & articles by',
    title: 'Data breach impacts consumers',
  },
  3: {
    date: '28.09.2024',
    token: 'News & Articles By Steven Barreto',
    title: 'Fidelity National Information Services 2023 Data Breach Impacts Consumers',
  },
  4: {
    date: '13.09.2024',
    token: 'news & articles by',
    title: 'Data breach impacts consumers',
  },
}

export default function News() {
  return (
    <section id="news" data-section="news-index" className="relative z-20 pt-32 space-y-8 bg-background">
      <div className="flex items-end justify-between px-8">
        <Heading type="h1" className="uppercase" text="Новости" />
        <Button to="#" mode="dark" variant="secondary" text="Посмотреть все" />
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col">
          {Object.entries(servicesData).map(([key, {date, token, title}]) => (
            <div key={key} className="relative pl-10 space-y-5 duration-200 py-7 group hover:bg-red hover:text-background hover:pl-14">
              <Text type="h6" className="uppercase text-foreground/65 group-hover:text-background-alt/65" text={`${date} // ${token}`} />

              <Text type="h4" className="max-w-[35ch] font-normal" text={title} />
            </div>
          ))}
        </div>

        <Image className="object-cover w-full h-full" src={ProjectOneImage} alt="" />
      </div>
    </section>
  )
}
