import React from 'react'

export type ButtonProps = {
  id?: string
  tooltip?: string
  to?: string
  href?: string
  label?: React.ReactNode
  children?: React.ReactNode
  primary?: boolean
  ghost?: boolean
  danger?: boolean
  outline?: boolean
  link?: boolean
  default?: boolean
  big?: boolean
  style?: object
  disabled?: boolean
  loading?: boolean
  loadingComponent?: React.ReactNode
  fullWidth?: boolean
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void | Promise<void>
  state?: object
  noLoading?: boolean
  containerClassName?: string
  className?: string
  small?: boolean
  iconName?: string
  iconLibrary?: 'fi' | 'md'
  onlyText?: boolean

  gaclickid?: string

  type?: 'button' | 'icon'
  use?: 'function' | 'link' | 'href'
}
