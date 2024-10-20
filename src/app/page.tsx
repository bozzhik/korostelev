import Hero, {screenHeight} from '~~/index/Hero'
import Services from '~~/index/Services'
import Projects from '~~/index/Projects'

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <div data-section="spacer" className={`w-full ${screenHeight}`} />

      <Services />
      <Projects />
    </main>
  )
}
