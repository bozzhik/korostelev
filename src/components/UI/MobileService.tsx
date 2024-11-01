'use client'

import {useState} from 'react'
import {ChevronDown} from 'lucide-react'
import {TContentBlock} from '@/utils/getData'

import Text from '~/UI/Text'
import Button from '~/UI/Button'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {SplitText} from '~/UI/SplitText'

type Props = {
  index: number
  heading: string
  description: string
  content: TContentBlock[]
}

export default function MobileService({index, heading, description, content}: Props) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <div className="relative grid items-center grid-cols-1 gap-5 px-4 py-10 group">
      <SplitText duration={1} y={0}>
        <div className="grid rounded-full s-5 text-background bg-red place-items-center">
          <span className="hidden sm:block text-[13px]">{index + 1}</span>
        </div>
      </SplitText>

      <div className="space-y-7">
        <SplitText duration={0.5}>
          <div className="grid items-end justify-between grid-cols-5" onClick={toggleVisibility}>
            <Text type="h4" className="col-span-4" text={heading} />
            <ChevronDown className={`col-span-1 justify-self-end dur s-10 ${isVisible ? 'rotate-[180deg]' : ''}`} />
          </div>
        </SplitText>

        {isVisible && (
          <div className="space-y-5 SERVICES_SHOW">
            <Text type="h5" text={description} />
            <div className="w-full">
              <ModalTrigger tag={'Услуга'} heading={heading} content={content}>
                <Button variant="solid" className="w-[90vw] flex-row-reverse text-background bg-red" text="Посмотреть" />
              </ModalTrigger>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
