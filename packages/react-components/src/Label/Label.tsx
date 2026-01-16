import React, {FC} from 'react'

import {LabelProps} from './LabelProps.types'

import './styles.css'

const Label: FC<LabelProps> = (props: LabelProps) => {
  const {label, isOptional, isOptionalLabel, isRequired, isRequiredLabel} = props

  const renderOptional = () => {
    if (!isOptional) {
      return null
    }
    return <span className="recylink-label-optional">{isOptionalLabel || 'Opcional'}</span>
  }

  const renderRequired = () => {
    if (!isRequired) {
      return null
    }
    return <span className="recylink-label-required">{isRequiredLabel || '*'}</span>
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

export default Label
