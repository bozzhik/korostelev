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
  split?: 'chars' | 'words' | 'lines'
  rerun?: boolean
  className?: string
}

export const SplitText = ({children, duration = 0.8, opacity = 0, y = 500, stagger = 0.1, split = 'lines', rerun = false, className}: Props) => {
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(GSAPSplitText)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const splitInstance = new GSAPSplitText(targetRef.current, {type: 'words,chars,lines'})
            gsap.from(splitInstance[split], {
              duration,
              opacity,
              y,
              stagger,
              onComplete: () => {
                if (rerun) {
                  observer.observe(entry.target)
                }
              },
            })
            if (!rerun) {
              observer.unobserve(entry.target)
            }
          }
        })
      },
      {threshold: 0},
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
  }, [duration, opacity, y, stagger, split, rerun])

  return (
    <div ref={targetRef} className={`overflow-hidden ${className}`}>
      {children}
    </div>
  )
}
