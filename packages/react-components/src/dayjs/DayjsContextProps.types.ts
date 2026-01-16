import {Dayjs} from 'dayjs'

export type DayjsOptions = {
  timezone?: string
}

export type DayjsContextProps = {
  dayjs: (...args: (string | number | Dayjs | Date)[]) => Dayjs
  setDayjs: (...args: DayjsOptions[]) => void
}
