import PropTypes from 'prop-types'

export default {
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  fieldType: PropTypes.string,
  passProps: PropTypes.object,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.node,
  disabled: PropTypes.bool,
  description: PropTypes.node,
  onEnter: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  maxLength: PropTypes.number,
  mask: PropTypes.string,
  toUpperCase: PropTypes.bool,
  delay: PropTypes.number,
  maskChar: PropTypes.string,
  label: PropTypes.node,
  isOptional: PropTypes.bool,
  isOptionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  isRequiredLabel: PropTypes.string
}