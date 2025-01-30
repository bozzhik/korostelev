import type {Metadata} from 'next'
import localFont from 'next/font/local'
import './globals.css'

const Geist = localFont({
  src: [
    {
      path: '../../assets/fonts/Geist-ExtraLight.woff2',
      weight: '200',
    },
    {
      path: '../../assets/fonts/Geist-Light.woff2',
      weight: '300',
    },
    {
      path: '../../assets/fonts/Geist-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../assets/fonts/Geist-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../assets/fonts/Geist-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../../assets/fonts/Geist-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-geist',
})

export const metadata: Metadata = {
  title: 'Коростелев и партнеры | Юридическое сопровождение M&A, инвестиций, санкций, энергетики и IT',
  description: 'Юридическое сопровождение венчурных инвестиций и правовая экспертиза в M&A, инвестиционных фондах, IT-бизнесе, антикризисном управлении и энергетическом секторе. Защита бизнеса от рисков.',
  keywords: 'сопровождение, сделки, бизнеса, право, компании, компаний, споры, практика, защита, вопросам, коростелев, korostelev',
}

import {Locale, routing} from '@/i18n/routing'
import {notFound} from 'next/navigation'

import Loader from '~/Global/Loader'
import Notification from '~/UI/Notification'
import Header from '~/Global/Header/Header'
import YandexMetrika from '~/Global/Analytics'

export type LocaleParams = {
  params: {
    locale: Locale
  }
}

type Props = {
  children: React.ReactNode
  params: {
    locale: Locale
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default async function RootLayout({children, params: {locale}}: Readonly<Props>) {
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  return (
    <html className="scroll-smooth" lang={locale}>
      <body className={`${Geist.variable} font-sans antialiased text-foreground !bg-foreground overflow-x-hidden`}>
        {process.env.NODE_ENV === 'production' && <Loader />}
        <Notification />

        <Header locale={locale} />
        {children}
      </body>
      {process.env.NODE_ENV === 'production' && <YandexMetrika />}
    </html>
  )
}
