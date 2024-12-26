import type {Locale} from '@/i18n/routing'
import {getMembers} from '@/utils/getData'

import {getTranslations} from 'next-intl/server'

import Heading from '~/UI/Heading'
import {SplitText} from '~/UI/SplitText'
import TeamModule from '~~/index/TeamModule'

export default async function Team({locale}: {locale: Locale}) {
  const teamData = await getMembers()
  const t = await getTranslations('Blocks')

  if (!teamData) {
    console.error('Error fetching team data')
    return null
  }

  return (
    <section id="team" data-section="team-index" className="relative z-20 p-8 pt-32 space-y-8 sm:p-4 xl:pt-20 sm:pt-12 bg-foreground">
      <SplitText>
        <Heading type="h1" className="uppercase text-background" text={t('team')} />
      </SplitText>

      <TeamModule data={teamData} locale={locale} />
    </section>
  )
}
