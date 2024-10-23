import ProjectOneImage from '$/projects/1.jpg'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Button, {ExpandButton} from '~/UI/Button'
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
    <section id="news" data-section="news-index" className="relative z-20 pt-32 space-y-8 sm:space-y-6 sm:pt-12 bg-background sm:bg-red sm:text-background">
      <div className="flex items-end justify-between px-8 sm:px-4">
        <Heading type="h1" className="uppercase" text="Новости" />
        <ExpandButton to="#" className="sm:hidden" mode="light" text="Посмотреть все" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col sm:gap-0">
          {Object.entries(servicesData).map(([key, {date, token, title}]) => (
            <div key={key} className="relative pl-10 space-y-5 duration-200 py-7 sm:p-0 sm:pb-7 group hover:bg-red hover:text-background hover:pl-14 sm:hover:pl-0">
              <Image className="object-cover aspect-square" src={ProjectOneImage} alt="" />

              <div className="px-4 space-y-2">
                <Text type="h6" className="uppercase sm:font-semibold text-background-alt/65" text={`${date} // ${token}`} />
                <Text type="h4" className="max-w-[35ch] font-normal" text={title} />
              </div>

              <div className="hidden w-full px-4 sm:block">
                <Button variant="solid" mode="dark" className="flex-row-reverse w-full py-2 bg-background" text="Посмотреть" />
              </div>
            </div>
          ))}
        </div>

        <Image className="object-cover w-full h-full sm:hidden" src={ProjectOneImage} alt="" />
      </div>
    </section>
  )
}
