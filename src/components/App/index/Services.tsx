import type {Locale} from '@/i18n/routing'
import {getServices} from '@/utils/getData'

import {cn} from '@/lib/utils'
import {SplitText} from '~/UI/SplitText'

import Heading from '~/UI/Heading'
import Button, {ExpandButton} from '~/UI/Button'
import MobileService from '~/UI/MobileService'
import ServicesModule from '~~/index/ServicesModule'

export default async function Services({where, locale}: {where: 'index' | 'services'; locale: Locale}) {
  const servicesData = await getServices()

  if (!servicesData) {
    console.error('Error fetching services data')
    return null
  }

  const isIndex = where === 'index'

  const filteredServices = servicesData.filter((service) => (isIndex ? service.is_best : true)).sort((a, b) => (a.id ?? 0) - (b.id ?? 0))

  return (
    <section id={isIndex ? 'services' : ''} data-section="services-index" className="relative z-20">
      <div className={cn('space-y-5 sm:space-y-5 bg-background-alt', isIndex ? 'pt-20 sm:pt-14' : 'pt-32 xl:pt-28 sm:pt-24')}>
        <div className="flex items-end justify-between px-10 sm:px-3">
          <SplitText>
            <Heading type="h1" className="uppercase" text={isIndex ? 'Услуги' : 'Все услуги'} />
          </SplitText>

          {isIndex && (
            <SplitText>
              <ExpandButton to="/services" mode="light" className="sm:hidden" text="Посмотреть все" />
              <Button to="/services" variant="solid" mode="dark" className="hidden sm:flex px-2 py-1 flex-row-reverse gap-2.5 bg-background-alt" text="БОЛЬШЕ" />
            </SplitText>
          )}
        </div>

        {/* Desktop List */}
        <ServicesModule data={filteredServices} locale={locale} />

        {/* Mobile List */}
        <section data-section="mobile-services" className="flex-col hidden sm:flex">
          {filteredServices.map(({id, [locale]: serviceLocale}, index) => (
            <MobileService key={id} index={index} heading={serviceLocale.heading} description={serviceLocale.description} content={serviceLocale.content} />
          ))}
        </section>
      </div>
    </section>
  )
}
