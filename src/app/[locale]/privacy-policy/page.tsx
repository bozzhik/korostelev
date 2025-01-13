import {cn} from '@/lib/utils'
import {getTranslations} from 'next-intl/server'

import Link from 'next/link'

export default async function PrivacyPolicyPage() {
  const t = await getTranslations('PrivacyPolicy')

  return (
    <main className="py-32 xl:py-28 sm:py-24">
      <section className={cn('max-w-[80ch] sm:mx-4 mx-auto prose text-background', 'prose-a:text-red hover:prose-a:no-underline', 'prose-h1:text-red prose-h2:text-red')}>
        <h1 className="sm:text-2xl">{t('title')}</h1>
        <p>
          {t.rich('intro', {
            a: (chunks) => <Link href="https://korostelev.legal">{chunks}</Link>,
            span: (chunks) => <span className="text-red">{chunks}</span>,
          })}
        </p>

        <h2>{t('general.title')}</h2>
        <p>{t('general.text')}</p>

        <h2>{t('data.title')}</h2>
        <p>{t('data.text')}</p>
        <p>{t('data.text2')}</p>
        <p>{t('data.text3')}</p>
        <p>{t('data.text4')}</p>

        <h2>{t('processing.title')}</h2>
        <p>{t('processing.text')}</p>

        <h2>{t('protection.title')}</h2>
        <p>{t('protection.text')}</p>

        <h2>{t('changes.title')}</h2>
        <p>{t('changes.text')}</p>

        <h2>{t('law.title')}</h2>
        <p>{t('law.text')}</p>

        <h2>{t('feedback.title')}</h2>
        <p>
          {t.rich('feedback.text', {
            a: (chunks) => <Link href="mailto:maxim.korostelev@korostelev.legal">{chunks}</Link>,
          })}
        </p>
      </section>
    </main>
  )
}
