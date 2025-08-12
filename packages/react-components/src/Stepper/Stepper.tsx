import React, { forwardRef } from 'react'
import { InferProps } from 'prop-types'
import keys from 'lodash.keys'
import omit from 'lodash.omit'
import './styles.css'
import StepperPropTypes from './StepperPropTypes'
import { StepperInterface, StepperStep } from './StepperInterface'

const defaultProps = {
  currentStep: 0,
  className: undefined,
  style: {},
  showStepNumbers: false,
  variant: 'horizontal',
  size: 'medium',
  activeColor: '#007bff',
  inactiveColor: '#6c757d',
  separatorColor: '#6c757d',
  showSeparators: true,
  clickable: false,
  onStepClick: undefined
}

const Stepper = forwardRef<HTMLDivElement, InferProps<typeof StepperPropTypes> & StepperInterface>((props, ref) => {
  const getChildProps = () => {
    const omitKeys = keys(StepperPropTypes)
    return omit(props, ...omitKeys)
  }

  const getClassName = () => {
    const classes = ['recylink-stepper']
    
    if (props.variant) {
      classes.push(`recylink-stepper-${props.variant}`)
    }
    
    if (props.size) {
      classes.push(`recylink-stepper-${props.size}`)
    }
    
    if (props.className) {
      classes.push(props.className)
    }
    
    return classes.join(' ')
  }

  const isStepActive = (stepIndex: number) => {
    return stepIndex === props.currentStep
  }

  const isStepCompleted = (stepIndex: number) => {
    return stepIndex < props.currentStep
  }

  const isStepDisabled = (stepIndex: number) => {
    return props.steps[stepIndex]?.disabled || false
  }

  const handleStepClick = (stepIndex: number, step: StepperStep) => {
    if (!props.clickable || isStepDisabled(stepIndex)) return
    
    if (props.onStepClick) {
      props.onStepClick(stepIndex, step)
    }
  }

  const getStepClassName = (stepIndex: number) => {
    const classes = ['recylink-stepper-step']
    
    if (isStepActive(stepIndex)) {
      classes.push('recylink-stepper-step-active')
    } else if (isStepCompleted(stepIndex)) {
      classes.push('recylink-stepper-step-completed')
    } else {
      classes.push('recylink-stepper-step-pending')
    }
    
    if (isStepDisabled(stepIndex)) {
      classes.push('recylink-stepper-step-disabled')
    }
    
    if (props.clickable && !isStepDisabled(stepIndex)) {
      classes.push('recylink-stepper-step-clickable')
    }
    
    return classes.join(' ')
  }

  const getSeparatorClassName = (stepIndex: number) => {
    const classes = ['recylink-stepper-separator']
    
    if (isStepCompleted(stepIndex + 1)) {
      classes.push('recylink-stepper-separator-completed')
    } else {
      classes.push('recylink-stepper-separator-pending')
    }
    
    return classes.join(' ')
  }

  const renderStep = (step: StepperStep, stepIndex: number) => {
    const stepStyle: React.CSSProperties = {
      color: isStepActive(stepIndex) ? props.activeColor : props.inactiveColor,
      ...(isStepActive(stepIndex) && {
        '--active-color': props.activeColor
      } as React.CSSProperties)
    }

    return (
      <div
        key={step.id}
        className={getStepClassName(stepIndex)}
        style={stepStyle}
        onClick={() => handleStepClick(stepIndex, step)}
        {...getChildProps()}
      >
        {props.showStepNumbers && (
          <div className="recylink-stepper-step-number">
            {stepIndex + 1}
          </div>
        )}
        <div className="recylink-stepper-step-content">
          <div className="recylink-stepper-step-label">
            {step.label}
          </div>
          {step.description && (
            <div className="recylink-stepper-step-description">
              {step.description}
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderSeparator = (stepIndex: number) => {
    if (!props.showSeparators || stepIndex === props.steps.length - 1) {
      return null
    }

    const separatorStyle: React.CSSProperties = {
      color: isStepCompleted(stepIndex + 1) ? props.activeColor : props.separatorColor
    }

    return (
      <div
        key={`separator-${stepIndex}`}
        className={getSeparatorClassName(stepIndex)}
        style={separatorStyle}
      >
        <span className="recylink-stepper-separator-icon">›</span>
      </div>
    )
  }

  const renderSteps = () => {
    return props.steps.map((step, index) => (
      <React.Fragment key={step.id}>
        {renderStep(step, index)}
        {renderSeparator(index)}
      </React.Fragment>
    ))
  }

  return (
    <div
      ref={ref}
      className={getClassName()}
      style={props.style}
    >
      {renderSteps()}
    </div>
  )
})

Stepper.propTypes = StepperPropTypes
Stepper.defaultProps = defaultProps
Stepper.displayName = 'Stepper'

export default Stepper
