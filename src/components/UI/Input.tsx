import {cn} from '@/lib/utils'

type Props = {
  type?: 'input' | 'textarea'
  placeholder: string
  content?: string
  rows?: number
  className?: string
}

const inputStyles = {
  base: 'flex w-full text-[21px] text-background placeholder:text-background',
  view: 'bg-transparent border-b-[2px] border-background/50',
  hover: '!outline-none duration-200 hover:border-background focus-visible:border-background',
}

export default function Input({type = 'input', placeholder, content, rows, className}: Props) {
  const Field = type
  return (
    <div className="foc grid w-full px-12 py-8 place-items-center border-[2px] border-background">
      <Field type={content} placeholder={placeholder} rows={rows} className={cn([inputStyles.base, inputStyles.view, inputStyles.hover], className)} />
    </div>
  )
}
