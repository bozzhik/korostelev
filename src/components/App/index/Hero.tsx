import Image from 'next/image'
import HeroImage from '$/hero.jpg'

import Heading from '~/UI/Heading'

export default function Hero() {
  const screenHeight = 'h-screen !h-svh'
  return (
    <section data-section="hero-index" className={`grid grid-cols-2 text-background ${screenHeight}`}>
      <div className="relative">
        <Heading type="h1" className="absolute left-5 bottom-5" text="МАКСИМ <br /> КОРОСТЕЛЁВ" />

        <Image quality={100} className="object-cover s-full" src={HeroImage} alt="" />
      </div>
      <div className="flex flex-col justify-end gap-10 p-8 bg-red">
        <div className="space-y-3">
          <Heading type="h2" className="" text="Руководил группой юристов" />
          <p className="max-w-[50ch] text-xl font-extralight tracking-tight">Руководил группой юристов. Основатель юридической фирмы Korostelev & Partners. Участвовал в разработке федеральных законов. </p>
        </div>

        <button className="py-3 text-xl font-bold border-[2px] px-14 w-fit border-background">ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ</button>
      </div>
    </section>
  )
}
