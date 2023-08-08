import React from 'react'
import {InferProps} from 'prop-types'
import {NumericFormat, PatternFormat} from 'react-number-format'
import isNil from 'lodash.isnil'
import {Label} from '@recylink/react-components'
import NumberPropTypes from './NumberPropTypes'
import '../styles.css'
import { NumberInterface } from './NumberInterface'

const defaultProps = {
  value: null,
  label: undefined,
  placeholder: undefined,
  disabled: undefined,
  prefix: undefined,
  suffix: undefined,
  mask: undefined
}

const Number = (props: InferProps<typeof NumberPropTypes> & NumberInterface) => {
  const onChange = (value: number) => props.onChange(value)

  const onFocus = () => {
    if (props.value === 0) {
      props.onChange(null)
    }
  }

  const onBlur = () => {
    if (props.value === null) {
      props.onChange(null)
    }
  }

  const getClassName = () => {
    if (props.className) {
      return props.className
    }
    if (props.errorMessage) {
      return 'recylink-input-with-error'
    }
    if (props.disabled) {
      return 'recylink-input recylink-input-disabled'
    }
    return 'recylink-input'
  }

  const renderField = () => {
    if (props.format) {
      return (
        <PatternFormat
          className={getClassName()}
          placeholder={props.placeholder}
          value={!isNil(props.value) ? props.value : ''}
          onValueChange={(value: any) => onChange(value.floatValue)}
          format={props.format}
          mask={props.mask}
          disabled={props.disabled}
          prefix={props.prefix}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          {...props.passProps}
        />
      )
    }
    return (
      <NumericFormat
        className={getClassName()}
        placeholder={props.placeholder}
        value={!isNil(props.value) ? props.value : ''}
        onValueChange={(value: any) => onChange(value.floatValue)}
        thousandSeparator={props.thousandSeparator || '.'}
        decimalSeparator={props.decimalSeparator || ','}
        disabled={props.disabled}
        prefix={props.prefix}
        suffix={props.suffix && ' ' + props.suffix}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        {...props.passProps}
      />
    )
  }

  return (
    <>
      <Label
        label={props.label}
        isOptional={props.isOptional}
        isOptionalLabel={props.isOptionalLabel}
        isRequired={props.isRequired}
        isRequiredLabel={props.isRequiredLabel}
      />
      <div className="recylink-input-container">
        {renderField()}
        <div className="recylink-input-error">{props.errorMessage}</div>
      </div>
    </>
  )
}

Number.propTypes = NumberPropTypes
Number.defaultProps = defaultProps
export default Number
