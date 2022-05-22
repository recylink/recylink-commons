import React from 'react'
import PropTypes from 'prop-types'
import './Label.css'

const Label = ({label, optional, required}) => {
  const renderOptional = () => {
    if (!optional) {
      return null
    }
    return <span className="recylink-label-optional">opcional</span>
  }

  const renderRequired = () => {
    if (!required) {
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

Label.propTypes = {label: PropTypes.string, optional: PropTypes.bool, required: PropTypes.bool}
export default Label
