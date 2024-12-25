'use client'

import {address, socials} from '~~/index/Contacts'

import {useState, useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'

import LogoImage from '$/logo.svg'
import {X} from 'lucide-react'

import Image from 'next/image'
import {Link} from '@/i18n/routing'
import Button from '~/UI/Button'
import Text from '~/UI/Text'

const headerData = {
  services: 'Услуги',
  projects: 'Проекты',
  team: 'Команда',
  news: 'Новости',
  contacts: 'Контакты',
}

export default function Header() {
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
    <header className="fixed z-50 flex items-center justify-between w-screen sm:p-3 sm:bg-foreground bg-red">
      <Link href="/" className="z-[99] px-4 py-3 sm:p-1.5 bg-red w-fit">
        <Image quality={100} src={LogoImage} className="xl:w-[170px] sm:w-[110px] object-contain" alt="" />
      </Link>

      <nav className="flex items-center justify-around h-full gap-5 pr-8 xl:gap-4 sm:hidden bg-red">
        {Object.entries(headerData).map(([key, value]) => (
          <Button to={`/#${key}`} className="flex-row-reverse py-2 xl:py-1.5 pl-11 pr-5 xl:pl-8 xl:pr-5 xl:w-full xl:gap-2 text-background xl:text-base" text={value} key={key} />
        ))}
      </nav>

      <div className="hidden sm:block z-[99] pr-2 justify-self-end text-xl uppercase text-background" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="flex items-center gap-2">
            Закрыть <X />
          </div>
        ) : (
          'Меню'
        )}
      </div>

      <section ref={container} className={`absolute inset-0 z-20 w-screen h-screen ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className="flex flex-col justify-between h-full px-4 pb-20 menu-overlay pt-28 bg-foreground text-background">
          <div className="flex flex-col gap-5">
            {Object.entries(headerData)
              .slice(0, 3)
              .map(([key, value]) => (
                <Link href={`/#${key}`} className="text-3xl font-light uppercase menu-item w-fit" onClick={toggleMenu} key={key}>
                  {value}
                </Link>
              ))}
          </div>

          <div className="flex flex-col gap-3 menu-item">
            <span className="font-extralight">Адрес</span>

            <Link href={address.link}>
              <Text type="h5" className="text-base font-medium !leading-[1.4]" text={address.label} />
            </Link>
          </div>

          <div className="flex flex-col gap-3 menu-item">
            <span className="font-extralight">Контакты</span>

            <div className="flex flex-col gap-1">
              {['ws', 'ml', 'tg'].map((key) => (
                <Link className="text-base font-medium w-fit" href={socials[key].link} key={key}>
                  {socials[key].prelink}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
