import type {LocaleParams} from '@/app/[locale]/layout'

import News from '~~/index/News'
import Contacts from '~~/index/Contacts'

export default function NewsPage({params: {locale}}: LocaleParams) {
  return (
    <main className="relative">
      <News where="news" locale={locale} />
      <Contacts />
    </main>
  )
}
