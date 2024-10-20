'use client'

import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import Heading from '~/UI/Heading'

type Slide = {
  title: string
  text: string
}

export default function HeroSlider({slides}: {slides: Record<number, Slide>}) {
  return (
    <Swiper className="w-full" loop={true} slidesPerView={1}>
      {Object.values(slides).map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="space-y-3">
            <Heading type="h2" className="" text={slide.title} />
            <p className="max-w-[50ch] text-xl font-extralight tracking-tight">{slide.text}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
