import {createClient} from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '0y1vptns',
  dataset: 'production',
  apiVersion: '2024-01-08',
  useCdn: false,
})

const imageBuilder = ImageUrlBuilder(client)

export function urlForImage(source: string) {
  return imageBuilder.image(source)
}
