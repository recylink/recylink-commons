import React, { forwardRef } from 'react'
import { InferProps } from 'prop-types'
import './styles.css'
import { RadioGroupPropTypes } from './RadioPropTypes'
import { RadioGroupInterface, RadioOption } from './RadioInterface'
import RadioItem from './RadioItem'

const RadioGroup = forwardRef<HTMLDivElement, InferProps<typeof RadioGroupPropTypes> & RadioGroupInterface>((props, ref) => {

  const getContainerClassName = () => {
    const classes = ['recylink-radio-group']
    
    if (props.direction) {
      classes.push(`recylink-radio-group-${props.direction}`)
    }
    
    if (props.size) {
      classes.push(`recylink-radio-group-${props.size}`)
    }
    
    if (props.disabled) {
      classes.push('recylink-radio-group-disabled')
    }
    
    if (props.containerClassName) {
      classes.push(props.containerClassName)
    }
    
    return classes.join(' ')
  }

  const getClassName = () => {
    const classes = ['recylink-radio-group-container']
    
    if (props.className) {
      classes.push(props.className)
    }
    
    return classes.join(' ')
  }

  const handleOptionChange = (value: string | number) => {
    if (props.disabled) return
    
    if (props.onChange) {
      props.onChange(value)
    }
  }

  const renderRadioItems = () => {
    return props.options.map((option: RadioOption, index: number) => {
      const isChecked = props.value === option.value
      const isDisabled = props.disabled || option.disabled

      return (
        <RadioItem
          key={`${props.name}-${option.value}-${index}`}
          name={props.name}
          value={option.value}
          label={option.label}
          description={option.description}
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleOptionChange}
          size={props.size}
          radioPosition={props.radioPosition}
        />
      )
    })
  }

  return (
    <div ref={ref} className={getClassName()} style={props.style}>
      <div className={getContainerClassName()} style={props.containerStyle}>
        {renderRadioItems()}
      </div>
      {props.errorMessage && (
        <div className="recylink-radio-group-error">
          {props.errorMessage}
        </div>
      )}
    </div>
  )
})

RadioGroup.propTypes = RadioGroupPropTypes
RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
