import type {LocaleParams} from '@/app/[locale]/layout'

import Hero, {screenHeight} from '~~/index/Hero'
import Services from '~~/index/Services'
import Projects from '~~/index/Projects'
import Team from '~~/index/Team'
import News from '~~/index/News'
import Quote from '~~/index/Quote'
import Contacts from '~~/index/Contacts'

export default function HomePage({params: {locale}}: LocaleParams) {
  return (
    <main className="relative">
      {/* @ts-expect-error Server Component */}
      <Hero locale={locale} />
      <div data-section="spacer" className={`w-full ${screenHeight}`} />

      {/* @ts-expect-error Server Component */}
      <Services where="index" />
      {/* @ts-expect-error Server Component */}
      <Projects where="index" />
      <Team />
      {/* @ts-expect-error Server Component */}
      <News />
      <Quote />
      <Contacts />
    </main>
  )
}
