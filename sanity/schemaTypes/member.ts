import {defineField, Rule, SchemaTypeDefinition} from 'sanity'
import {getLocaleVersion} from './index'

export const member: SchemaTypeDefinition = {
  name: 'member',
  title: 'Команда',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Имя',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'surname',
      title: 'Фамилия',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Должность',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'specialization',
      title: 'Специализация',
      type: 'internationalizedArrayString',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Описание',
      type: 'internationalizedArrayExtraBlock',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'achievements',
      title: 'Достижения',
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
        title: `${getLocaleVersion(name)} ${getLocaleVersion(surname)}`,
        subtitle: getLocaleVersion(position),
        media: image,
      }
    },
  },
}
