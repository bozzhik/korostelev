import {Rule, SchemaTypeDefinition} from 'sanity'

export const service: SchemaTypeDefinition = {
  name: 'service',
  title: 'Услуги',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Название',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'id',
      title: 'ID',
      type: 'number',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Короткое описание',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'content',
      title: 'Контент',
      description: 'Полное описание',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule: Rule) => rule.required(),
    },
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
      best: 'is_best',
    },
    prepare(selection) {
      const {id, title, best} = selection
      return {
        title: `${id}. ${title}`,
        subtitle: `${best ? '★' : ''}`,
      }
    },
  },
}
