'use client'

import {X} from 'lucide-react'

import {contactsData} from '@/utils/contactsData'

import {useState, useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'

import {Link, Locale} from '@/i18n/routing'
import Button from '~/UI/Button'
import Text from '~/UI/Text'
import HeaderLocale from '~/Global/Header/HeaderLocale'

type Props = {
  locale: Locale
  links: {[key: string]: string[]}
  address: string
  menuLabels: string[]
}

export default function HeaderModule({locale, links, address, menuLabels}: Props) {
  const container = useRef<HTMLElement | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const tl = useRef<gsap.core.Timeline | null>(null)
  useGSAP(
    () => {
      gsap.set('.menu-item', {y: 75})

      tl.current = gsap
        .timeline({paused: true})
        .to('.menu-overlay', {
          duration: 1,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'power4.inOut',
        })
        .to('.menu-item', {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power4.out',
          delay: -0.75,
        })
    },
    {scope: container},
  )

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play()
      } else {
        tl.current.reverse()
      }
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className="flex items-center justify-around h-full gap-3.5 xl:gap-2.5 pl-4 pr-8 xl:pl-3 xl:pr-6 sm:hidden bg-red">
        {Object.entries(links).map(([key, value]) => (
          <Button to={`/#${key}`} className="flex-row-reverse py-2 xl:py-1.5 pl-5 pr-4 w-full gap-2.5 xl:gap-1.5 text-background xl:text-sm" text={value[locale === 'ru' ? 0 : 1]} key={key} />
        ))}

        <HeaderLocale view="desktop" />
      </nav>

      <div className={`hidden sm:flex items-center ${!isMenuOpen ? 'gap-4' : 'gap-3'} z-[99] justify-self-end text-xl uppercase text-background`}>
        <div onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="flex items-center gap-1">
              {menuLabels[1]} <X />
            </div>
          ) : (
            menuLabels[0]
          )}
        </div>

        <HeaderLocale view="mobile" />
      </div>

      <section ref={container} className={`absolute inset-0 z-20 w-screen h-screen ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className="flex flex-col justify-between h-full px-4 pb-20 menu-overlay pt-28 bg-foreground text-background">
          <div className="flex flex-col gap-3.5">
            {Object.entries(links).map(([key, value]) => (
              <Link href={`/#${key}`} className="text-3xl font-light uppercase menu-item w-fit" onClick={toggleMenu} key={key}>
                {value[locale === 'ru' ? 0 : 1]}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3 menu-item">
            <span className="font-extralight">Адрес</span>

            <Link href={contactsData.address.link}>
              <Text type="h5" className="text-base font-medium !leading-[1.4]" text={address} />
            </Link>
          </div>

          <div className="flex flex-col gap-3 menu-item">
            <span className="font-extralight">Контакты</span>

            <div className="flex flex-col gap-1">
              {['ws', 'ml', 'tg'].map((key) => (
                <Link className="text-base font-medium w-fit" href={contactsData.socials[key].link} key={key}>
                  {contactsData.socials[key].prelink}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
