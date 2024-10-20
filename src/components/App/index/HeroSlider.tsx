'use client'

import React, {useState, useEffect, useRef, useCallback} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Swiper as SwiperType} from 'swiper'
import 'swiper/css'

import Heading from '~/UI/Heading'

type Slide = {
  title: string
  text: string
}

export default function HeroSlider({slides, interval}: {slides: Slide[]; interval: number}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const swiperRef = useRef<SwiperType | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setProgress(0)
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + 100 / (interval / 100)
      })
    }, 100)
  }, [interval])

  useEffect(() => {
    resetInterval()
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [activeIndex, resetInterval])

  useEffect(() => {
    if (progress >= 100 && swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }, [progress])

  const handleSlideChange = useCallback(
    (swiper: SwiperType) => {
      setActiveIndex(swiper.realIndex)
      resetInterval()
    },
    [resetInterval],
  )

  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper
  }, [])

  return (
    <div className="w-full space-y-8">
      <div className="flex">
        {Object.values(slides).map((slide, index) => (
          <div key={index} className="flex-1 h-[3px] bg-background/50 mx-1">
            <div
              className="h-full bg-background transition-all duration-100 ease-linear"
              style={{
                width: `${index === activeIndex ? progress : index < activeIndex ? 100 : 0}%`,
              }}
            />
          </div>
        ))}
      </div>

      <Swiper className="w-full h-full" loop={true} slidesPerView={1} onSwiper={handleSwiper} onSlideChange={handleSlideChange}>
        {Object.values(slides).map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="space-y-3">
              <Heading type="h2" className="" text={slide.title} />
              <p className="max-w-[50ch] text-xl font-extralight tracking-tight">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
