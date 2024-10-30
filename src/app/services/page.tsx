import Services from '~~/index/Services'
import Contacts from '~~/index/Contacts'

export default function ServicesPage() {
  return (
    <main className="relative">
      <Services where="services" />
      <Contacts />
    </main>
  )
}
