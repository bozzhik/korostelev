import CrossIcon from '$/cross.svg'

import Image from 'next/image'
import {Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger} from '~/UI/Drawer'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

type ModalProps = {
  type: string
  heading: string
  content: string[]
  children: React.ReactNode
}

export function Modal({type, heading, content, children}: ModalProps) {
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>

      <DrawerContent className="p-20 py-14 xl:p-10 sm:p-5 flex flex-col mx-auto w-[62%] xl:w-[80%] sm:w-[90%] text-background bg-red">
        <DrawerClose className="absolute top-6 right-8 sm:top-3.5 sm:right-4 group">
          <Image quality={100} className="s-12 xl:s-9 sm:s-6 group-hover:rotate-45 sm:rotate-45 duration-200 ease-in" src={CrossIcon} alt="" />
        </DrawerClose>

        <DrawerHeader className="w-full space-y-10 sm:space-y-5">
          <div className="space-y-3">
            <Text type="h6" className="font-semibold uppercase text-background-alt/65" text={type} />
            <Heading className="max-w-[30ch] text-[46px]" type="h2" text={heading} />
          </div>

          <div>
            <div id="drawer-scrollbar" className="space-y-6 max-h-[55vh] sm:max-h-[70vh] font-extralight overflow-x-hidden">
              {content.map((paragraph, idx) => (
                <Text type="h5" className="pr-4 sm:pr-2 font-extralight xl:text-lg xl:leading-[1.2]" text={paragraph} key={idx} /> // array
              ))}
            </div>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
