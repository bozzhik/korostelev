'use client'

import type {Locale} from '@/i18n/routing'
import type {TNews} from '@/utils/getData'

import {urlForImage} from '@/lib/sanity'
import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {useScrollTrigger} from '@/lib/useScrollTrigger'

import Image from 'next/image'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {cn} from '@/lib/utils'

function DesktopNewsBody({news, isIndex, locale}: {news: TNews[]; isIndex?: boolean; locale: Locale}) {
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
        {news.map((news, index) => (
          <div
            key={index} // unique key
            className="relative"
            onMouseEnter={() => handleNewsHover(news, index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {(hoveredIndex === index || selectedNews?.[locale].heading === news[locale].heading) && (
                <motion.span
                  className="absolute inset-0 block w-full h-full bg-red"
                  layoutId="news-hover-animation"
                  initial={{opacity: selectedNews?.[locale].heading === news[locale].heading ? 1 : 0}} // Ensure first news is shown
                  animate={{opacity: 1, transition: {duration: 0.15}}}
                  exit={{opacity: 0, transition: {duration: 0.15, delay: 0.2}}}
                />
              )}
            </AnimatePresence>

            <ModalTrigger tag={`${news.date} // ${news[locale].tag}`} heading={news[locale].heading} content={news[locale].content} image={urlForImage(news.image)} source={news.source}>
              <div
                className={cn('relative h-full pl-10 text-left duration-200 cursor-pointer py-6', hoveredIndex === index || selectedNews?.[locale].heading === news[locale].heading ? 'text-background' : '')}
                style={{
                  transition: hoveredIndex === index ? 'color 0.15s ease' : 'color 0.15s ease 0.2s',
                }}
              >
                <div className="pr-6 space-y-2 sm:px-4">
                  <Text
                    type="h6"
                    className={cn('max-w-[70ch] uppercase line-clamp-1', hoveredIndex === index || selectedNews?.[locale].heading === news[locale].heading ? 'text-background-alt/65' : 'text-foreground/65')}
                    style={{
                      transition: hoveredIndex === index ? 'color 0.15s ease' : 'color 0.15s ease 0.2s',
                    }}
                    text={`${news.date} // ${news[locale].tag}`}
                  />
                  <Text type="h4" className="line-clamp-2 max-w-[35ch] font-normal tracking-tight leading-[1.15]" text={news[locale].heading} />
                </div>
              </div>
            </ModalTrigger>
          </div>
        ))}
      </div>

      {isIndex ? (
        <Image quality={100} priority={true} className="object-cover w-full h-full" width={1000} height={1000} src={urlForImage(selectedNews.image)} alt={selectedNews[locale].heading} />
      ) : (
        <div data-scroll-trigger="fixed-image" className="sm:hidden h-full !translate-y-0">
          <Image quality={100} priority={true} className="block object-cover w-full h-full" width={1000} height={1000} src={urlForImage(selectedNews.image)} alt={selectedNews[locale].heading} />
        </div>
      )}
    </section>
  )
}

export default function NewsBody({newsData, isIndex, locale}: {newsData: TNews[]; isIndex?: boolean; locale: Locale}) {
  return (
    <>
      <DesktopNewsBody news={newsData} isIndex={isIndex} locale={locale} />

      {/* Mobile view */}
      <section data-section="mobile-news" className="flex-col justify-between hidden gap-0 sm:flex">
        {newsData.map((news, index) => (
          <div key={index} className="relative h-full pb-5 space-y-5 duration-200 group hover:bg-red hover:text-background">
            <Image quality={100} className="object-cover aspect-square" width={1000} height={1000} src={urlForImage(news.image)} alt="" />

            <div className="space-y-2 sm:px-4">
              <Text type="h6" className="max-w-[70ch] uppercase line-clamp-1 text-foreground/65 sm:text-background-alt/65 group-hover:text-background-alt/65 sm:group-hover:text-background/65" text={`${news.date} // ${news[locale].tag}`} />
              <Text type="h4" className="line-clamp-2 max-w-[35ch] font-normal" text={news[locale].heading} />
            </div>

            <div className="w-full px-4">
              <ModalTrigger key={index} tag={`${news.date} // ${news[locale].tag}`} heading={news[locale].heading} content={news[locale].content} source={news.source}>
                <Button variant="solid" mode="dark" className="w-[90vw] flex-row-reverse text-foreground bg-background" text="Посмотреть" />
              </ModalTrigger>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
