import Projects from '~~/index/Projects'
import Contacts from '~~/index/Contacts'

export default function ProjectsPage() {
  return (
    <main className="relative">
      <Projects where="projects" />
      <Contacts />
    </main>
  )
}
