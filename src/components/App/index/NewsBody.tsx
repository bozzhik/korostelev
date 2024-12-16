'use client'

import {TNews} from '@/utils/getData'
import {urlForImage} from '@/lib/sanity'

import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {useScrollTrigger} from '@/lib/useScrollTrigger'

import Image from 'next/image'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {cn} from '@/lib/utils'

function DesktopNewsBody({news, isIndex}: {news: TNews[]; isIndex?: boolean}) {
  const [selectedNews, setSelectedNews] = useState(news[0])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useScrollTrigger({selector: 'fixed-image'})

  const handleNewsHover = (news: TNews, index: number) => {
    setHoveredIndex(index)
    setSelectedNews(news)
  }

  return (
    <section data-section="desktop-news" className="grid grid-cols-2 overflow-hidden sm:hidden">
      <div className="flex flex-col justify-between">
        {news.map(({heading, tag, date, content, image, source}, index) => (
          <div
            key={index} // unique key
            className="relative"
            onMouseEnter={() => handleNewsHover({heading, tag, date, content, image, source}, index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {(hoveredIndex === index || selectedNews?.heading === heading) && (
                <motion.span
                  className="absolute inset-0 block w-full h-full bg-red"
                  layoutId="news-hover-animation"
                  initial={{opacity: selectedNews?.heading === heading ? 1 : 0}} // Ensure first news is shown
                  animate={{opacity: 1, transition: {duration: 0.15}}}
                  exit={{opacity: 0, transition: {duration: 0.15, delay: 0.2}}}
                />
              )}
            </AnimatePresence>

            <ModalTrigger tag={`${date} // ${tag}`} heading={heading} content={content} image={urlForImage(image)} source={source}>
              <div
                className={cn('relative h-full pl-10 text-left duration-200 cursor-pointer py-6', hoveredIndex === index || selectedNews?.heading === heading ? 'text-background' : '')}
                style={{
                  transition: hoveredIndex === index ? 'color 0.15s ease' : 'color 0.15s ease 0.2s',
                }}
              >
                <div className="pr-6 space-y-2 sm:px-4">
                  <Text
                    type="h6"
                    className={cn('max-w-[70ch] uppercase line-clamp-1', hoveredIndex === index || selectedNews?.heading === heading ? 'text-background-alt/65' : 'text-foreground/65')}
                    style={{
                      transition: hoveredIndex === index ? 'color 0.15s ease' : 'color 0.15s ease 0.2s',
                    }}
                    text={`${date} // ${tag}`}
                  />
                  <Text type="h4" className="line-clamp-2 max-w-[35ch] font-normal tracking-tight leading-[1.15]" text={heading} />
                </div>
              </div>
            </ModalTrigger>
          </div>
        ))}
      </div>

      {isIndex ? (
        <Image quality={100} priority={true} className="object-cover w-full h-full" width={1000} height={1000} src={urlForImage(selectedNews.image)} alt={selectedNews.heading} />
      ) : (
        <div data-scroll-trigger="fixed-image" className="sm:hidden h-full !translate-y-0">
          <Image quality={100} priority={true} className="block object-cover w-full h-full" width={1000} height={1000} src={urlForImage(selectedNews.image)} alt={selectedNews.heading} />
        </div>
      )}
    </section>
  )
}

export default function NewsBody({newsData, isIndex}: {newsData: TNews[]; isIndex?: boolean}) {
  return (
    <>
      <DesktopNewsBody news={newsData} isIndex={isIndex} />

      {/* mobile view */}
      <section data-section="mobile-news" className="flex-col justify-between hidden gap-0 sm:flex">
        {newsData.map(({heading, tag, date, content, image, source}, index) => (
          <div key={index} className="relative h-full pb-5 space-y-5 duration-200 group hover:bg-red hover:text-background">
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
      </section>
    </>
  )
}
