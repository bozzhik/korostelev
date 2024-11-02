'use client'

import {useState} from 'react'
import {TNews} from '@/utils/getData'

import Image from 'next/image'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {urlForImage} from '@/lib/sanity'

export default function NewsBody({newsData}: {newsData: TNews[]}) {
  const [selectedNews, setSelectedNews] = useState(newsData[0])

  const handleNewsHover = (news: TNews) => {
    setSelectedNews(news)
  }

  return (
    <>
      {/* desktop view */}
      <div className="grid grid-cols-2 sm:hidden">
        <div className="flex flex-col justify-between">
          {newsData.map(({heading, tag, date, content, image, source}, index) => (
            <ModalTrigger key={index} tag={`${date} // ${tag}`} heading={heading} content={content} image={urlForImage(image)} source={source}>
              <div onMouseEnter={() => handleNewsHover({heading, tag, date, content, image, source})} className="relative pl-10 text-left duration-200 cursor-pointer py-7 h-full group hover:bg-red hover:text-background hover:pl-14">
                <div className="space-y-2 pr-6 sm:px-4">
                  <Text type="h6" className="max-w-[70ch] uppercase line-clamp-1 text-foreground/65 group-hover:text-background-alt/65" text={`${date} // ${tag}`} />
                  <Text type="h4" className="line-clamp-2 max-w-[35ch] font-normal tracking-tight" text={heading} />
                </div>
              </div>
            </ModalTrigger>
          ))}
        </div>

        <Image quality={100} priority={true} className="object-cover w-full h-full" width={1000} height={1000} src={urlForImage(selectedNews.image)} alt={selectedNews.heading} />
      </div>

      {/* mobile view */}
      <div className="flex-col justify-between hidden gap-0 sm:flex">
        {newsData.map(({heading, tag, date, content, image, source}, index) => (
          <div key={index} onMouseEnter={() => handleNewsHover({heading, tag, date, content, image, source})} className="relative h-full pb-5 space-y-5 duration-200 group hover:bg-red hover:text-background">
            <Image quality={100} className="object-cover aspect-square" width={1000} height={1000} src={urlForImage(image)} alt="" />

            <div className="space-y-2 sm:px-4">
              <Text type="h6" className="max-w-[70ch] uppercase line-clamp-1 text-foreground/65 sm:text-background-alt/65 group-hover:text-background-alt/65 sm:group-hover:text-background/65" text={`${date} // ${tag}`} />
              <Text type="h4" className="line-clamp-2 max-w-[35ch] font-normal" text={heading} />
            </div>

            <div className="w-full px-4">
              <ModalTrigger key={index} tag={`${date} // ${tag}`} heading={heading} content={content} source={source}>
                <Button variant="solid" mode="dark" className="w-[90vw] flex-row-reverse text-foreground bg-background" text="Посмотреть" />
              </ModalTrigger>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
