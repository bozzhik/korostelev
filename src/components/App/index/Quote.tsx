import BackgroundImage from '$/quote-bg.jpg'
import SignatureImage from '$/signature.png'

import Image from 'next/image'
import Text from '~/UI/Text'

export default function Quote() {
  return (
    <section id="quote" data-section="quote-index" className="relative z-20 flex flex-col items-end gap-10 p-20 pt-32">
      <div className="grid grid-cols-2 gap-20">
        <Text type="h5" className="leading-normal" text="После многих лет работы в крупных юридических компаниях я понял одно: главное — это доверие и партнерство. Для нас каждый клиент — это не просто дело, а настоящая история, в которой мы готовы участвовать. в которой мы готовы участвовать. В которой мы готовы участвовать." />
        <Text type="h5" className="leading-normal" text="Давайте делать этот путь вместе. Я уверен, что совместными усилиями мы сможем справиться с любыми вызовами и добиться отличных результатов! Давайте делать этот путь вместе. Я уверен, что совместными усилиями." />
      </div>

      <div className="flex items-end gap-10 pr-14">
        <Text type="h5" className="leading-normal" text={`<span class='underline'>Максим Коростелев</span> <br /> управляющий партнер`} />
        <Image quality={100} className="object-contain w-52" src={SignatureImage} alt="" />
      </div>

      <Image quality={100} className="absolute inset-0 object-cover w-full h-full -z-10" src={BackgroundImage} alt="" />
    </section>
  )
}
