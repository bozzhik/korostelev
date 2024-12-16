import {cn} from '@/lib/utils'

type Props = {
  type: 'h4' | 'h5' | 'h6'
  text: string
  style?: React.CSSProperties
  className?: string
}

export const textClasses = {
  h4: 'text-4xl sm:text-2xl font-semibold uppercase',
  h5: 'text-[22px] xl:text-xl sm:text-[15px] font-light sm:font-normal leading-[1.2] xl:leading-[1.2]',
  h6: 'text-[18px] sm:text-sm',
}

export default function Text({type, text, style, className}: Props) {
  const Text = type
  return <Text className={cn(textClasses[type], 'leading-[1.1]', className)} style={style} dangerouslySetInnerHTML={{__html: text || ''}} />
}
