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
  target?: 'blank' | 'self'
  text: string
  className?: string
  onClick?: () => void
}

export const buttonVariants = {
  base: 'group py-2.5 w-fit flex items-center justify-center gap-4 text-[21px] xl:text-lg',
  outline: 'px-8 pt-3 sm:py-2 sm:uppercase border-[2px] border-background/70',
  solid: 'text-foreground bg-background',
}

export default function Button({variant = 'outline', mode = 'light', icon = true, to, target = 'self', text, className, onClick}: Props) {
  const buttonClasses = cn(buttonVariants.base, buttonVariants[variant], className)

  if (to) {
    return (
      <Link href={to} target={target} className={buttonClasses} onClick={onClick}>
        {icon && <Image quality={100} className={cn('s-4 xl:s-3 group-hover:rotate-[45deg] sm:group-hover:rotate-0 duration-200 ease-in')} src={mode === 'light' ? CrossIcon : CrossDarkIcon} alt="" />}
        <span>{text}</span>
      </Link>
    )
  }

  return (
    <div className={`cursor-pointer ${buttonClasses}`} onClick={onClick}>
      {icon && <Image quality={100} className={cn('s-4 xl:s-3 group-hover:rotate-[45deg] sm:group-hover:rotate-0 duration-200 ease-in')} src={mode === 'light' ? CrossIcon : CrossDarkIcon} alt="" />}
      <span>{text}</span>
    </div>
  )
}

export function ExpandButton({mode = 'dark', to = '#', text, className}: Props) {
  return (
    <Link href={to} className={cn(buttonVariants.base, 'flex-row-reverse font-bold uppercase', className)}>
      <Image quality={100} className="s-7 group-hover:rotate-[45deg] duration-200 ease-in" src={mode === 'dark' ? CrossIcon : CrossDarkIcon} alt="" />
      <span className="mt-1 leading-none">{text}</span>
    </Link>
  )
}
