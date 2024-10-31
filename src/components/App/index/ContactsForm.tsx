import {isMobile} from '@bozzhik/is-mobile'

import Input from '~/UI/Input'
import Button from '~/UI/Button'

export default function ContactsForm() {
  return (
    <form className="flex flex-col justify-between">
      <div className="flex flex-col h-full gap-7 sm:gap-5">
        <Input content="text" placeholder="Ваше имя" />
        <Input content="tel" placeholder="Номер телефона" />
        <Input content="email" placeholder="Электронная почта" />
        <div className="flex flex-col justify-between h-full">
          <Input type="textarea" className="h-full" placeholder="Чем я могу помочь?" rows={!isMobile ? 2 : 4} />
          <Button variant="solid" mode="dark" className="w-full" text="Отправить форму" />
        </div>
      </div>
    </form>
  )
}
