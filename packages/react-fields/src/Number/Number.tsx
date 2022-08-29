import React from 'react'
import PropTypes from 'prop-types'
import NumberFormat from 'react-number-format'
import isNil from 'lodash.isnil'
import {Label} from '@recylink/react-components'
import '../styles.css'

const Number = (props: any) => {
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
        <NumberFormat
          className={getClassName()}
          placeholder={props.placeholder}
          value={!isNil(props.value) ? props.value : ''}
          onValueChange={(value: any) => onChange(value.floatValue)}
          thousandSeparator={props.thousandSeparator || '.'}
          decimalSeparator={props.decimalSeparator || ','}
          format={props.format}
          mask={props.mask}
          disabled={props.disabled}
          prefix={props.prefix}
          suffix={props.suffix && ' ' + props.suffix}
          onFocus={() => onFocus()}
          onBlur={() => onBlur()}
          {...props.passProps}
        />
        <div className="recylink-input-error">{props.errorMessage}</div>
      </div>
    </>
  )
}

Number.propTypes = {
  label: PropTypes.any,
  value: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
  errorMessage: PropTypes.any,
  format: PropTypes.string,
  thousandSeparator: PropTypes.string,
  decimalSeparator: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  passProps: PropTypes.object,
  disabled: PropTypes.bool,
  isOptional: PropTypes.bool,
  isOptionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  isRequiredLabel: PropTypes.string
}
Number.defaultProps = {value: null}
export default Number
