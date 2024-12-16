'use client'

import {TProject} from '@/utils/getData'

import {cn} from '@/lib/utils'
import {urlForImage} from '@/lib/sanity'

import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'

import Image from 'next/image'
import Text from '~/UI/Text'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'

export default function ProjectsModule({data}: {data: [string, TProject][]}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section data-section="desktop-projects" className="grid grid-cols-3 gap-5 sm:hidden">
      {data.map(([key, {tag, heading, description, content, image}], index) => (
        <div
          key={key} // unique key
          className="relative"
          id="project-card"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 block w-full h-full bg-red/75"
                layoutId="projects-hover-animation"
                initial={{opacity: 0}}
                animate={{
                  opacity: 1,
                  transition: {duration: 0.5},
                }}
                exit={{
                  opacity: 0,
                  transition: {duration: 0.5, delay: 0.2},
                }}
              />
            )}
          </AnimatePresence>

          <ModalTrigger key={key} type="project" tag={tag} heading={heading} content={content} image={urlForImage(image)}>
            <div>
              <div className={cn('relative flex flex-col gap-20 text-left bg-transparent xl:gap-10 p-7 pt-14 xl:pt-10 duration-500', hoveredIndex === index ? 'text-background-alt' : 'text-foreground bg-background-alt/80')}>
                <Text type="h6" className={cn('line-clamp-1 max-w-[40ch] font-bold uppercase duration-200', hoveredIndex === index ? 'text-background-alt/65' : 'text-foreground/65')} text={'//' + tag} />

                <div className="space-y-5">
                  <Text type="h4" className="line-clamp-2 leading-[1.15] tracking-tight" text={heading} />
                  <Text type="h5" className="max-w-[35ch] line-clamp-4 xl:leading-[1.15]" text={description} />
                </div>

                <Image quality={100} fill={true} className={cn('absolute inset-0 object-cover w-full h-full -z-20 duration-500', hoveredIndex === index ? 'opacity-100' : 'opacity-40')} src={urlForImage(image)} alt={heading} />
              </div>
            </div>
          </ModalTrigger>
        </div>
      ))}
    </section>
  )
}
