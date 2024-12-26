import {defineConfig, defineField} from 'sanity'
import {schemaTypes} from './schemaTypes'

import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'Korostelev',

  projectId: '0y1vptns',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'ru', title: 'Russan'},
        {id: 'en', title: 'English'},
      ],
      defaultLanguages: ['ru'],
      fieldTypes: [
        'string',
        'text',
        defineField({
          name: 'extraText',
          type: 'text',
          rows: 6,
        }),
        defineField({
          name: 'extraBlock',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
