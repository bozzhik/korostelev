import {isMobile} from '@bozzhik/is-mobile'

import {screenHeight} from '~~/index/Hero'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import Input from '~/UI/Input'

type Social = {
  label: string
  prelink: string
  link: string
}

type ContactsData = {
  address: string
  socials: Record<string, Social>
}

const contactsData: ContactsData = {
  address: `Carolin Balas Pavisic <br /> Shanghaiallee 18 <br /> 20457 Hamburg, Germany`,
  socials: {
    ws: {
      label: 'WhatsApp',
      prelink: '+7 (909) 999-97-96',
      link: 'https://wa.me/+79099999796',
    },
    tg: {
      label: 'Telegram',
      prelink: '@korostelev',
      link: 'https://t.me/bozzhik',
    },
    ml: {
      label: 'Почта',
      prelink: 'hello@korostelev.ru',
      link: 'mailto:hello@korostelev.ru',
    },
  },
}
export const {address, socials} = contactsData

export default function Contacts() {
  return (
    <section id="contacts" data-section="contacts-index" className={`relative z-20 grid grid-cols-2 sm:grid-cols-1 gap-20 sm:gap-12 px-8 xl:px-6 sm:p-4 pt-36 xl:pt-28 sm:pt-12 pb-16 bg-red text-background sm:!h-auto ${screenHeight}`}>
      <div className="flex flex-col justify-between gap-32">
        <Heading type="h1" text="СВЯЖИТЕСЬ <br class='sm:hidden' /> С НАМИ" />

        <div className="sm:hidden space-y-14">
          <Text type="h5" text={`Carolin Balas Pavisic <br /> Shanghaiallee 18 <br /> 20457 Hamburg, Germany`} />

          <div className="flex gap-3">
            {Object.keys(contactsData.socials).map((key) => (
              <Button key={key} variant="outline" to={socials[key].link} text={socials[key].label} />
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
        <Text type="h5" text={address} />

        <div className="flex gap-3 sm:flex-col">
          {Object.keys(socials).map((key) => (
            <Button key={key} className="sm:w-full" variant="outline" to={socials[key].link} text={socials[key].label} />
          ))}
        </div>
      </div>
    </section>
  )
}
