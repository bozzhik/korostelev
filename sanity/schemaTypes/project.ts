import {Rule, SchemaTypeDefinition} from 'sanity'

export const project: SchemaTypeDefinition = {
  name: 'project',
  title: 'Проекты',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Название',
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
      name: 'description',
      title: 'Короткое описание',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'client',
      title: 'Клиент',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Контент',
      description: 'Задача, описание, результат',
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
      name: 'is_best',
      title: 'Лучший проект',
      description:
        '(★) Отображать на главной странице. Дизайн предусматривает только 6 выбранных проектов для главной.',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'image',
      best: 'is_best',
    },
    prepare(selection) {
      const {title, image, date, best} = selection
      return {
        title: title,
        media: image,
        subtitle: `${best ? '★' : ''}`,
      }
    },
  },
}
