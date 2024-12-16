import {getMembers} from '@/utils/getData'

import Heading from '~/UI/Heading'
import {SplitText} from '~/UI/SplitText'
import TeamModule from '~~/index/TeamModule'

export default async function Team() {
  const teamData = await getMembers()

  return (
    <section id="team" data-section="team-index" className="relative z-20 p-8 pt-32 space-y-8 sm:p-4 xl:pt-20 sm:pt-12 bg-foreground">
      <SplitText>
        <Heading type="h1" className="uppercase text-background" text="Команда" />
      </SplitText>

      <TeamModule data={teamData} />
    </section>
  )
}
