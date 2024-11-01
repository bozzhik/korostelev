import {cn} from '@/lib/utils'
import {PortableText} from '@portabletext/react'

import {TContentBlock} from '@/utils/getData'
import {textClasses} from '~/UI/Text'

type Props = {
  value: TContentBlock[]
  className?: string
}

const PortableBlock: React.FC<Props> = ({value, className}) => {
  return (
    <div className={cn(textClasses.h5, 'font-extralight space-y-5', className)}>
      <PortableText
        value={value}
        components={{
          marks: {
            link: ({value, children}) => {
              return (
                <a href={value.href} target="_blank" className="text-[#cccccc] underline underline-offset-4 hover:no-underline" rel="noopener">
                  {children}
                </a>
              )
            },
          },
        }}
      />
    </div>
  )
}

export default PortableBlock
