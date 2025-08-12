import React, { forwardRef } from 'react'
import { InferProps } from 'prop-types'
import keys from 'lodash.keys'
import omit from 'lodash.omit'
import './styles.css'
import { RadioItemPropTypes } from './RadioPropTypes'
import { RadioItemInterface } from './RadioInterface'

const defaultProps = {
  description: undefined,
  disabled: false,
  size: 'medium' as const,
  radioPosition: 'left' as const,
  className: undefined,
  style: {},
  onChange: undefined
}

const RadioItem = forwardRef<HTMLInputElement, InferProps<typeof RadioItemPropTypes> & RadioItemInterface>((props, ref) => {
  const getChildProps = () => {
    const omitKeys = keys(RadioItemPropTypes)
    return omit(props, ...omitKeys)
  }

  const getClassName = () => {
    const classes = ['recylink-radio-item']
    
    if (props.size) {
      classes.push(`recylink-radio-item-${props.size}`)
    }
    
    if (props.radioPosition) {
      classes.push(`recylink-radio-item-${props.radioPosition}`)
    }
    
    if (props.checked) {
      classes.push('recylink-radio-item-checked')
    }
    
    if (props.disabled) {
      classes.push('recylink-radio-item-disabled')
    }
    
    if (props.className) {
      classes.push(props.className)
    }
    
    return classes.join(' ')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.disabled) return
    
    if (props.onChange) {
      props.onChange(props.value)
    }
  }

  return (
    <div className={getClassName()} style={props.style}>
      <label className="recylink-radio-item-label">
        {props.radioPosition === 'left' && (
          <>
            <input
              ref={ref}
              type="radio"
              name={props.name}
              value={props.value}
              checked={props.checked}
              disabled={props.disabled}
              onChange={handleChange}
              className="recylink-radio-item-input"
              {...getChildProps()}
            />
            <span className="recylink-radio-item-custom" />
          </>
        )}
        <div className="recylink-radio-item-content">
          <div className="recylink-radio-item-label-text">
            {props.label}
          </div>
          {props.description && (
            <div className="recylink-radio-item-description">
              {props.description}
            </div>
          )}
        </div>
        {props.radioPosition === 'right' && (
          <>
            <input
              ref={ref}
              type="radio"
              name={props.name}
              value={props.value}
              checked={props.checked}
              disabled={props.disabled}
              onChange={handleChange}
              className="recylink-radio-item-input"
              {...getChildProps()}
            />
            <span className="recylink-radio-item-custom" />
          </>
        )}
      </label>
    </div>
  )
})

RadioItem.propTypes = RadioItemPropTypes
RadioItem.defaultProps = defaultProps
RadioItem.displayName = 'RadioItem'

export default RadioItem
