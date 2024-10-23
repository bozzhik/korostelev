import {isMobile} from '@bozzhik/is-mobile'

import {screenHeight} from '~/App/index/Hero'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import Input from '~/UI/Input'

type Socials = {
  label: string
  link: string
}

const socialsData: {[key: string]: Socials} = {
  ws: {
    label: 'WhatsApp',
    link: '#',
  },
  tg: {
    label: 'Telegram',
    link: '#',
  },
  ml: {
    label: 'Почта',
    link: '#',
  },
}

export default function Contacts() {
  return (
    <section id="contacts" data-section="contacts-index" className={`relative z-20 grid grid-cols-2 sm:grid-cols-1 gap-20 sm:gap-12 px-8 sm:p-4 pt-36 sm:pt-12 pb-16 bg-red text-background sm:!h-auto ${screenHeight}`}>
      <div className="flex flex-col justify-between gap-32">
        <Heading type="h1" text="СВЯЖИТЕСЬ <br class='sm:hidden' /> С НАМИ" />

        <div className="sm:hidden space-y-14">
          <Text type="h5" text={`Carolin Balas Pavisic <br /> Shanghaiallee 18 <br /> 20457 Hamburg, Germany`} />

          <div className="flex gap-3">
            {Object.keys(socialsData).map((key) => (
              <Button key={key} variant="outline" to={socialsData[key].link} text={socialsData[key].label} />
            ))}
          </div>
        </div>
      </div>

      <form className="flex flex-col justify-between">
        <div className="flex flex-col h-full gap-7 sm:gap-5">
          <Input content="text" placeholder="Ваше имя" />
          <Input content="tel" placeholder="Номер телефона" />
          <Input content="email" placeholder="E-mail" />
          <div className="flex flex-col justify-between h-full">
            <Input type="textarea" className="h-full" placeholder="Чем я могу помочь?" rows={!isMobile ? 2 : 4} />
            <Button variant="solid" mode="dark" className="w-full" text="Отправить форму" />
          </div>
        </div>
      </form>

      <div className="hidden sm:block space-y-14 sm:space-y-5">
        <Text type="h5" text={`Carolin Balas Pavisic <br /> Shanghaiallee 18 <br /> 20457 Hamburg, Germany`} />

        <div className="flex gap-3 sm:flex-col">
          {Object.keys(socialsData).map((key) => (
            <Button key={key} className="sm:w-full" variant="outline" to={socialsData[key].link} text={socialsData[key].label} />
          ))}
        </div>
      </div>
    </section>
  )
}
