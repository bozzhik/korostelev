import LogoImage from '$/logo.svg'

import {useTranslations} from 'next-intl'
import {Link, Locale} from '@/i18n/routing'

import Image from 'next/image'
import HeaderModule from '~/Global/Header/HeaderModule'

const headerData = {
  services: ['Услуги', 'Services'],
  projects: ['Проекты', 'Projects'],
  team: ['Команда', 'Team'],
  news: ['Новости', 'News'],
  contacts: ['Контакты', 'Contacts'],
}

export default function Header({locale}: {locale: Locale}) {
  const t = useTranslations('Header.menu')
  const t2 = useTranslations('Contacts')

  const mobileButtons = [t('open'), t('close')]

  return (
    <header className="fixed z-50 grid grid-cols-2 items-center justify-between w-screen sm:p-3 sm:bg-foreground">
      <Link href="/" className="z-[99] px-4 py-3 xl:px-3 xl:py-2.5 sm:p-1.5 bg-red w-fit">
        <Image quality={100} src={LogoImage} className="xl:w-[140px] sm:w-[110px] object-contain" alt="" />
      </Link>

      <HeaderModule locale={locale} links={headerData} address={`${t2.raw('address')}`} menuLabels={mobileButtons} />
    </header>
  )
}
