import CrossIcon from '$/cross.svg'
import CrossDarkIcon from '$/cross-dark.svg'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  text: string
  to: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  mode?: 'light' | 'dark'
  className?: string
}

export const buttonVariants = {
  base: 'block py-2.5 w-fit text-[21px] font-bold uppercase',
  primary: 'px-14 pt-3 border-[2px] border-background',
  secondary: 'flex group gap-4 items-center',
  tertiary: 'flex group gap-4 items-center px-8 pt-3 font-normal normal-case border-[2px] border-background/70',
}

export default function Button({text, to, variant = 'primary', mode = 'dark', className}: Props) {
  return (
    <Link href={to} className={cn(buttonVariants.base, buttonVariants[variant], className)}>
      {variant === 'tertiary' && <Image className="s-4 group-hover:rotate-[45deg] duration-200 ease-in" src={CrossIcon} alt="" />}
      <span>{text}</span>
      {variant === 'secondary' && <Image className="s-7 group-hover:rotate-[45deg] duration-200 ease-in" src={mode === 'light' ? CrossIcon : CrossDarkIcon} alt="" />}
    </Link>
  )
}
