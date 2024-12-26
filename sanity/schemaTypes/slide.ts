import {defineField, Rule, SchemaTypeDefinition} from 'sanity'
import {getLocaleVersion} from './index'

export const slide: SchemaTypeDefinition = {
  name: 'slide',
  title: 'Слайдер',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Заголовок',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'internationalizedArrayExtraText',
      validation: (rule: Rule) => rule.required(),
    }),
    {
      name: 'id',
      title: 'ID',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      description: 'description',
      id: 'id',
    },
    prepare(selection) {
      const {title, description, id} = selection

      return {
        title: getLocaleVersion(title),
        subtitle: `${id}. ${getLocaleVersion(description).toLowerCase()}`,
      }
    },
  },
}
