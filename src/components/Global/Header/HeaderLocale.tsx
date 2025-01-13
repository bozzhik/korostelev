'use client'

import type {Locale} from '@/i18n/routing'

import {cn} from '@/lib/utils'
import {usePathname, useRouter} from 'next/navigation'

import {buttonVariants} from '~/UI/Button'

export default function HeaderLocale({view}: {view: 'desktop' | 'mobile'}) {
  const router = useRouter()
  const pathname = usePathname()

  const currentLocale = pathname.split('/')[1] as Locale
  const newLocale: Locale = currentLocale === 'ru' ? 'en' : 'ru'

  const toggleLocale = () => {
    const hash = window.location.hash
    const newPathname = `/${newLocale}${pathname.replace(/^\/[a-z]{2}/, '')}${hash}`

    router.push(newPathname)
  }

  if (view === 'desktop') {
    return (
      <button onClick={toggleLocale} className={cn(buttonVariants.base, 'px-3.5 xl:px-5 py-2 xl:py-1.5 xl:text-base', 'group/button relative overflow-hidden text-background bg-red border-2 border-background/70 hover:border-background hover:text-red active:scale-90 transition-all duration-150')}>
        <span className="absolute bottom-0 left-0 z-0 w-full h-0 transition-all duration-500 bg-gradient-to-t from-background to-background group-hover/button:h-full" />
        <span className="relative z-10 transition-all duration-500 group-hover/button:text-red uppercase">{newLocale}</span>
      </button>
    )
  } else {
    return (
      <button onClick={toggleLocale} className="py-[5px] px-1.5 text-background text-sm bg-red font-medium">
        <span className="relative z-10 transition-all duration-500 group-hover/button:text-red uppercase">{newLocale}</span>
      </button>
    )
  }
}
