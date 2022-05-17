import React, {useRef, useState, useEffect, useCallback} from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask'
import debounce from 'lodash/debounce'
import {Label} from 'recylink-components'

const Text = props => {
  const {delay, onChange, toUpperCase} = props
  const [state, setState] = useState(props.value)

  const delayedInput = useRef(debounce(changes => onChange(changes), props.delay)).current

  const handleOnChange = useCallback(
    value => {
      const setValue = toUpperCase ? value.toUpperCase() : value
      setState(setValue)
      if (delay) {
        delayedInput(setValue)
      } else {
        onChange(setValue)
      }
    },
    [onChange, toUpperCase, delay, delayedInput]
  )

  useEffect(() => {
    if (state !== props.value) {
      if (state) {
        if (!props.value && !delay) {
          handleOnChange(props.value)
        } else {
          handleOnChange(state)
        }
      } else if (props.value) {
        if (delay) {
          handleOnChange(state)
        } else {
          handleOnChange(props.value)
        }
      }
    }
  }, [props.value, handleOnChange, state, delay])

  const handleKeyDown = event => {
    if (event.key === 'Enter') {
      props.onEnter()
    }
  }

  const getClassName = () => {
    if (props.className) {
      return props.className
    }
    if (props.errorMessage) {
      return 'input-with-error'
    }
    if (props.disabled) {
      return 'os-input-text os-input-disabled'
    }
    return 'os-input-text'
  }

  return (
    <div>
      <Label label={props.label} optional={props.optional} required={props.required} />
      <div className="os-input-container">
        <InputMask
          mask={props.mask}
          className={getClassName()}
          type={props.fieldType}
          value={state || ''}
          placeholder={props.placeholder}
          onChange={event => handleOnChange(event.target.value)}
          disabled={props.disabled}
          onKeyDown={handleKeyDown}
          maxLength={props.maxLength}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          maskChar={props.maskChar}
          {...props.passProps}
        />
        <div className="description">{props.description}</div>
        <div className="os-input-error">{props.errorMessage}</div>
      </div>
    </div>
  )
}

Text.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  className: PropTypes.string,
  fieldType: PropTypes.string,
  passProps: PropTypes.object,
  placeholder: PropTypes.node,
  errorMessage: PropTypes.node,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  description: PropTypes.node,
  onEnter: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  maxLength: PropTypes.string,
  mask: PropTypes.string,
  toUpperCase: PropTypes.bool,
  delay: PropTypes.number,
  maskChar: PropTypes.bool,
  optional: PropTypes.bool,
  required: PropTypes.bool
}
Text.defaultProps = {
  fieldType: 'text',
  value: '',
  onEnter: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  allowedCharacters: '',
  delay: 0
}
export default Text
