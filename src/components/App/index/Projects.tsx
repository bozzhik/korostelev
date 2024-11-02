import {cn} from '@/lib/utils'
import {getProjects, TProject} from '@/utils/getData'

import Image from 'next/image'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button, {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'
import {urlForImage} from '@/lib/sanity'

export default async function Projects({where}: {where: 'index' | 'projects'}) {
  const projectsData: TProject[] = await getProjects()

  if (!projectsData) {
    return console.log('Error fetching projects data')
  }

  const isIndex = where === 'index'

  const filteredProjects = Object.entries(projectsData)
    .filter(([, project]) => (isIndex ? project.is_best : true))
    .sort(([, a], [, b]) => (a.id ?? 0) - (b.id ?? 0))

  return (
    <section id={isIndex ? 'projects' : ''} data-section="projects-index" className={cn('relative z-20 p-8 pt-32 space-y-8 sm:p-4 bg-foreground', isIndex ? 'space-y-8 xl:pt-20 sm:pt-12' : 'sm:space-y-5 xl:pt-28 sm:pt-24')}>
      <div className="flex items-end justify-between text-background">
        <SplitText>
          <Heading type="h1" className="uppercase" text={isIndex ? 'Проекты' : 'Все проекты'} />
        </SplitText>
        {isIndex && (
          <SplitText>
            <ExpandButton to="/projects" className="sm:hidden" text="Посмотреть все" />
            <Button to="/projects" variant="solid" mode="light" className="hidden sm:flex px-2 py-1 flex-row-reverse gap-2.5 text-background bg-foreground" text="БОЛЬШЕ" />
          </SplitText>
        )}
      </div>

      {/* desktop list */}
      <div className="grid grid-cols-3 gap-5 sm:hidden">
        {filteredProjects.map(([key, {tag, heading, description, content, image}]) => (
          <ModalTrigger key={key} type="project" tag={tag} heading={heading} content={content} image={urlForImage(image)}>
            <div id="project-card">
              <div className="relative flex flex-col gap-20 text-left duration-200 xl:gap-10 p-7 pt-14 xl:pt-10 bg-background-alt text-foreground group hover:bg-red/80 hover:text-background-alt">
                <Text type="h6" className="line-clamp-1 max-w-[40ch] font-bold uppercase text-foreground/65 group-hover:text-background-alt/65" text={'//' + tag} />

                <div className="space-y-5">
                  <Text type="h4" className="line-clamp-2 leading-[1.15]" text={heading} />
                  <Text type="h5" className="max-w-[35ch] line-clamp-4 xl:leading-[1.15]" text={description} />
                </div>

                <Image quality={100} fill={true} className="absolute inset-0 w-full h-full -z-20" src={urlForImage(image)} alt={heading} />
              </div>
            </div>
          </ModalTrigger>
        ))}
      </div>

      {/* mobile list */}
      <div className="hidden grid-cols-3 gap-5 sm:grid sm:grid-cols-1 sm:px-1">
        {filteredProjects.map(([key, {tag, heading, description, content, image}]) => (
          <div id="project-card" className="relative flex flex-col justify-between gap-10 p-4 pt-6 bg-background-alt text-foreground" key={key}>
            <div className="space-y-2.5">
              <Text type="h6" className="pr-4 font-bold uppercase text-foreground/65" text={tag} />

              <div className="space-y-5">
                <Text type="h4" className="sm:text-3xl max-w-[15ch]" text={heading} />
                <Text type="h5" text={description} />
              </div>
            </div>

            <ModalTrigger key={key} tag={tag} heading={heading} content={content} image={urlForImage(image)}>
              <Button variant="solid" className="flex-row-reverse w-full text-background bg-red" text="Посмотреть" />
            </ModalTrigger>
          </div>
        ))}
      </div>
    </section>
  )
}
