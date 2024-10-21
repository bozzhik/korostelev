import Hero, {screenHeight} from '~~/index/Hero'
import Services from '~~/index/Services'
import Projects from '~~/index/Projects'
import News from '~~/index/News'

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <div data-section="spacer" className={`w-full ${screenHeight}`} />

      <Services />
      <Projects />
      <News />
    </main>
  )
}
