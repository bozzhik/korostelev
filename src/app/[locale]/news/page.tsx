import News from '~~/index/News'
import Contacts from '~~/index/Contacts'

export default function NewsPage() {
  return (
    <main className="relative">
      {/* @ts-expect-error Server Component */}
      <News where="news" />
      <Contacts />
    </main>
  )
}
