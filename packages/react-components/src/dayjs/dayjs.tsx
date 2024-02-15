import dayjsInstance, { Dayjs } from 'dayjs'
import esLocaleDefault from 'dayjs/locale/es'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import dayOfYear from 'dayjs/plugin/dayOfYear.js'
import duration from 'dayjs/plugin/duration.js'
import isToday from 'dayjs/plugin/isToday.js'
import localeData from 'dayjs/plugin/localeData.js'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import timezone from 'dayjs/plugin/timezone.js'
import toObject from 'dayjs/plugin/toObject.js'
import utc from 'dayjs/plugin/utc.js'
import weekday from 'dayjs/plugin/weekday.js'

const esLocale = {...esLocaleDefault, weekStart: 1}

dayjsInstance.extend(utc)
dayjsInstance.extend(relativeTime)
dayjsInstance.extend(timezone)
dayjsInstance.extend(localeData)
dayjsInstance.extend(dayOfYear)
dayjsInstance.extend(isToday)
dayjsInstance.extend(weekday)
dayjsInstance.extend(toObject)
dayjsInstance.extend(duration)
dayjsInstance.extend(customParseFormat)
dayjsInstance.locale(esLocale)

const getDayjs = (...args: any[]): Dayjs =>  dayjsInstance(...args)

getDayjs.weekdays = dayjsInstance.weekdays
getDayjs.duration = dayjsInstance.duration

export const setDayjs = function (options: any = {}) {
  if (options?.timezone) {
    const optionsTimezone = options.timezone
    dayjsInstance.tz.setDefault(optionsTimezone)
  }
}

export const dayjs = (...args: any[]): Dayjs => getDayjs(...args)

export {
  Dayjs,
  utc,
  relativeTime,
  timezone,
  localeData,
  dayOfYear,
  isToday,
  weekday,
  toObject,
  duration,
  customParseFormat,
  esLocale
}
