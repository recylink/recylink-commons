import React from 'react'
import PropTypes from 'prop-types'
import './Label.css'

const Label = ({label, isOptional, isRequired}) => {
  const renderOptional = () => {
    if (!isOptional) {
      return null
    }
    return <span className="recylink-label-optional">opcional</span>
  }

  const renderRequired = () => {
    if (!isRequired) {
      return null
    }
    return <span className="recylink-label-required">*</span>
  }

  if (!label) {
    return null
  }

  return (
    <div className="recylink-label">
      {label}
      {renderOptional()}
      {renderRequired()}
    </div>
  )
}

Label.propTypes = {label: PropTypes.string, isOptional: PropTypes.bool, isRequired: PropTypes.bool}
export default Label
