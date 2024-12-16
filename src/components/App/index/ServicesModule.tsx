import {TService} from '@/utils/getData'

import Text from '~/UI/Text'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'

export default function ServicesModule({data}: {data: [string, TService][]}) {
  return (
    <section data-section="desktop-services" className="flex flex-col sm:hidden">
      {data.map(([key, {heading, description, content}]) => (
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
    </section>
  )
}
