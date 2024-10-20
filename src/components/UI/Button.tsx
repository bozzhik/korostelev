import CrossIcon from '$/cross-dark.svg'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  text: string
  to: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export const buttonVariants = {
  base: 'block py-2.5 w-fit text-[21px] font-bold uppercase',
  primary: 'px-14 pt-3 border-[2px] border-background',
  secondary: 'flex group gap-4 items-center',
}

export default function Button({text, to, variant = 'primary', className}: Props) {
  return (
    <Link href={to} className={cn(buttonVariants.base, buttonVariants[variant], className)}>
      <span>{text}</span>
      {variant === 'secondary' && <Image className="s-7 group-hover:rotate-[45deg] duration-200 ease-in" src={CrossIcon} alt="" />}
    </Link>
  )
}
