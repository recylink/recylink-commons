import {ReactNode} from 'react'

export interface ButtonInterface {
  id?: string
  tooltip?: string
  to?: string
  href?: string
  linkButton?: boolean
  label?: any
  children?: any
  primary?: boolean
  ghost?: boolean
  danger?: boolean
  link?: boolean
  default?: boolean
  big?: boolean
  style?: object
  disabled?: boolean
  loading?: boolean
  loadingComponent?: ReactNode
  fullWidth?: boolean
  icon?: any
  onClick: ((...args: any | any[]) => any | void | Promise<any>| Promise<void>)
  state?: object
  noLoading?: boolean
  containerClassName?: string
  className?: string
  small?: boolean
  iconName?: string
  iconLibrary?: string
  type: string
  use: string
  onlyText?: boolean
}
