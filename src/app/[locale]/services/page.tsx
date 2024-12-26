import type {LocaleParams} from '@/app/[locale]/layout'

import Services from '~~/index/Services'
import Contacts from '~~/index/Contacts'

export default function ServicesPage({params: {locale}}: LocaleParams) {
  return (
    <main className="relative">
      <Services where="services" locale={locale} />
      <Contacts />
    </main>
  )
}
