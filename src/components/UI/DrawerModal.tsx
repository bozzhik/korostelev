import CrossIcon from '$/cross.svg'

import Image from 'next/image'
import {Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger} from '~/UI/Drawer'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

type ModalProps = {
  type: string
  heading: string
  description: string
  content: string[]
  children: React.ReactNode
}

export function Modal({type, heading, content, children}: ModalProps) {
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>

      <DrawerContent className="p-20 xl:p-10 py-14 flex flex-col mx-auto w-[62%] xl:w-[80%] text-background bg-red">
        <DrawerClose className="absolute top-6 right-8 group">
          <Image quality={100} className="s-12 xl:s-9 group-hover:rotate-[45deg] duration-200 ease-in" src={CrossIcon} alt="" />
        </DrawerClose>

        <DrawerHeader className="w-full space-y-10">
          <div className="space-y-3">
            <Text type="h6" className="font-semibold uppercase text-background-alt/65" text={type} />
            <Heading className="max-w-[30ch] text-[46px]" type="h2" text={heading} />
          </div>

          <div className="space-y-6 font-extralight">
            {content.map((paragraph, idx) => (
              <Text type="h5" className="font-extralight xl:text-lg xl:leading-[1.2]" text={paragraph} key={idx} /> // array
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
