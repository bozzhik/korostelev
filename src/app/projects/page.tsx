import Projects from '~~/index/Projects'
import Contacts from '~~/index/Contacts'

export default function ProjectsPage() {
  return (
    <main className="relative">
      {/* @ts-expect-error Server Component */}
      <Projects where="projects" />
      <Contacts />
    </main>
  )
}
