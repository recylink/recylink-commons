import React from 'react'
import {InferProps} from 'prop-types'
import LabelPropTypes from './LabelPropTypes'
import './styles.css'

const Label = (props: InferProps<typeof LabelPropTypes>) => {
  const {label, isOptional, isOptionalLabel, isRequired, isRequiredLabel} = props

  const renderOptional = () => {
    if (!isOptional) {
      return null
    }
    return <span className="recylink-label-optional">{isOptionalLabel}</span>
  }

  const renderRequired = () => {
    if (!isRequired) {
      return null
    }
    return <span className="recylink-label-required">{isRequiredLabel}</span>
  }

  const renderLabel = () => {
    return label
  }

  if (!label) {
    return null
  }

  return (
    <div className="recylink-label">
      {renderLabel()}
      {renderOptional()}
      {renderRequired()}
    </div>
  )
}

Label.propTypes = LabelPropTypes
Label.defaultProps = {isOptionalLabel: 'Opcional', isRequiredLabel: '*'}
export default Label
