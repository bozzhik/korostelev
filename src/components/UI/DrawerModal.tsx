import CrossIcon from '$/cross.svg'
import Image from 'next/image'

import {TContentBlock} from '@/utils/getData'
import {Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger} from '~/UI/Drawer'
import Heading from '~/UI/Heading'
import Button from '~/UI/Button'
import Text from '~/UI/Text'
import PortableBlock from '~/UI/PortableBlock'

type ModalProps = {
  type?: 'news' | 'project' | 'services' | 'team'
  tag: string
  heading: string

  content: TContentBlock[]
  achievements?: TContentBlock[]

  image?: string
  source?: string
  children: React.ReactNode
}

export function Modal({type, tag, heading, content, children, image, source}: ModalProps) {
  const isTeam = type === 'team'
  const isProject = type === 'project'

  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>

      <DrawerContent className={`p-20 py-14 xl:p-10 sm:p-5 flex flex-col mx-auto w-[62%] ${isTeam ? 'xl:w-[60%]' : 'xl:w-[80%]'} sm:w-[93%] text-background bg-red`}>
        <DrawerClose className="absolute top-6 right-8 sm:top-3.5 sm:right-4 group">
          <Image quality={100} className="duration-200 ease-in s-12 xl:s-9 sm:s-6 group-hover:rotate-45 sm:rotate-45" src={CrossIcon} alt="" />
        </DrawerClose>

        <DrawerHeader className={`${isTeam || isProject ? 'space-y-36 max-h-[80vh] sm:max-h-[90vh]' : 'space-y-10 max-h-[90vh]'} ${isProject && 'xl:space-y-16'} w-full sm:space-y-5`}>
          <div className="space-y-3 max-w-[60%] sm:max-w-none">
            <Text type="h6" className="sm:max-w-[25ch] font-semibold uppercase text-background-alt/65" text={tag} />
            <Heading className={`${isTeam ? 'text-[65px]' : 'text-[46px]'} max-w-[30ch]`} type="h2" text={heading} />

            <div className={`${isTeam ? 'w-[30%] xl:w-[35%]' : 'w-[35%]'} sm:hidden !m-0 absolute top-0 right-0 -z-20 flex flex-col`}>
              {image && <Image quality={100} className="object-cover max-h-[27vh]" width={500} height={500} src={image} alt="" />} {/* main image */}
            </div>
          </div>

          <div>
            <div id="drawer-scrollbar" className={`${isTeam || isProject ? 'max-h-[45vh]' : 'max-h-[55vh]'} sm:max-h-[60vh] space-y-6 pr-4 sm:pr-2 font-extralight overflow-x-hidden`}>
              <PortableBlock value={content} />

              {source && <Button to={source} target="blank" className="flex-row-reverse py-2.5 sm:px-0 sm:text-base w-full" text="Перейти в источник" />}
            </div>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
