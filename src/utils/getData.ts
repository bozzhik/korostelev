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
  ru: {heading: string; description: string; content: TContentBlock[]}
  en: {heading: string; description: string; content: TContentBlock[]}
  id: number
  is_best?: boolean
}

export type TProject = {
  ru: {heading: string; tag: string; description: string; client: string; content: TContentBlock[]}
  en: {heading: string; tag: string; description: string; client: string; content: TContentBlock[]}
  id: number
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

export type TNews = {
  heading: string
  tag: string
  date: string
  content: TContentBlock[]
  image: never
  source: string
  is_best?: boolean
}

export type TSlide = {
  ru: {heading: string; description: string}
  en: {heading: string; description: string}
  id: number
}

export async function getServices(): Promise<TService[]> {
  const data = await client.fetch<TService[]>(
    ` *[_type == "service"] {
          "ru": {
            "heading": heading[_key == "ru"][0].value,
            "description": description[_key == "ru"][0].value,
            "content": content[_key == "ru"][0].value 
          },
          "en": {
            "heading": heading[_key == "en"][0].value,
            "description": description[_key == "en"][0].value,
            "content": content[_key == "en"][0].value 
          },
          id,
          is_best,
      }
    `,
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
    ` *[_type == "project"] {
          "ru": {
            "heading": heading[_key == "ru"][0].value,
            "tag": tag[_key == "ru"][0].value,
            "description": description[_key == "ru"][0].value,
            "client": client[_key == "ru"][0].value,
            "content": content[_key == "ru"][0].value,
          },
          "en": {
            "heading": heading[_key == "en"][0].value,
            "tag": tag[_key == "en"][0].value,
            "description": description[_key == "en"][0].value,
            "client": client[_key == "en"][0].value,
            "content": content[_key == "en"][0].value,
          },
          id,
          image,
          is_best,
      }
    `,
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
    ` *[_type == "member" ] | order(_createdAt asc) {
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

export async function getNews(): Promise<TNews[]> {
  const data = await client.fetch<TNews[]>(
    ` *[_type == "news" ] {
          heading,
          tag,
          date,
          content,
          image,
          source,
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

export async function getSlides(): Promise<TSlide[]> {
  const data = await client.fetch<TSlide[]>(
    ` *[_type == "slide"] {
          "ru": {
            "heading": heading[_key == "ru"][0].value,
            "description": description[_key == "ru"][0].value
          },
          "en": {
            "heading": heading[_key == "en"][0].value,
            "description": description[_key == "en"][0].value
          },
          id
      }
    `,
    {},
    {
      next: {
        revalidate: revalidateTime,
      },
    },
  )
  return data
}
