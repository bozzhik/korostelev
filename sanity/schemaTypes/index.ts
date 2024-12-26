import {service} from './service'
import {project} from './project'
import {member} from './member'
import {news} from './news'
import {slide} from './slide'

export const getLocaleVersion = (field: unknown, locale = 'ru') =>
  Array.isArray(field)
    ? field.find((item) => item._key === locale)?.value || field[0]?.value
    : field

export const schemaTypes = [service, project, member, news, slide]
