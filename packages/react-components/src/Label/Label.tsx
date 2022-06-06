import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const Label = (props: any) => {
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
  isOptionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  isRequiredLabel: PropTypes.string
}
Label.defaultProps = {isOptionalLabel: 'optional', isRequiredLabel: '*'}
export default Label
