import BackgroundImage from '$/quote-bg.jpg'
import SignatureImage from '$/signature.png'

import Image from 'next/image'
import Text from '~/UI/Text'

export default function Quote() {
  return (
    <section id="quote" data-section="quote-index" className="relative z-20 flex flex-col items-end gap-10 p-20 pt-32 sm:gap-20 sm:pt-20 sm:px-4">
      <div className="grid grid-cols-2 gap-20 sm:gap-7 sm:grid-cols-1">
        <Text type="h5" className="leading-normal sm:leading-[1.2] sm:tracking-[-0.015em]" text="После многих лет работы в крупных юридических компаниях я понял одно: главное — это доверие и партнерство. Для нас каждый клиент — это не просто дело, а настоящая история, в которой мы готовы участвовать. в которой мы готовы участвовать. В которой мы готовы участвовать." />
        <Text type="h5" className="leading-normal sm:leading-[1.2] sm:tracking-[-0.015em]" text="Давайте делать этот путь вместе. Я уверен, что совместными усилиями мы сможем справиться с любыми вызовами и добиться отличных результатов! Давайте делать этот путь вместе. Я уверен, что совместными усилиями." />
      </div>

      <div className="flex items-end gap-10 sm:justify-between sm:w-full pr-14 sm:pr-0">
        <Text type="h5" className="leading-normal sm:leading-[1.35]" text={`<span class='underline'>Максим Коростелев</span> <br /> Управляющий партнер`} />
        <Image quality={100} className="object-contain w-52 sm:w-28 sm:scale-[1.1]" src={SignatureImage} alt="" />
      </div>

      <Image quality={100} className="absolute inset-0 object-cover w-full h-full -z-10" src={BackgroundImage} alt="" />
    </section>
  )
}
