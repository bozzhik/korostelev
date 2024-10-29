import CrossIcon from '$/cross.svg'

import Image, {StaticImageData} from 'next/image'
import {Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger} from '~/UI/Drawer'
import Heading from '~/UI/Heading'
import Button from '~/UI/Button'
import Text from '~/UI/Text'

type ProjectContent = {
  task?: string
  result?: string
  description?: string | string[]
}

type TeamContent = {
  description: string | string[]
  achievements?: Record<number, string>
}

type Content = string[] | ProjectContent | TeamContent

type ModalProps = {
  type?: 'news' | 'project' | 'services' | 'team'
  tag: string
  heading: string
  content: Content
  children: React.ReactNode
  image?: StaticImageData
  source?: string
}

export function Modal({type, tag, heading, content, children, image, source}: ModalProps) {
  const isTeam = type === 'team'
  return (
    <Drawer>
      <DrawerTrigger>{children}</DrawerTrigger>

      <DrawerContent className={`p-20 py-14 xl:p-10 sm:p-5 flex flex-col mx-auto w-[62%] ${isTeam ? 'xl:w-[60%]' : 'xl:w-[80%]'} sm:w-[93%] text-background bg-red`}>
        <DrawerClose className="absolute top-6 right-8 sm:top-3.5 sm:right-4 group">
          <Image quality={100} className="duration-200 ease-in s-12 xl:s-9 sm:s-6 group-hover:rotate-45 sm:rotate-45" src={CrossIcon} alt="" />
        </DrawerClose>

        <DrawerHeader className={`${isTeam ? 'space-y-36 max-h-[80vh] sm:max-h-[90vh]' : 'space-y-10 max-h-[90vh]'} w-full sm:space-y-5 `}>
          <div className="space-y-3 max-w-[60%] sm:max-w-none">
            <Text type="h6" className="sm:max-w-[25ch] font-semibold uppercase text-background-alt/65" text={tag} />
            <Heading className={`${isTeam ? 'text-[65px]' : 'text-[46px]'} max-w-[30ch]`} type="h2" text={heading} />

            <div className={`${isTeam ? 'w-[30%] xl:w-[35%]' : 'w-[35%]'} sm:hidden !m-0 absolute top-0 right-0 -z-20 flex flex-col`}>{image && <Image quality={100} className="object-cover" src={image} alt="" />}</div>
          </div>

          <div>
            <div id="drawer-scrollbar" className={`${isTeam ? 'max-h-[45vh]' : 'max-h-[55vh]'} sm:max-h-[60vh] space-y-6 pr-4 sm:pr-2 font-extralight overflow-x-hidden`}>
              {Array.isArray(content) ? (
                content.map((paragraph, idx) => <Text type="h5" className="pr-4 sm:pr-2 font-extralight xl:text-lg xl:leading-[1.2]" text={paragraph} key={idx} />)
              ) : (
                <div className="space-y-6">
                  {'task' in content && content.task && (
                    <div className="space-y-2">
                      <Text type="h5" className="underline sm:font-medium" text="Задача" />
                      <Text type="h5" className="font-extralight xl:text-lg xl:leading-[1.2]" text={content.task} />
                    </div>
                  )}
                  {'description' in content && content.description && (
                    <div className="space-y-2">
                      <Text type="h5" className="underline sm:font-medium" text="Описание" />
                      {Array.isArray(content.description) ? content.description.map((desc, idx) => <Text type="h5" className="font-extralight xl:text-lg xl:leading-[1.2]" text={desc} key={idx} />) : <Text type="h5" className="font-extralight xl:text-lg xl:leading-[1.2]" text={content.description} />}
                    </div>
                  )}
                  {'result' in content && content.result && (
                    <div className="space-y-2">
                      <Text type="h5" className="underline sm:font-medium" text="Результат" />
                      <Text type="h5" className="font-extralight xl:text-lg xl:leading-[1.2]" text={content.result} />
                    </div>
                  )}
                  {'achievements' in content && content.achievements && (
                    <div className="space-y-2">
                      <Text type="h5" className="underline sm:font-medium" text="Достижения" />

                      {Object.values(content.achievements).map((achievement, idx) => (
                        <Text type="h5" className="font-extralight xl:text-lg xl:leading-[1.2]" text={achievement} key={idx} />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {source && <Button to={source} className="flex-row-reverse py-2.5 sm:px-0 sm:text-base w-full" text="Перейти в источник" />}
            </div>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
