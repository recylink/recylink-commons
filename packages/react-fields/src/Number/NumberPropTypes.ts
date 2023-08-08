import PropTypes from 'prop-types'

export default {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  errorMessage: PropTypes.any,
  format: PropTypes.string,
  thousandSeparator: PropTypes.string,
  decimalSeparator: PropTypes.string,
  placeholder: PropTypes.string,
  mask: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  passProps: PropTypes.object,
  disabled: PropTypes.bool,
  isOptional: PropTypes.bool,
  isOptionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  isRequiredLabel: PropTypes.string
}