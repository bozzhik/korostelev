import CrossIcon from '$/cross.svg'

import Image, {StaticImageData} from 'next/image'
import {Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger} from '~/UI/Drawer'
import Heading from '~/UI/Heading'
import Text from '~/UI/Text'

type ProjectContent = {
  task: string
  result: string
  description: string
}

type Content = string[] | ProjectContent

type ModalProps = {
  tag: string
  heading: string
  content: Content
  children: React.ReactNode
  image?: StaticImageData
}

export function Modal({tag, heading, content, children}: ModalProps) {
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>

      <DrawerContent className="p-20 py-14 xl:p-10 sm:p-5 flex flex-col mx-auto w-[62%] xl:w-[80%] sm:w-[93%] text-background bg-red">
        <DrawerClose className="absolute top-6 right-8 sm:top-3.5 sm:right-4 group">
          <Image quality={100} className="duration-200 ease-in s-12 xl:s-9 sm:s-6 group-hover:rotate-45 sm:rotate-45" src={CrossIcon} alt="" />
        </DrawerClose>

        <DrawerHeader className="w-full space-y-10 sm:space-y-5">
          <div className="space-y-3">
            <Text type="h6" className="sm:max-w-[15ch] font-semibold uppercase text-background-alt/65" text={tag} />
            <Heading className="max-w-[30ch] text-[46px]" type="h2" text={heading} />
            {/* {image && <Image quality={100} className="-z-20 w-[35%] object-cover absolute top-0 right-0 !m-0" src={image} alt="" />} */}
          </div>

          <div>
            <div id="drawer-scrollbar" className="space-y-6 max-h-[55vh] sm:max-h-[55vh] font-extralight overflow-x-hidden">
              {Array.isArray(content) ? (
                content.map((paragraph, idx) => <Text type="h5" className="pr-4 sm:pr-2 font-extralight xl:text-lg xl:leading-[1.2]" text={paragraph} key={idx} />)
              ) : (
                <div className="pr-4 space-y-6 sm:pr-2">
                  <div className="space-y-2">
                    <Text type="h5" className="underline sm:font-medium " text="Задача" />
                    <Text type="h5" className="font-extralight xl:text-lg xl:leading-[1.2]" text={content.task} />
                  </div>
                  <div className="space-y-2">
                    <Text type="h5" className="underline sm:font-medium " text="Результат" />
                    <Text type="h5" className="font-extralight xl:text-lg xl:leading-[1.2]" text={content.result} />
                  </div>
                  <div className="space-y-2">
                    <Text type="h5" className="underline sm:font-medium " text="Описание" />
                    <Text type="h5" className="font-extralight xl:text-lg xl:leading-[1.2]" text={content.description} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
