import React from 'react'
import PropTypes, {InferProps} from 'prop-types'
import './styles.css'

const LabelPropTypes = {
  label: PropTypes.string,
  isOptional: PropTypes.bool,
  isOptionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  isRequiredLabel: PropTypes.string,
  labelClassName: PropTypes.string
}

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
Label.defaultProps = {isOptionalLabel: 'optional', isRequiredLabel: '*'}
export default Label
