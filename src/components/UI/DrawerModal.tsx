import {Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger as BaseDrawerTrigger} from '~/UI/Drawer'
import Text from '~/UI/Text'

type ModalProps = {
  heading: string
  description: string
  content: string[]
  children: React.ReactNode
}

export function Modal({heading, content, children}: ModalProps) {
  return (
    <Drawer>
      <BaseDrawerTrigger>{children}</BaseDrawerTrigger>

      <DrawerContent>
        <DrawerClose>
          <button>Close</button>
        </DrawerClose>
        <DrawerHeader>
          <Text type="h4" text={heading} />
          <div className="space-y-2 font-extralight">
            {content.map((paragraph, idx) => (
              <Text type="h5" text={paragraph} key={idx} />
            ))}
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
