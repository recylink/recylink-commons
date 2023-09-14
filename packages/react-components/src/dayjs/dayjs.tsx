import dayjsInstance from 'dayjs'
import esLocale from 'dayjs/locale/es'
import customParseFormatPlugin from 'dayjs/plugin/customParseFormat.js'
import dayOfYearPlugin from 'dayjs/plugin/dayOfYear.js'
import durationPlugin from 'dayjs/plugin/duration.js'
import isTodayPlugin from 'dayjs/plugin/isToday.js'
import localeDataPlugin from 'dayjs/plugin/localeData.js'
import relativeTimePlugin from 'dayjs/plugin/relativeTime.js'
import timezonePlugin from 'dayjs/plugin/timezone.js'
import toObjectPlugin from 'dayjs/plugin/toObject.js'
import utcPlugin from 'dayjs/plugin/utc.js'
import weekdayPlugin from 'dayjs/plugin/weekday.js'

dayjsInstance.extend(utcPlugin)
dayjsInstance.extend(relativeTimePlugin)
dayjsInstance.extend(timezonePlugin)
dayjsInstance.extend(localeDataPlugin)
dayjsInstance.extend(dayOfYearPlugin)
dayjsInstance.extend(isTodayPlugin)
dayjsInstance.extend(weekdayPlugin)
dayjsInstance.extend(toObjectPlugin)
dayjsInstance.extend(durationPlugin)
dayjsInstance.extend(customParseFormatPlugin)
dayjsInstance.locale({...esLocale, weekStart: 1})

const getDayjs = (...args: any[]) =>  dayjsInstance(...args)

getDayjs.weekdays = dayjsInstance.weekdays
getDayjs.duration = dayjsInstance.duration

export const setDayjs = function (options: any = {}) {
  if (options?.timezone) {
    const optionsTimezone = options.timezone
    dayjsInstance.tz.setDefault(optionsTimezone)
  }
}

export const dayjs = (...args: any[]) => getDayjs(...args)
