import {Rule, SchemaTypeDefinition} from 'sanity'

export const member: SchemaTypeDefinition = {
  name: 'member',
  title: 'Команда',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'surname',
      title: 'Фамилия',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'position',
      title: 'Должность',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'specialization',
      title: 'Специализация',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'achievements',
      title: 'Достижения',
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
  ],
  preview: {
    select: {
      name: 'name',
      surname: 'surname',
      position: 'position',
      image: 'image',
    },
    prepare(selection) {
      const {name, surname, position, image} = selection
      return {
        title: `${name} ${surname}`,
        subtitle: position,
        media: image,
      }
    },
  },
}
