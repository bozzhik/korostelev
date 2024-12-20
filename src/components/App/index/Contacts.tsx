import {screenHeight} from '~~/index/Hero'

import Link from 'next/link'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import {SplitText} from '~/UI/SplitText'
import ContactsForm from '~~/index/ContactsForm'

type Social = {
  label: string
  prelink: string
  link: string
}

type ContactsData = {
  address: Record<string, string>
  socials: Record<string, Social>
}

const contactsData: ContactsData = {
  address: {
    label: `БЦ Victory Park, этаж 3 <br /> <span class="text-background/60 group-hover:underline underline-offset-4">г. Москва, ул. Минская, 2Ж</span>`,
    link: 'https://yandex.ru/maps/-/CDh5QYPB',
  },
  socials: {
    ws: {
      label: 'WhatsApp',
      prelink: '+7 (962) 935-44-38',
      link: 'https://wa.me/+79629354438',
    },
    tg: {
      label: 'Telegram',
      prelink: '@maxim_attorney',
      link: 'https://t.me/maxim_attorney',
    },
    ml: {
      label: 'Электронная почта',
      prelink: 'maxim.korostelev@korostelev.legal',
      link: 'mailto:maxim.korostelev@korostelev.legal',
    },
  },
}
export const {address, socials} = contactsData

export default function Contacts() {
  return (
    <section id="contacts" data-section="contacts-index" className={`relative z-20 grid grid-cols-2 sm:grid-cols-1 gap-20 sm:gap-12 px-8 xl:px-6 sm:p-4 pt-36 xl:pt-28 sm:pt-12 pb-16 bg-red text-background sm:!h-auto ${screenHeight}`}>
      <div className="flex flex-col justify-between gap-32">
        <div className="inline-flex flex-col gap-2">
          <SplitText>
            <Heading type="h1" className="uppercase" text="СВЯЖИТЕСЬ" />
            <Heading type="h1" className="uppercase" text="С НАМИ" />
          </SplitText>
        </div>

        <div className="sm:hidden space-y-14">
          <Link className="group" href={contactsData.address.link}>
            <Text type="h5" text={contactsData.address.label} />
          </Link>

          <div className="flex gap-3">
            {Object.keys(contactsData.socials).map((key) => (
              <Button key={key} variant="outline" to={socials[key].link} text={socials[key].label} />
            ))}
          </div>
        </div>
      </div>

      <ContactsForm />

      <div className="hidden sm:block space-y-14 sm:space-y-5">
        <Link href={contactsData.address.link}>
          <Text type="h5" className="!leading-[1.3]" text={contactsData.address.label} />
        </Link>

        <div className="flex gap-3 sm:flex-col">
          {Object.keys(socials).map((key) => (
            <Button key={key} className="sm:w-full" variant="outline" to={socials[key].link} text={socials[key].label} />
          ))}
        </div>
      </div>
    </section>
  )
}
