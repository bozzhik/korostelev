import {getProjects} from '@/utils/getData'

import {cn} from '@/lib/utils'
import {urlForImage} from '@/lib/sanity'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button, {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'
import ProjectsModule from '~~/index/ProjectsModule'

export default async function Projects({where}: {where: 'index' | 'projects'}) {
  const projectsData = await getProjects()

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

      <ProjectsModule data={filteredProjects} />

      {/* mobile list */}
      <div data-section="mobile-projects" className="hidden grid-cols-3 gap-5 sm:grid sm:grid-cols-1 sm:px-1">
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
