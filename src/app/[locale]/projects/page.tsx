import type {LocaleParams} from '@/app/[locale]/layout'

import Projects from '~~/index/Projects'
import Contacts from '~~/index/Contacts'

export default function ProjectsPage({params: {locale}}: LocaleParams) {
  return (
    <main className="relative">
      <Projects where="projects" locale={locale} />
      <Contacts />
    </main>
  )
}
