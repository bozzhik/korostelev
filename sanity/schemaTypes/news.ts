import {Rule, SchemaTypeDefinition} from 'sanity'

export const news: SchemaTypeDefinition = {
  name: 'news',
  title: 'Новости',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'tag',
      title: 'Тэг',
      description: 'Индустрия',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'date',
      title: 'Дата',
      description: 'Пример: 31 октября 2024 г.',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Контент',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule: Rule) => rule.required(),
    },
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
      name: 'link',
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
        title: title,
        media: image,
        subtitle: `${best ? '★' : ''} ${date}`,
      }
    },
  },
}
