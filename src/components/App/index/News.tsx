import type {Locale} from '@/i18n/routing'
import {getNews, TNews} from '@/utils/getData'

import {getTranslations} from 'next-intl/server'

import Heading from '~/UI/Heading'
import Button, {ExpandButton} from '~/UI/Button'
import NewsBody from '~~/index/NewsBody'
import {SplitText} from '~/UI/SplitText'

export default async function News({where = 'index', locale}: {where: 'index' | 'news'; locale: Locale}) {
  const newsData: TNews[] = await getNews()

  const t = await getTranslations('Blocks')
  const isIndex = where === 'index'

  if (!newsData) {
    console.error('Error fetching news data')
    return null
  }

  const sortedNews = newsData
    .filter((news) => (isIndex ? news.is_best : true))
    .sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-'))
      const dateB = new Date(b.date.split('.').reverse().join('-'))
      return dateB.getTime() - dateA.getTime()
    })

  return (
    <section id={isIndex ? 'news' : ''} data-section="news-index" className="relative z-20 pt-32 space-y-8 xl:pt-24 sm:pt-12 sm:space-y-6 bg-background sm:bg-red sm:text-background">
      <div className="flex items-end justify-between px-8 sm:px-4">
        <SplitText>
          <Heading type="h1" className="uppercase" text={isIndex ? t('news.0') : t('news.1')} />
        </SplitText>

        {isIndex && (
          <SplitText>
            <ExpandButton to="/news" mode="light" className="sm:hidden" />
            <Button to="/news" variant="solid" mode="dark" className="hidden sm:flex px-2 py-1 flex-row-reverse gap-2.5" text="БОЛЬШЕ" />
          </SplitText>
        )}
      </div>

      <NewsBody isIndex={isIndex} newsData={sortedNews} locale={locale} />
    </section>
  )
}
