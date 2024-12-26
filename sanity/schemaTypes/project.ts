import {defineField, Rule, SchemaTypeDefinition} from 'sanity'
import {getLocaleVersion} from './index'

export const project: SchemaTypeDefinition = {
  name: 'project',
  title: 'Проекты',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Название',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      validation: (rule: Rule) => rule.required(),
    },
    defineField({
      name: 'tag',
      title: 'Тэг',
      description: 'Индустрия',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Короткое описание',
      type: 'internationalizedArrayExtraText',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Клиент',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Контент',
      description: 'Задача, описание, результат',
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
      name: 'is_best',
      title: 'Лучший проект',
      description:
        '(★) Отображать на главной странице. Дизайн предусматривает только 6 выбранных проектов для главной.',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      id: 'id',
      title: 'heading',
      description: 'description',
      image: 'image',
      best: 'is_best',
    },
    prepare(selection) {
      const {id, title, description, image, best} = selection

      return {
        title: `${id}. ${getLocaleVersion(title)}`,
        subtitle: `${best ? '★' : ''} ${getLocaleVersion(description)}`,
        media: image,
      }
    },
  },
}
