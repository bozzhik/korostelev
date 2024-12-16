'use client'

import {TService} from '@/utils/getData'
import {cn} from '@/lib/utils'

import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'

import Text from '~/UI/Text'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'

export default function ServicesModule({data}: {data: [string, TService][]}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section data-section="desktop-services" className={cn('flex flex-col sm:hidden', 'border-t-2 divide-y-2 divide-foreground border-foreground')}>
      {data.map(([key, {heading, description, content}], index) => (
        <div
          key={key} // unique key
          className="relative"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 block w-full h-full bg-red"
                layoutId="services-hover-animation"
                initial={{opacity: 0}}
                animate={{
                  opacity: 1,
                  transition: {duration: 0.15},
                }}
                exit={{
                  opacity: 0,
                  transition: {duration: 0.15, delay: 0.2},
                }}
              />
            )}
          </AnimatePresence>

          <ModalTrigger tag={'Услуга'} heading={heading} content={content}>
            <div
              className={cn('duration-200 relative grid items-center w-screen grid-cols-2 gap-20 px-10 py-16 text-left', hoveredIndex === index ? 'text-background-alt' : 'text-foreground')}
              style={{
                transition: hoveredIndex === index ? 'color 0.15s ease' : 'color 0.15s ease 0.2s',
              }}
            >
              <SplitText duration={1} y={0} className="absolute inset-9">
                <div
                  className={cn('duration-200 rounded-full s-7', hoveredIndex === index ? 'bg-background-alt' : 'bg-foreground')}
                  style={{
                    transition: hoveredIndex === index ? 'background-color 0.15s ease' : 'background-color 0.15s ease 0.2s',
                  }}
                ></div>
              </SplitText>

              <SplitText duration={0.5}>
                <Text type="h4" className="ml-28 max-w-[20ch]" text={heading} />
              </SplitText>

              <Text type="h5" className="max-w-[50ch]" text={description} />
            </div>
          </ModalTrigger>
        </div>
      ))}
    </section>
  )
}
