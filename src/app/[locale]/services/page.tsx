import Services from '~~/index/Services'
import Contacts from '~~/index/Contacts'

export default function ServicesPage() {
  return (
    <main className="relative">
      {/* @ts-expect-error Server Component */}
      <Services where="services" />
      <Contacts />
    </main>
  )
}
