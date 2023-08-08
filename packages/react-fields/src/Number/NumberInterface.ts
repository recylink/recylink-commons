import {ReactNode} from 'react'

export interface NumberInterface {
  label?: string | ReactNode,
  value?: number,
  onChange: ((...args: any | any[]) => any | void | Promise<any>| Promise<void>),
  className?: string,
  errorMessage?: any,
  format?: string,
  thousandSeparator?: string,
  decimalSeparator?: string,
  placeholder?: string,
  mask?: string,
  prefix?: string,
  suffix?: string,
  passProps?: object,
  disabled?: boolean,
  isOptional?: boolean,
  isOptionalLabel?: string,
  isRequired?: boolean,
  isRequiredLabel?: string
}
