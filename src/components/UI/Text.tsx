import {cn} from '@/lib/utils'

type Props = {
  type: 'h4' | 'h5'
  text: string
  className?: string
}

export const textClasses = {
  h4: 'text-4xl leading-[1.1] font-semibold uppercase',
  h5: 'text-[22px] font-light leading-[1.2]',
}

export default function Text({type, text, className}: Props) {
  const Text = type
  return <Text className={cn(textClasses[type], 'leading-[1.1]', className)} dangerouslySetInnerHTML={{__html: text || ''}} />
}
