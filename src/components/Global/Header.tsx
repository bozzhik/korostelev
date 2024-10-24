'use client'

import {isMobile} from '@bozzhik/is-mobile'
import {useState, useEffect, useRef} from 'react'
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'

import LogoImage from '$/logo.svg'
import {X} from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import Button from '~/UI/Button'
import Text from '~/UI/Text'
import {screenHeight} from '~~/index/Hero'
import {address, socials} from '~~/index/Contacts'

const headerData = {
  services: 'Услуги',
  projects: 'Проекты',
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
    <header className="fixed z-50 grid items-center w-screen grid-cols-2 sm:bg-gray sm:p-3">
      <div className="z-[99] p-4 sm:p-1.5 bg-red w-fit">
        <Image src={LogoImage} className="sm:w-[110px] object-contain" alt="" />
      </div>

      <nav className="flex items-center justify-around gap-10 px-10 sm:hidden xl:justify-center xl:gap-5 xl:pl-7 bg-red">
        {Object.entries(headerData).map(([key, value]) => (
          <Button to={`#${key}`} className="flex-row-reverse py-2 xl:py-1.5 pl-14 pr-7 xl:pl-8 xl:pr-5 xl:gap-2 text-background xl:text-base" text={value} key={key} />
        ))}
      </nav>

      {isMobile && (
        <div className="z-[99] pr-2 justify-self-end text-xl uppercase text-background" onClick={toggleMenu}>
          {isMenuOpen ? (
            <div className="flex items-center gap-2">
              Close <X />
            </div>
          ) : (
            'Menu'
          )}
        </div>
      )}

      <section ref={container} className={`absolute inset-0 z-20 w-screen ${screenHeight}`}>
        <div className="menu-overlay px-4 pt-28 pb-20 h-full flex flex-col justify-between bg-foreground text-background">
          <div className="flex flex-col gap-5">
            {Object.entries(headerData)
              .slice(0, 3)
              .map(([key, value]) => (
                <Link href={`#${key}`} className="menu-item text-3xl font-light uppercase w-fit" onClick={toggleMenu} key={key}>
                  {value}
                </Link>
              ))}
          </div>

          <div className="menu-item space-y-3">
            <span className="font-extralight">Address</span>
            <Text type="h5" className="text-base font-medium leading-[1.3]" text={address} />
          </div>

          <div className="menu-item flex gap-3 sm:flex-col">
            <span className="font-extralight">Contacts</span>

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
