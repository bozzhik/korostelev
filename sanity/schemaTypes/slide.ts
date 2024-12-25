import {defineField, Rule, SchemaTypeDefinition} from 'sanity'

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

      const getLocaleVersion = (field: unknown, locale = 'ru') =>
        Array.isArray(field)
          ? field.find((item) => item._key === locale)?.value || field[0]?.value
          : field

      return {
        title: getLocaleVersion(title),
        subtitle: `${id}. ${getLocaleVersion(description).toLowerCase()}`,
      }
    },
  },
}
