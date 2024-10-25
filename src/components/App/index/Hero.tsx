import Image from 'next/image'
import HeroImage from '$/hero.jpg'

import Heading from '~/UI/Heading'
import Button from '~/UI/Button'
import HeroSlider from '~~/index/HeroSlider'

export const screenHeight = 'h-screen !h-svh'

const heroSliderData = {
  1: {
    title: 'Руководил группой юристов',
    text: 'Руководил группой юристов. Основатель юридической фирмы Korostelev & Partners. Участвовал в разработке федеральных законов.',
  },
  2: {
    title: 'Основатель юридической фирмы',
    text: 'Основатель юридической фирмы Korostelev & Partners. Участвовал в разработке федеральных законов. Руководил группой юристов.',
  },
  3: {
    title: 'Участвовал в разработке федеральных законов',
    text: 'Участвовал в разработке федеральных законов. Руководил группой юристов. Основатель юридической фирмы Korostelev & Partners.',
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
        <Button to="#" icon={false} className="font-bold uppercase sm:hidden px-14 border-background" text="Заказать консультацию" />
      </div>
    </section>
  )
}
