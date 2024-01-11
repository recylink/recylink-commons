import React, {useState, useEffect, useCallback, useMemo} from 'react'
import {InferProps} from 'prop-types'
import InputMask from 'react-input-mask'
import debounce from 'lodash.debounce'
import {Label} from '@recylink/react-components'
import TextPropTypes from './TextPropTypes'
import '../styles.css'

type TextFieldProps = InferProps<typeof TextPropTypes>

const defaultProps: TextFieldProps = {
  label: undefined,
  fieldType: 'text',
  value: '',
  onEnter: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onChange: () => {},
  delay: 0,
  mask: undefined,
  placeholder: undefined,
  disabled: undefined,
  maxLength: undefined
}

const Text = (props: TextFieldProps & typeof defaultProps) => {
  const {delay, onChange, toUpperCase} = props
  const [state, setState] = useState(props.value)

  const delayedInput = useMemo(
    () => debounce(changes => onChange(changes), props.delay),
    [onChange, props.delay]
  )

  const handleOnChange = useCallback(
    (value: string) => {
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
    if (props.mask) {
      return (
        <InputMask
          mask={props.mask}
          className={getClassName()}
          type={props.fieldType}
          value={state || ''}
          placeholder={props.placeholder}
          onChange={(event: any) => handleOnChange(event.target.value)}
          disabled={props.disabled}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          maskChar={props.maskChar}
          {...props.passProps}
        />
      )
    }
    return (
      <input
        className={getClassName()}
        type={props.fieldType}
        value={state || ''}
        placeholder={props.placeholder}
        onChange={(event: any) => handleOnChange(event.target.value)}
        disabled={props.disabled}
        maxLength={props.maxLength}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
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
        <div className="recylink-description">{props.description}</div>
        <div className="recylink-input-error">{props.errorMessage}</div>
      </div>
    </>
  )
}

Text.propTypes = TextPropTypes
Text.defaultProps = defaultProps
export default Text
