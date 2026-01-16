import React from 'react'

export type IconProps = {
  library: 'fi' | 'md'
  icon: string
  className?: string
  onClick?: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void | Promise<void>
  suspenseClassName?: string
  gaclickid?: string
  id?: string
}
