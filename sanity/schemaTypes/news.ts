import {defineField, Rule, SchemaTypeDefinition} from 'sanity'
import {getLocaleVersion} from './index'

export const news: SchemaTypeDefinition = {
  name: 'news',
  title: 'Новости',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Тег',
      description: 'Индустрия',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    {
      name: 'date',
      title: 'Дата',
      description: 'В формате дд.мм.гг',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    defineField({
      name: 'content',
      title: 'Контент',
      type: 'internationalizedArrayExtraBlock',
      validation: (rule: Rule) => rule.required(),
    }),
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'source',
      title: 'Ссылка на источник',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'is_best',
      title: 'Лучшая новость',
      description:
        '(★) Отображать на главной странице. Дизайн предусматривает только 4 выбранные новости для главной.',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'image',
      date: 'date',
      best: 'is_best',
    },
    prepare(selection) {
      const {title, image, date, best} = selection
      return {
        title: getLocaleVersion(title),
        media: image,
        subtitle: `${best ? '★' : ''} ${date}`,
      }
    },
  },
}
