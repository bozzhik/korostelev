'use client'

import {TMember} from '@/utils/getData'
import {urlForImage} from '@/lib/sanity'
import {cn} from '@/lib/utils'

import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'

import Text from '~/UI/Text'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import Image from 'next/image'

export default function TeamModule({data}: {data: TMember[]}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section data-section="module" className="grid grid-cols-3 gap-5 sm:grid-cols-1">
      {Object.entries(data).map(([key, {position, name, surname, specialization, image, description, achievements}], index) => (
        <div
          key={key} // unique key
          className="relative overflow-hidden"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 block w-full h-full bg-red sm:hidden"
                layoutId="hoverBackground"
                initial={{opacity: 0}}
                animate={{
                  opacity: 1,
                  transition: {duration: 0.3},
                }}
                exit={{
                  opacity: 0,
                  transition: {duration: 0.3, delay: 0.2},
                }}
              />
            )}
          </AnimatePresence>

          <ModalTrigger key={key} type="team" tag={position} heading={`${name} ${surname}`} content={description} achievements={achievements} image={urlForImage(image)}>
            <div className={cn('flex flex-col justify-between text-left duration-200 bg-background')}>
              <div className="w-full">
                <Image quality={100} width={1000} height={1000} className="relative z-30 object-cover s-full" src={urlForImage(image)} alt={`${name} - ${position}`} />
              </div>

              <div
                className={cn('space-y-3 sm:space-y-1.5 p-5 xl:p-4 sm:p-3 duration-200 z-20', hoveredIndex == index && 'text-background sm:text-foreground')}
                style={{
                  transition: hoveredIndex === index ? 'color 0.15s ease' : 'color 0.15s ease 0.2s',
                }}
              >
                <div className="space-y-1.5 sm:space-y-0">
                  <Text type="h5" text={position} />
                  <Text type="h4" className="leading-none uppercase" text={`${name} ${surname}`} />
                </div>

                <Text
                  type="h6"
                  className={cn('line-clamp-1', hoveredIndex == index ? 'text-background/65 sm:text-foreground/65' : 'text-foreground/65')}
                  style={{
                    transition: hoveredIndex === index ? 'color 0.15s ease' : 'color 0.15s ease 0.2s',
                  }}
                  text={specialization}
                />
              </div>
            </div>
          </ModalTrigger>
        </div>
      ))}
    </section>
  )
}
