import {defineField, Rule, SchemaTypeDefinition} from 'sanity'
import {getLocaleVersion} from './index'

export const service: SchemaTypeDefinition = {
  name: 'service',
  title: 'Услуги',
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
      name: 'description',
      title: 'Короткое описание',
      type: 'internationalizedArrayExtraText',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Полное описание',
      type: 'internationalizedArrayExtraBlock',
      validation: (rule: Rule) => rule.required(),
    }),
    {
      name: 'is_best',
      title: 'Лучшая услуга',
      description: '(★) Отображать на главной странице',
      type: 'boolean',
    },
  ],
  preview: {
    select: {
      id: 'id',
      title: 'heading',
      description: 'description',
      best: 'is_best',
    },
    prepare(selection) {
      const {id, title, description, best} = selection

      return {
        title: `${id}. ${getLocaleVersion(title)}`,
        subtitle: `${best ? '★' : ''} ${getLocaleVersion(description)}`,
      }
    },
  },
}
