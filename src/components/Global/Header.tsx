import LogoImage from '$/logo.svg'

import Image from 'next/image'
import Button from '~/UI/Button'

export default function Header() {
  const headerData = {
    services: 'Услуги',
    projects: 'Проекты',
    news: 'Новости',
    contacts: 'Контакты',
  }

  return (
    <header className="fixed z-50 grid grid-cols-2">
      <div className="px-5 py-4 bg-red w-fit">
        <Image src={LogoImage} alt="" />
      </div>

      <nav className="flex items-center justify-around gap-10 px-10 bg-red">
        {Object.entries(headerData).map(([key, value]) => (
          <Button to={`#${key}`} className="flex-row-reverse py-2 pl-14 pr-7 text-background" text={value} key={key} />
        ))}
      </nav>
    </header>
  )
}
