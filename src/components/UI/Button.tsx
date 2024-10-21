import CrossIcon from '$/cross.svg'
import CrossDarkIcon from '$/cross-dark.svg'

import {cn} from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  variant?: 'outline' | 'solid'
  mode?: 'light' | 'dark'
  icon?: boolean
  to?: string
  text: string
  className?: string
}

export const buttonVariants = {
  base: 'group py-2.5 w-fit flex items-center justify-center gap-4 text-[21px]',
  outline: 'px-8 pt-3 border-[2px] border-background/70',
  solid: 'text-foreground bg-background tracking-tight',
}

export default function Button({variant = 'outline', mode = 'light', icon = true, to = '#', text, className}: Props) {
  return (
    <Link href={to} className={cn(buttonVariants.base, buttonVariants[variant], className)}>
      {icon && <Image className={cn('s-4 group-hover:rotate-[45deg] duration-200 ease-in')} src={mode === 'light' ? CrossIcon : CrossDarkIcon} alt="" />}
      <span>{text}</span>
    </Link>
  )
}

export function ExpandButton({mode = 'dark', to = '#', text}: Props) {
  return (
    <Link href={to} className={cn(buttonVariants.base, 'flex-row-reverse font-bold uppercase')}>
      <Image className={cn('s-7 group-hover:rotate-[45deg] duration-200 ease-in')} src={mode === 'dark' ? CrossIcon : CrossDarkIcon} alt="" />
      <span>{text}</span>
    </Link>
  )
}
