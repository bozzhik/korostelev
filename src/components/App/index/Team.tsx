import {getMembers, TMember} from '@/utils/getData'
import Image from 'next/image'

import Heading from '~/UI/Heading'
import Text from '~/UI/Text'
import {SplitText} from '~/UI/SplitText'
import {Modal as ModalTrigger} from '~/UI/DrawerModal'
import {urlForImage} from '@/lib/sanity'

export default async function Team() {
  const teamData: TMember[] = await getMembers()

  return (
    <section id="team" data-section="team-index" className="relative z-20 p-8 pt-32 space-y-8 sm:p-4 xl:pt-20 sm:pt-12 bg-foreground">
      <SplitText>
        <Heading type="h1" className="uppercase text-background" text="Команда" />
      </SplitText>

      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
        {Object.entries(teamData).map(([key, {position, name, surname, specialization, image, description, achievements}]) => (
          <ModalTrigger key={key} type="team" tag={position} heading={`${name} ${surname}`} content={description} achievements={achievements} image={urlForImage(image)}>
            <div className="flex flex-col justify-between text-left bg-background hover:bg-red sm:hover:bg-background duration-200 group">
              <div className="w-full">
                <Image quality={100} width={1000} height={1000} className="object-cover s-full" src={urlForImage(image)} alt={`${name} - ${position}`} />
              </div>

              <div className="space-y-3 sm:space-y-1.5 p-5 xl:p-4 sm:p-3 group-hover:text-background sm:group-hover:text-foreground duration-200">
                <div className="space-y-1.5 sm:space-y-0">
                  <Text type="h5" text={position} />
                  <Text type="h4" className="uppercase leading-none" text={`${name} ${surname}`} />
                </div>

                <Text type="h6" className="text-foreground/65 group-hover:text-background/65 sm:group-hover:text-foreground/65 line-clamp-1" text={specialization} />
              </div>
            </div>
          </ModalTrigger>
        ))}
      </div>
    </section>
  )
}
