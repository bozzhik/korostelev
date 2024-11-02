import {Rule, SchemaTypeDefinition} from 'sanity'

export const slide: SchemaTypeDefinition = {
  name: 'slide',
  title: 'Слайдер',
  type: 'document',
  fields: [
    {
      name: 'heading',
      title: 'Заголовок',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: (rule: Rule) => rule.required(),
    },
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
        title: title,
        subtitle: `(${id}) ${description}`,
      }
    },
  },
}
