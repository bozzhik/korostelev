import Image from 'next/image'
import LogoImage from '$/logo.svg'
import CrossIcon from '$/cross.svg'

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
          <a href={`#${key}`} className="group pl-14 pr-7 py-2 flex items-center justify-center gap-3 text-xl text-background bg-red border-[2px] border-background/70" key={key}>
            {value}
            <Image className="s-fit group-hover:rotate-[45deg] duration-200 ease-in" src={CrossIcon} alt="" />
          </a>
        ))}
      </nav>
    </header>
  )
}
