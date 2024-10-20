import Hero, {screenHeight} from '~~/index/Hero'
import Services from '~~/index/Services'

export default function HomePage() {
  return (
    <main className="relative">
      <Hero />
      <div data-section="spacer" className={`w-full ${screenHeight}`} />

      <Services />
    </main>
  )
}
