import {cn} from '@/lib/utils'

interface Props {
  type: 'h1' | 'h2'
  text: string
  className?: string
}

export const headingClasses = {
  h1: 'text-[145px] leading-[1.1] font-extralight tracking-tight',
  h2: 'text-6xl font-medium uppercase !leading-[1.2] tracking-tighter',
}

export default function Heading({type, text, className}: Props) {
  const Heading = type

  return <Heading className={cn(headingClasses[type], className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
