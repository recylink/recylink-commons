import {ReactNode} from 'react'

export interface TextInterface {
  label?: string | ReactNode,
  fieldType?: string,
  value: string,
  onChange: ((...args: any | any[]) => any | void | Promise<any>| Promise<void>),
  className?: string,
  errorMessage?: any,
  placeholder?: string,
  mask?: string,
  passProps?: object,
  disabled?: boolean,
  isOptional?: boolean,
  isOptionalLabel?: string,
  isRequired?: boolean,
  isRequiredLabel?: string
  description?: ReactNode,
  onEnter?: ((...args: any | any[]) => any | void | Promise<any>| Promise<void>),
  onFocus?: ((...args: any | any[]) => any | void | Promise<any>| Promise<void>),
  onBlur?: ((...args: any | any[]) => any | void | Promise<any>| Promise<void>),
  maxLength?: number,
  toUpperCase?: boolean,
  delay?: number,
  maskChar?: string,
}
