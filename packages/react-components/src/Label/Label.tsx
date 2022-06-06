import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Label = (props: any) => {
  const {label, isOptional, optionalLabel, isRequired, requiredLabel} = props

  const renderOptional = () => {
    if (!isOptional) {
      return null
    }
    return <span className="recylink-label-optional">{optionalLabel}</span>
  }

  const renderRequired = () => {
    if (!isRequired) {
      return null
    }
    return <span className="recylink-label-required">{requiredLabel}</span>
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

Label.propTypes = {
  label: PropTypes.string,
  isOptional: PropTypes.bool,
  optionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  requiredLabel: PropTypes.string
}
Label.defaultProps = {optionalLabel: 'optional', requiredLabel: '*'}
export default Label
