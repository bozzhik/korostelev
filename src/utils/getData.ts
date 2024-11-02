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
  heading: string
  id: number
  description: string
  content: TContentBlock[]
  is_best?: boolean
}

export type TProject = {
  heading: string
  id: number
  tag: string
  description: string
  client: string
  content: TContentBlock[]
  image: never
  is_best?: boolean
}

export type TMember = {
  name: string
  surname: string
  position: string
  specialization: string
  description: TContentBlock[]
  achievements: TContentBlock[]
  image: never
}

export async function getServices(): Promise<TService[]> {
  const data = await client.fetch<TService[]>(
    ` *[_type == "service" ] {
          heading,
          id,
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

export async function getProjects(): Promise<TProject[]> {
  const data = await client.fetch<TProject[]>(
    ` *[_type == "project" ] {
          heading,
          id,
          tag,
          description,
          client,
          content,
          image,
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

export async function getMembers(): Promise<TMember[]> {
  const data = await client.fetch<TMember[]>(
    ` *[_type == "member" ] {
          name,
          surname,
          position,
          specialization,
          description,
          achievements,
          image,
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
