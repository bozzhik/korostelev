import {cn} from '@/lib/utils'
import {buttonVariants} from '~/UI/Button'

import Image from 'next/image'
import HeroImage from '$/hero.jpg'

import Link from 'next/link'
import Heading from '~/UI/Heading'
import HeroSlider from '~~/index/HeroSlider'

export const screenHeight = 'h-screen !h-svh'

const heroSliderData = {
  1: {
    title: 'Основатель юридической фирмы Korostelev & Partners',
    text: 'Эксперт в области юридического сопровождения M&A, совместных предприятий, венчурных инвестиций и инвестиционных фондов, ex-глава направления юридического сопровождения M&A S8 Capital, ex-член Инвестиционного комитета Российской венчурной компании, ex-старший юрист EY (Ernst&Young)',
  },
  2: {
    title: 'Руководил группой юристов',
    text: 'при проведении сделок M&A по приобретению российских промышленных активов иностранных транснациональных корпораций, таких как Bosch, Brigdestone, KONE, Huntsman, A.Raymond',
  },
  3: {
    title: 'Участвовал в разработке федеральных законов',
    text: 'направленных на улучшение инвестиционного климата в России, в частности, «закона о праве на риск» при венчурном инвестировании государственных средств и законодательства об инвестиционном товариществе',
  },
}

export default function Hero() {
  return (
    <section data-section="hero-index" className={`fixed w-screen inset-0 z-10 grid grid-cols-2 sm:grid-cols-1 text-background [min-height:inherit] ${screenHeight}`}>
      <div className="relative sm:absolute -z-10 [height:inherit] sm:h-full sm:bg-foreground">
        <Heading type="h1" className="absolute sm:hidden xl:text-8xl left-5 bottom-5 sm:left-3" text="МАКСИМ <br /> КОРОСТЕЛЁВ" />

        <div className="s-full bg-foreground/25">
          <Image priority={true} quality={100} className="object-cover s-full sm:pt-[7vh] sm:opacity-75 sm:scale-[1.1]" src={HeroImage} alt="" />
        </div>
      </div>

      <div className="[height:inherit] flex flex-col justify-end gap-10 sm:gap-3 p-8 sm:p-2.5 sm:pb-3 bg-red sm:bg-transparent">
        <Heading type="h1" className="hidden sm:block sm:text-[46px]" text="МАКСИМ <br /> КОРОСТЕЛЁВ" />

        <HeroSlider interval={5000} slides={Object.values(heroSliderData)} />
        <Link href="#contacts">
          <button className={cn(buttonVariants.base, 'sm:hidden px-16 py-3 uppercase font-semibold', 'group/button relative overflow-hidden text-background bg-red border-2 border-background hover:border-red hover:text-red active:scale-95 transition-all duration-150')}>
            <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-background to-background transition-all duration-500 group-hover/button:h-full" />
            <span className="relative z-10 transition-all duration-500 group-hover/button:text-red">Заказать консультацию</span>
          </button>
        </Link>
      </div>
    </section>
  )
}
