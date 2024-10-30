import Hero, {screenHeight} from '~~/index/Hero'
import Services from '~~/index/Services'
import Projects from '~~/index/Projects'
import Team from '~~/index/Team'
import News from '~~/index/News'
import Quote from '~~/index/Quote'
import Contacts from '~~/index/Contacts'

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <div data-section="spacer" className={`w-full ${screenHeight}`} />

      <Services />
      <Projects where="index" />
      <Team />
      <News />
      <Quote />
      <Contacts />
    </main>
  )
}
