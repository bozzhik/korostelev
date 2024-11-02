import {getNews, TNews} from '@/utils/getData'

import Heading from '~/UI/Heading'
import {SplitText} from '~/UI/SplitText'
import NewsBody from '~~/index/NewsBody'

export default async function News({where = 'index'}: {where: 'index' | 'projects'}) {
  const newsData: TNews[] = await getNews()

  if (!newsData) {
    return console.log('Error fetching news data')
  }

  const isIndex = where === 'index'

  const sortedNews = newsData
    .filter((news) => (isIndex ? news.is_best : true))
    .sort((a, b) => {
      const dateA = new Date(a.date.split('.').reverse().join('-'))
      const dateB = new Date(b.date.split('.').reverse().join('-'))
      return dateB.getTime() - dateA.getTime()
    })

  return (
    <section id="news" data-section="news-index" className="relative z-20 pt-32 space-y-8 xl:pt-24 sm:pt-12 sm:space-y-6 bg-background sm:bg-red sm:text-background">
      <div className="flex items-end justify-between px-8 sm:px-4">
        <SplitText>
          <Heading type="h1" className="uppercase" text="Новости" />
        </SplitText>
      </div>

      <NewsBody newsData={sortedNews} />
    </section>
  )
}
