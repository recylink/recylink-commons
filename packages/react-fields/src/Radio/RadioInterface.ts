import {ReactNode} from 'react'

export interface RadioOption {
  value: string | number
  label: string | ReactNode
  description?: string | ReactNode
  disabled?: boolean
}

export interface RadioGroupInterface {
  name: string
  value?: string | number | undefined
  onChange: (value: string | number) => void
  options: RadioOption[]
  direction?: 'horizontal' | 'vertical'
  size?: 'small' | 'medium' | 'large'
  radioPosition?: 'left' | 'right'
  disabled?: boolean
  errorMessage?: string
  className?: string
  style?: React.CSSProperties
  containerClassName?: string
  containerStyle?: React.CSSProperties
}

export interface RadioItemInterface {
  name: string
  value: string | number
  label: string | ReactNode
  description?: string | ReactNode
  checked: boolean
  disabled?: boolean
  onChange: (value: string | number) => void
  size?: 'small' | 'medium' | 'large'
  radioPosition?: 'left' | 'right'
  className?: string
  style?: React.CSSProperties
}
