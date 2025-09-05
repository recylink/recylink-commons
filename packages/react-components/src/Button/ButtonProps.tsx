import React from 'react'

export type ButtonProps = {
  id?: string
  tooltip?: string
  to?: string
  href?: string
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
  loadingComponent?: any
  fullWidth?: boolean
  icon?: any
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void | Promise<void>
  state?: object
  noLoading?: boolean
  containerClassName?: string
  className?: string
  small?: boolean
  iconName?: string
  iconLibrary?: string
  onlyText?: boolean

  gaclickid?: string

  type?: 'button' | 'icon'
  use?: 'function' | 'link' | 'href'
}
