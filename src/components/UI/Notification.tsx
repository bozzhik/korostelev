'use client'

import {isMobile} from '@bozzhik/is-mobile'
import {useState, useEffect, useRef} from 'react'
import Cookies from 'js-cookie'
import {X} from 'lucide-react'
import {gsap} from 'gsap'

export default function Notification() {
  const [show, setShow] = useState(false)
  const notificationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cookieSeen = Cookies.get('cookies-notify')
    if (!cookieSeen) {
      const timer = setTimeout(() => {
        setShow(true)
        Cookies.set('cookies-notify', 'true')
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (show && notificationRef.current) {
      gsap.fromTo(notificationRef.current, {y: 100, opacity: 0}, {y: 0, opacity: 1, duration: 0.5, ease: 'power4.out'})
    }
  }, [show])

  if (!show) return null

  return (
    <section id="notification" className="pb-5 sm:p-3 w-full fixed bottom-0 left-0 grid place-items-center z-[99]">
      <div ref={notificationRef} className="w-[45%] xl:w-[60%] sm:w-full px-3 sm:p-2.5 flex sm:flex-col sm:gap-2.5 justify-between items-center bg-background-alt [box-shadow:0_11px_25px_-5px_#00000060]">
        <p className="text-[15px] sm:text-sm !leading-tight font-medium py-3 sm:py-0">Мы используем файлы cookie для организации работы сайта и повышения качества нашей работы. Продолжая использование сайта, вы соглашаетесь с приемом и передачей файлов cookie.</p>
        <div className="grid place-items-center sm:self-end sm:w-full sm:py-1 cursor-pointer group sm:bg-foreground sm:text-background" onClick={() => setShow(false)}>
          {!isMobile ? <X className="s-8 xl:s-6 duration-200 group-hover:text-red" /> : 'Принять'}
        </div>
      </div>
    </section>
  )
}
