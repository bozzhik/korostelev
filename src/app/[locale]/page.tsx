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

      <Services where="index" locale={locale} />
      <Projects where="index" locale={locale} />
      <Team locale={locale} />
      {/* @ts-expect-error Server Component */}
      <News locale={locale} />
      <Quote />
      <Contacts />
    </main>
  )
}
