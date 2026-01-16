import React from 'react'

export type TooltipPlace = 'top' | 'right' | 'bottom' | 'left'
export type TooltipType = 'info' | 'warning' | 'error' | 'success'

export type TooltipProps = {
  children: React.ReactNode
  title: string
  content: string | React.ReactNode
  place: TooltipPlace
  type: TooltipType
  containerClassName?: string
  className?: string
  contentClassName?: string
  delayHide?: number
  border?: string | number
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  arrowColor?: string
}
