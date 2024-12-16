'use client'

import {useEffect, useRef, useState} from 'react'
import {gsap} from 'gsap'

import Text from '~/UI/Text'

export default function Loader() {
  const pathRef = useRef<SVGPathElement | null>(null)
  const maskRef = useRef<SVGRectElement | null>(null)
  const loaderRef = useRef<HTMLElement | null>(null)
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    const duration = 1

    const tl = gsap.timeline({
      onUpdate: () => {
        const totalProgress = tl.progress()
        const currentPercent = Math.min(100, Math.round(totalProgress * 100))
        setPercent(currentPercent)
      },
      onComplete: () => {
        gsap.to(loaderRef.current, {
          y: '-100%',
          duration: 0.5,
          ease: 'power2.inOut',
          delay: 0.5,
        })
      },
    })

    tl.to(maskRef.current, {
      y: '-100%',
      duration,
      ease: 'power2.in',
    })

    return () => {
      tl.kill()
    }
  }, [])

  const svgPath =
    'M1.236 37.097V1.257h8.2v35.84h-8.2ZM8.532 28.9l-.38-9.561L25.225 1.258h9.193l-15.35 16.644-4.684 4.912L8.532 28.9Zm17.13 8.197L12.953 21.538l5.413-5.938 16.941 21.497h-9.645ZM56.302 37.714a21.341 21.341 0 0 1-7.792-1.466 18.622 18.622 0 0 1-6.215-3.886 17.598 17.598 0 0 1-4.1-5.866 19.593 19.593 0 0 1 0-14.767 17.51 17.51 0 0 1 4.1-5.865 18.635 18.635 0 0 1 6.186-3.886A21.137 21.137 0 0 1 56.244.585c2.654-.031 5.29.431 7.777 1.363a18.562 18.562 0 0 1 6.128 3.886 17.597 17.597 0 0 1 4.1 5.866 19.711 19.711 0 0 1 0 14.81 17.45 17.45 0 0 1-4.1 5.866 18.328 18.328 0 0 1-6.186 3.857 21.313 21.313 0 0 1-7.66 1.481Zm0-7.024c1.5.014 2.987-.27 4.377-.836a10.649 10.649 0 0 0 3.546-2.405 11.005 11.005 0 0 0 2.291-3.637 13.111 13.111 0 0 0 0-9.267 10.914 10.914 0 0 0-2.315-3.61 10.853 10.853 0 0 0-3.521-2.432 11.346 11.346 0 0 0-4.378-.836 11.52 11.52 0 0 0-4.377.836 10.576 10.576 0 0 0-3.546 2.405 11.166 11.166 0 0 0-2.334 3.637 13.111 13.111 0 0 0 0 9.268 11.166 11.166 0 0 0 2.334 3.636 10.357 10.357 0 0 0 3.546 2.405c1.35.572 2.796.88 4.26.91l.117-.074ZM81.912 37.1V1.26H97.35a20.003 20.003 0 0 1 8.258 1.643 12.143 12.143 0 0 1 5.341 4.399 12.488 12.488 0 0 1 1.882 6.907 12.413 12.413 0 0 1-1.882 6.936 11.83 11.83 0 0 1-5.341 4.4 20.768 20.768 0 0 1-8.258 1.466h-10.9l3.764-3.578v13.623l-8.302.044Zm8.302-12.7-3.764-3.9h10.447a8.725 8.725 0 0 0 5.706-1.628 5.745 5.745 0 0 0 1.926-4.62 5.64 5.64 0 0 0-1.926-4.575 8.726 8.726 0 0 0-5.706-1.612H86.45l3.764-3.945V24.4Zm14.417 12.7-8.93-13.008h8.857l8.973 13.008h-8.9ZM136.672 37.715a21.339 21.339 0 0 1-7.792-1.467 18.622 18.622 0 0 1-6.216-3.886 17.61 17.61 0 0 1-4.1-5.865 19.415 19.415 0 0 1 0-14.767 17.523 17.523 0 0 1 4.1-5.866 18.637 18.637 0 0 1 6.187-3.886 21.134 21.134 0 0 1 7.762-1.393 21.46 21.46 0 0 1 7.778 1.364 18.706 18.706 0 0 1 6.186 3.886 17.582 17.582 0 0 1 4.1 5.865 19.705 19.705 0 0 1 0 14.811 17.448 17.448 0 0 1-4.1 5.866 18.468 18.468 0 0 1-6.186 3.857 21.315 21.315 0 0 1-7.719 1.48Zm-.117-6.951c1.5.014 2.987-.27 4.378-.836a10.654 10.654 0 0 0 3.545-2.405 11.006 11.006 0 0 0 2.364-3.637 13.114 13.114 0 0 0 0-9.267 10.92 10.92 0 0 0-2.347-3.621 10.855 10.855 0 0 0-3.562-2.42 11.35 11.35 0 0 0-4.378-.837 11.518 11.518 0 0 0-4.377.836 10.576 10.576 0 0 0-3.546 2.405 11.448 11.448 0 0 0-2.291 3.563 13.257 13.257 0 0 0 0 9.268 11.45 11.45 0 0 0 2.349 3.637 10.361 10.361 0 0 0 3.488 2.405c1.386.586 2.873.895 4.377.909ZM174.116 37.715a28.845 28.845 0 0 1-8.23-1.085 18.926 18.926 0 0 1-6.347-2.933l2.802-6.247a19.196 19.196 0 0 0 5.398 2.684 19.973 19.973 0 0 0 6.377 1.056 12.646 12.646 0 0 0 3.939-.514 4.914 4.914 0 0 0 2.218-1.349 2.94 2.94 0 0 0 .715-1.98 2.703 2.703 0 0 0-1.123-2.272 8.816 8.816 0 0 0-2.919-1.379 60.537 60.537 0 0 0-4.056-1.026 48.452 48.452 0 0 1-4.377-1.188 17.7 17.7 0 0 1-4.071-1.833 8.698 8.698 0 0 1-2.919-3.02 9.193 9.193 0 0 1-1.094-4.693 10.203 10.203 0 0 1 1.62-5.602 11.245 11.245 0 0 1 4.975-4.047A20.444 20.444 0 0 1 175.4.82c2.238.004 4.467.28 6.639.821a19.786 19.786 0 0 1 5.588 2.185l-2.597 6.247a20.912 20.912 0 0 0-4.932-2.082 19.065 19.065 0 0 0-4.873-.69 11.463 11.463 0 0 0-3.911.543 4.525 4.525 0 0 0-2.174 1.467 3.4 3.4 0 0 0-.686 2.053 2.773 2.773 0 0 0 1.124 2.302 8.359 8.359 0 0 0 2.918 1.364 91.99 91.99 0 0 0 4.086.968c1.479.323 2.94.724 4.377 1.202a20.198 20.198 0 0 1 4.1 1.833 8.324 8.324 0 0 1 3.122 3.218 8.386 8.386 0 0 1 1.008 4.378 9.778 9.778 0 0 1-1.664 5.529 11.54 11.54 0 0 1-5.005 4.047 20.22 20.22 0 0 1-8.404 1.51ZM202.218 37.097V8.018h-11.396v-6.76h31.065v6.76h-11.41v29.08h-8.259ZM234.521 30.44h19.406v6.657H226.32V1.257h26.965v6.658h-18.764V30.44Zm-.613-14.797h17.159v6.511h-17.159v-6.51ZM260.492 37.097V1.257h8.303v29.08h17.772v6.76h-26.075ZM299.45 30.44h19.407v6.657h-27.636V1.257h26.95v6.658H299.45V30.44Zm-.613-14.797h17.189v6.511h-17.189v-6.51ZM336.133 37.097l-15.438-35.84h8.959l13.454 31.749h-5.195L351.57 1.258h8.201l-15.496 35.84h-8.142ZM13.885 91.341a18 18 0 0 1-6.945-1.275 12.097 12.097 0 0 1-4.874-3.476 7.884 7.884 0 0 1-1.78-5.074 9.82 9.82 0 0 1 1.182-4.81 12.102 12.102 0 0 1 3.765-3.988 37.548 37.548 0 0 1 6.522-3.637 40.454 40.454 0 0 0 4.465-2.36 8.07 8.07 0 0 0 2.145-1.951c.42-.558.65-1.236.656-1.936a2.8 2.8 0 0 0-.89-2.126 3.665 3.665 0 0 0-2.612-.85 4.116 4.116 0 0 0-2.918.923 3.08 3.08 0 0 0-1.021 2.361c.01.507.125 1.006.335 1.467a6.932 6.932 0 0 0 1.168 1.686c.569.63 1.371 1.466 2.422 2.478l18.91 17.51-4.275 5.058-20.778-19.4a22.463 22.463 0 0 1-2.802-3.05 11.41 11.41 0 0 1-1.605-2.83 8.073 8.073 0 0 1 .861-7.435 9.126 9.126 0 0 1 3.925-3.11 14.309 14.309 0 0 1 5.837-1.099 13.555 13.555 0 0 1 5.428.997 8.427 8.427 0 0 1 3.56 2.845 7.358 7.358 0 0 1 1.299 4.4 7.832 7.832 0 0 1-1.124 4.105 11.614 11.614 0 0 1-3.56 3.593 40.449 40.449 0 0 1-6.172 3.314 24.772 24.772 0 0 0-4.071 2.302 8.209 8.209 0 0 0-2.189 2.23 4.874 4.874 0 0 0-.598 2.492c.002.818.274 1.613.773 2.259a4.742 4.742 0 0 0 2.145 1.554 9.483 9.483 0 0 0 3.414.543 11.221 11.221 0 0 0 5.676-1.467 12.55 12.55 0 0 0 4.378-4.4 19.299 19.299 0 0 0 2.582-6.877l6.362 1.936a22.394 22.394 0 0 1-3.794 9.063 18.996 18.996 0 0 1-6.917 5.988 18.89 18.89 0 0 1-8.9 2.047h.015ZM51.16 90.34V54.514h15.438a19.946 19.946 0 0 1 8.244 1.554c2.182.94 4.043 2.5 5.355 4.487a13.66 13.66 0 0 1 0 13.843 12.46 12.46 0 0 1-5.355 4.4 19.467 19.467 0 0 1-8.244 1.598h-10.9l3.78-3.74v13.609l-8.318.073Zm8.303-12.685-3.765-3.945h10.447a8.579 8.579 0 0 0 5.706-1.642 5.728 5.728 0 0 0 1.94-4.605 5.64 5.64 0 0 0-1.94-4.575 8.724 8.724 0 0 0-5.706-1.613H55.698l3.78-3.945-.015 20.325ZM85.094 90.727l15.846-35.825h8.142l16.05 35.825h-8.711l-13.132-31.63h3.312l-13.132 31.63h-8.375Zm7.996-7.67 2.086-6.305h18.444l2.13 6.306H93.09ZM128.617 90.726V54.902h15.438a19.948 19.948 0 0 1 8.244 1.554c2.182.94 4.043 2.5 5.355 4.487a13.662 13.662 0 0 1 0 13.843 11.92 11.92 0 0 1-5.355 4.4 20.454 20.454 0 0 1-8.244 1.466h-10.9l3.765-3.578v13.608l-8.303.044Zm8.303-12.684-3.765-3.945h10.433a8.578 8.578 0 0 0 5.705-1.642 5.662 5.662 0 0 0 1.941-4.605 5.597 5.597 0 0 0-1.941-4.575 8.722 8.722 0 0 0-5.705-1.613h-10.433l3.765-3.945v20.325Zm14.416 12.684-8.945-13.036h8.872l8.959 12.992-8.886.044ZM179.598 90.727V61.662h-11.41v-6.76h31.108v6.76h-11.41v29.065h-8.288ZM206.693 90.727V54.902h6.829l21.041 25.795h-3.313V54.902h8.142v35.825h-6.814l-21.04-25.794h3.312v25.794h-8.157ZM256.776 84.084h19.407v6.643h-27.607V54.902h26.936v6.658h-18.736v22.524Zm-.569-14.796h17.16v6.496h-17.16v-6.496ZM285.898 90.727V54.901h15.438a19.906 19.906 0 0 1 8.244 1.554 12.038 12.038 0 0 1 5.355 4.488 13.663 13.663 0 0 1 0 13.843 11.776 11.776 0 0 1-5.355 4.399 20.34 20.34 0 0 1-8.244 1.466h-10.9l3.706-3.534v13.609h-8.244Zm8.244-12.685-3.764-3.945h10.447a8.607 8.607 0 0 0 5.705-1.642 5.685 5.685 0 0 0 1.493-2.079 5.72 5.72 0 0 0 .434-2.526 5.65 5.65 0 0 0-.433-2.513 5.613 5.613 0 0 0-1.494-2.062 8.721 8.721 0 0 0-5.705-1.613h-10.447l3.764-3.944v20.324Zm14.417 12.684-8.901-13.036h8.857l8.974 13.037h-8.93ZM340.833 91.34a29.363 29.363 0 0 1-8.23-1.143 19.43 19.43 0 0 1-6.347-2.933l2.801-6.232a20.94 20.94 0 0 0 11.776 3.651c1.331.044 2.66-.125 3.939-.498a4.97 4.97 0 0 0 2.218-1.364 2.94 2.94 0 0 0 .715-1.965 2.742 2.742 0 0 0-1.123-2.288 9.103 9.103 0 0 0-2.919-1.378 70.145 70.145 0 0 0-4.042-1.027 53.707 53.707 0 0 1-4.377-1.173 17.574 17.574 0 0 1-4.085-1.847 8.58 8.58 0 0 1-2.919-3.021 9.137 9.137 0 0 1-1.094-4.678 10.051 10.051 0 0 1 1.634-5.602 11.032 11.032 0 0 1 4.961-4.047 20.252 20.252 0 0 1 8.376-1.467c2.242.003 4.477.278 6.653.822 2.02.469 3.951 1.26 5.72 2.346l-2.597 6.247a20.288 20.288 0 0 0-4.932-2.068 18.343 18.343 0 0 0-4.888-.69 11.91 11.91 0 0 0-3.925.529 4.635 4.635 0 0 0-2.174 1.466 3.368 3.368 0 0 0-.686 2.039 2.806 2.806 0 0 0 1.123 2.316 8.317 8.317 0 0 0 2.919 1.35c1.216.322 2.573.645 4.071.967 1.459.338 2.918.734 4.377 1.203a19.692 19.692 0 0 1 4.013 1.818 8.776 8.776 0 0 1 2.991 2.933 8.83 8.83 0 0 1 1.138 4.634 9.899 9.899 0 0 1-1.649 5.528 11.54 11.54 0 0 1-5.019 4.033 20.223 20.223 0 0 1-8.419 1.54Z'

  return (
    <section ref={loaderRef} className="absolute inset-0 z-[999] w-full h-screen grid place-content-center gap-3.5 sm:gap-2 bg-foreground">
      <div className="relative w-72 xl:w-64 sm:w-52">
        <svg xmlns="http://www.w3.org/2000/svg" width="360" height="92" viewBox="0 0 360 92" className="w-full h-auto">
          <defs>
            <mask id="slideMask">
              <rect ref={maskRef} x="0" y="100%" width="100%" height="100%" fill="white" />
            </mask>
          </defs>

          <path d={svgPath} fill="#343434" />
          <path ref={pathRef} d={svgPath} fill="#FFFFFF" mask="url(#slideMask)" />
        </svg>
      </div>

      <Text type="h6" className="mx-auto sm:text-lg w-fit text-background" text={`${percent}%`} />
    </section>
  )
}
