import {getNews, TNews} from '@/utils/getData'
import {SplitText} from '~/UI/SplitText'

import Heading from '~/UI/Heading'
import Button, {ExpandButton} from '~/UI/Button'
import NewsBody from '~~/index/NewsBody'

export default async function News({where = 'index'}: {where: 'index' | 'news'}) {
  const newsData: TNews[] = await getNews()
  const isIndex = where === 'index'

  if (!newsData) {
    return console.log('Error fetching news data')
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
          <Heading type="h1" className="uppercase" text={isIndex ? 'Новости' : 'Все новости'} />
        </SplitText>

        {isIndex && (
          <SplitText>
            <ExpandButton to="/news" mode="light" className="sm:hidden" text="Посмотреть все" />
            <Button to="/news" variant="solid" mode="dark" className="hidden sm:flex px-2 py-1 flex-row-reverse gap-2.5" text="БОЛЬШЕ" />
          </SplitText>
        )}
      </div>

      <NewsBody newsData={sortedNews} />
    </section>
  )
}
