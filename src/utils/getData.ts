import {client} from '@/lib/sanity'
import {revalidateTime} from '@/lib/utils'

export type TContentBlock = {
  style?: string
  _key: string
  markDefs?: unknown[]
  children?: unknown[]
  _type: string
}

export type TService = {
  id: number
  heading: string
  description: string
  content: TContentBlock[]
  is_best?: boolean
}

export async function getServices(): Promise<TService[]> {
  const data = await client.fetch<TService[]>(
    ` *[_type == "service" ] {
          id,
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
