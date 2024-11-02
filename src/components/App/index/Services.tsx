import {cn} from '@/lib/utils'
import {getServices, TService} from '@/utils/getData'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button, {ExpandButton} from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'
import MobileService from '~/UI/MobileService'

export default async function Services({where}: {where: 'index' | 'services'}) {
  const servicesData: TService[] = await getServices()

  if (!servicesData) {
    return console.log('Error fetching services data')
  }

  const isIndex = where === 'index'

  const filteredServices = Object.entries(servicesData)
    .filter(([, service]) => (isIndex ? service.is_best : true))
    .sort(([, a], [, b]) => (a.id ?? 0) - (b.id ?? 0))

  return (
    <section id={isIndex ? 'services' : ''} data-section="services-index" className="relative z-20">
      <div className={cn('space-y-5 sm:space-y-5 bg-background-alt ', isIndex ? 'pt-20 sm:pt-14' : 'pt-32 xl:pt-28 sm:pt-24')}>
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

        {/* desktop list */}
        <div className="flex flex-col sm:hidden">
          {filteredServices.map(([key, {heading, description, content}]) => (
            <ModalTrigger key={key} tag={'Услуга'} heading={heading} content={content}>
              <hr className="h-[0.1rem] bg-foreground" />

              <div className="relative grid items-center grid-cols-2 gap-20 px-10 py-16 text-left duration-200 group hover:bg-red hover:text-background-alt">
                <SplitText duration={1} y={0} className="absolute inset-9">
                  <div className="duration-200 rounded-full s-7 bg-foreground group-hover:bg-background-alt"></div>
                </SplitText>

                <SplitText duration={0.5}>
                  <Text type="h4" className="ml-28 max-w-[20ch]" text={heading} />
                </SplitText>

                <Text type="h5" className="max-w-[50ch]" text={description} />
              </div>
            </ModalTrigger>
          ))}
        </div>

        {/* mobile list */}
        <div className="flex-col hidden sm:flex">
          {filteredServices.map(([key, {heading, description, content}], index) => (
            <MobileService index={index} heading={heading} description={description} content={content} key={key} />
          ))}
        </div>
      </div>
    </section>
  )
}
