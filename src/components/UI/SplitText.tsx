'use client'

import {useEffect, useRef, ReactNode} from 'react'
import {gsap} from 'gsap'
import {GSAPSplitText} from '@/lib/gsap/split-text'

type Props = {
  children: ReactNode
  duration?: number
  opacity?: number
  y?: number
  stagger?: number
  className?: string
}

export const SplitText = ({children, duration = 0.5, opacity = 0, y = 50, stagger = 0.1, className}: Props) => {
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(GSAPSplitText)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const split = new GSAPSplitText(targetRef.current, {type: 'words,chars'})
            gsap.from(split.chars, {
              duration,
              opacity,
              y,
              stagger,
            })
          }
        })
      },
      {threshold: 0.1},
    )

    const currentTarget = targetRef.current
    if (currentTarget) {
      observer.observe(currentTarget)
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget)
      }
    }
  }, [duration, opacity, y, stagger])

  return (
    <div ref={targetRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
