import type {Locale} from '@/i18n/routing'
import {getProjects, TProject} from '@/utils/getData'

import {cn} from '@/lib/utils'
import {urlForImage} from '@/lib/sanity'
import {getTranslations} from 'next-intl/server'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button, {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'

export default async function Projects({where, locale}: {where: 'index' | 'projects'; locale: Locale}) {
  const projectsData: TProject[] = await getProjects()
  const t = await getTranslations('Blocks')

  if (!projectsData) {
    console.error('Error fetching projects data')
    return null
  }

  const isIndex = where === 'index'

  const filteredProjects = projectsData.filter((project) => (isIndex ? project.is_best : true)).sort((a, b) => (a.id ?? 0) - (b.id ?? 0))

  return (
    <section id={isIndex ? 'projects' : ''} data-section="projects-index" className={cn('relative z-20 p-8 pt-32 space-y-8 sm:p-4 bg-foreground', isIndex ? 'space-y-8 xl:pt-20 sm:pt-12' : 'sm:space-y-5 xl:pt-28 sm:pt-24')}>
      <div className="flex items-end justify-between text-background">
        <SplitText>
          <Heading type="h1" className="uppercase" text={isIndex ? t('projects.0') : t('projects.1')} />
        </SplitText>
        {isIndex && (
          <SplitText>
            <ExpandButton to="/projects" className="sm:hidden" />
            <Button to="/projects" variant="solid" mode="light" className="hidden sm:flex px-2 py-1 flex-row-reverse gap-2.5 text-background bg-foreground" text="БОЛЬШЕ" />
          </SplitText>
        )}
      </div>

      {/* Desktop List */}
      <div className="grid grid-cols-3 gap-5 sm:hidden items-stretch items [&_button]:h-full">
        {filteredProjects.map(({id, image, [locale]: projectLocale}) => (
          <ModalTrigger key={id} type="project" tag={projectLocale.tag} heading={projectLocale.heading} content={projectLocale.content} image={urlForImage(image)}>
            <div id="project-card" className="h-full">
              <div className="relative h-full flex flex-col gap-20 text-left duration-200 xl:gap-10 p-7 pt-14 xl:pt-10 bg-background-alt/90 text-foreground group hover:bg-red/80 hover:text-background-alt">
                <Text type="h6" className="line-clamp-1 max-w-[40ch] font-bold uppercase text-foreground/65 group-hover:text-background-alt/65" text={'//' + projectLocale.tag} />

                <div className="space-y-5">
                  <Text type="h4" className="line-clamp-2 leading-[1.15] tracking-tight" text={projectLocale.heading} />
                  <Text type="h5" className="max-w-[35ch] line-clamp-4 xl:leading-[1.15]" text={projectLocale.description} />
                </div>

                <Image quality={100} fill={true} className="absolute inset-0 object-cover w-full h-full duration-200 opacity-50 -z-20 group-hover:opacity-100" src={urlForImage(image)} alt={projectLocale.heading} />
              </div>
            </div>
          </ModalTrigger>
        ))}
      </div>

      {/* Mobile List */}
      <div className="hidden grid-cols-3 gap-5 sm:grid sm:grid-cols-1 sm:px-1">
        {filteredProjects.map(({id, image, [locale]: projectLocale}) => (
          <div id="project-card" className="relative flex flex-col justify-between gap-10 p-4 pt-6 bg-background-alt text-foreground" key={id}>
            <div className="space-y-2.5">
              <Text type="h6" className="pr-4 font-bold uppercase text-foreground/65" text={projectLocale.tag} />

              <div className="space-y-5">
                <Text type="h4" className="sm:text-3xl max-w-[15ch]" text={projectLocale.heading} />
                <Text type="h5" text={projectLocale.description} />
              </div>
            </div>

            <ModalTrigger key={id} tag={projectLocale.tag} heading={projectLocale.heading} content={projectLocale.content} image={urlForImage(image)}>
              <Button variant="solid" className="flex-row-reverse w-full text-background bg-red" text="Посмотреть" />
            </ModalTrigger>
          </div>
        ))}
      </div>
    </section>
  )
}
