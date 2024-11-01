import {client} from '@/lib/sanity'
import {revalidateTime} from '@/lib/utils'

export type TContentBlock = {
  style?: string
  _key: string
  markDefs?: unknown[]
  children: Array<{_key: string; _type: string; text: string}>
  _type: string
}

export type TService = {
  heading: string
  description: string
  content: TContentBlock[]
  is_best?: boolean
}

export async function getServices(): Promise<TService[]> {
  const data = await client.fetch<TService[]>(
    ` *[_type == "service" ] | order(_createdAt asc) {
          heading,
          description,
          content,
          is_best,
      }`,
    {},
    {
      next: {
        revalidate: revalidateTime,
      },
    },
  )
  return data
}
