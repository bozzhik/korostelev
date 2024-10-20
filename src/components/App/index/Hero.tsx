import Image from 'next/image'
import HeroImage from '$/hero.jpg'

import Heading from '~/UI/Heading'
import HeroSlider from '~~/index/HeroSlider'

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
  const screenHeight = 'h-screen !h-svh'
  return (
    <section data-section="hero-index" className={`grid grid-cols-2 text-background ${screenHeight}`}>
      <div className="relative">
        <Heading type="h1" className="absolute left-5 bottom-5" text="МАКСИМ <br /> КОРОСТЕЛЁВ" />
        <Image quality={100} className="object-cover s-full" src={HeroImage} alt="" />
      </div>

      <div className="flex flex-col justify-end gap-10 p-8 bg-red">
        <HeroSlider interval={5000} slides={Object.values(heroSliderData)} />
        <button className="py-3 text-xl font-bold border-[2px] px-14 w-fit border-background">ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</button>
      </div>
    </section>
  )
}
