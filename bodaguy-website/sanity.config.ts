import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Boda Guy blog',

  projectId: 'p6b2z07v',
  dataset: 'blog',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
