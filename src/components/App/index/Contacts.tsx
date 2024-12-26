import {screenHeight} from '~~/index/Hero'

import {useTranslations} from 'next-intl'
import {Link} from '@/i18n/routing'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button from '~/UI/Button'
import {SplitText} from '~/UI/SplitText'
import ContactsForm from '~~/index/ContactsForm'

type ContactsData = {
  address: Record<string, string>
  socials: Record<string, {label: string; prelink: string; link: string}>
}

export type LabelsData = {
  name: string
  tel: string
  email: string
  message: string
  policy: [string, string]
  button: [string, string]
}

export default function Contacts() {
  const t = useTranslations('Contacts')
  const tForm = useTranslations('Contacts.form')

  const contactsHeading = [t('heading.0'), t('heading.1')]

  const labelsData: LabelsData = {
    name: tForm('name'),
    tel: tForm('tel'),
    email: tForm('email'),
    message: tForm('message'),
    policy: [tForm('policy.0'), tForm('policy.1')],
    button: [tForm('button.0'), tForm('button.1')],
  }

  const contactsData: ContactsData = {
    address: {
      label: t.raw('address'),
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
        label: t('mail'),
        prelink: 'maxim.korostelev@korostelev.legal',
        link: 'mailto:maxim.korostelev@korostelev.legal',
      },
    },
  }
  const {address, socials} = contactsData

  return (
    <section id="contacts" data-section="contacts-index" className={`relative z-20 grid grid-cols-2 sm:grid-cols-1 gap-20 sm:gap-12 px-8 xl:px-6 sm:p-4 pt-36 xl:pt-28 sm:pt-12 pb-16 bg-red text-background sm:!h-auto ${screenHeight}`}>
      <div className="flex flex-col justify-between gap-32">
        <div className="inline-flex flex-col gap-2">
          <SplitText>
            {contactsHeading.map((text, index) => (
              <Heading type="h1" className="uppercase" text={text} key={index} />
            ))}
          </SplitText>
        </div>

        <div className="sm:hidden space-y-14">
          <Link className="group" href={address.link}>
            <Text type="h5" text={address.label} />
          </Link>

          <div className="flex gap-3">
            {Object.keys(socials).map((key) => (
              <Button key={key} variant="outline" to={socials[key].link} text={socials[key].label} />
            ))}
          </div>
        </div>
      </div>

      <ContactsForm labels={labelsData} />

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
