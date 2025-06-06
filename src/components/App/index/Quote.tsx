import BackgroundImage from '$/quote-bg.jpg'
import SignatureImage from '$/signature.png'

import {useTranslations} from 'next-intl'

import Image from 'next/image'
import Text from '~/UI/Text'

export default function Quote() {
  const t = useTranslations('Quote')
  const quoteTexts = [t('text.0'), t('text.1')]

  return (
    <section id="quote" data-section="quote-index" className="relative z-20 flex flex-col items-end gap-10 p-20 pt-32 sm:gap-10 sm:pt-20 sm:px-4">
      <div className="grid grid-cols-2 gap-20 sm:gap-7 sm:grid-cols-1">
        {quoteTexts.map((text, index) => (
          <Text key={index} type="h5" className="leading-normal xl:leading-[1.3] sm:leading-[1.2] tracking-[-0.015em] sm:tracking-normal" text={text} />
        ))}
      </div>

      <div className="flex items-end gap-10 sm:justify-between sm:w-full pr-14 sm:pr-6">
        <Text type="h5" className="leading-tight sm:leading-[1.35] sm:mb-12" text={t.raw('author')} />
        <Image quality={100} className="object-contain w-28 sm:w-20 sm:mr-2" src={SignatureImage} alt="" />
      </div>

      <Image quality={100} className="absolute inset-0 object-cover w-full h-full -z-10" src={BackgroundImage} alt="" />
    </section>
  )
}
