import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import Button from '~/UI/Button'

type Socials = {
  label: string
  link: string
}

const socialsData: {[key: string]: Socials} = {
  ws: {
    label: 'WhatsApp',
    link: '#',
  },
  tg: {
    label: 'Telegram',
    link: '#',
  },
  ml: {
    label: 'Почта',
    link: '#',
  },
}

export default function Contacts() {
  return (
    <section id="contacts" data-section="contacts-index" className="relative z-20 grid grid-cols-2 gap-20 px-8 py-24 pb-20 bg-red text-background">
      <div className="space-y-32">
        <Heading type="h1" text="СВЯЖИТЕСЬ <br /> С НАМИ" />

        <div className="space-y-14">
          <Text type="h5" text={`Carolin Balas Pavisic <br /> Shanghaiallee 18 <br /> 20457 Hamburg, Germany`} />

          <div className="flex gap-3">
            {Object.keys(socialsData).map((key) => (
              <Button key={key} variant="tertiary" to={socialsData[key].link} text={socialsData[key].label} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <input className="block w-full" type="text" placeholder="Ваше имя" />
        <input className="block w-full" type="tel" placeholder="Номер телефона" />
        <input className="block w-full" type="email" placeholder="E-mail" />
        <textarea className="block w-full" placeholder="E-mail" rows={4} />
      </div>
    </section>
  )
}
