import PropTypes from 'prop-types'

export default {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isOptional: PropTypes.bool,
  isOptionalLabel: PropTypes.string,
  isRequired: PropTypes.bool,
  isRequiredLabel: PropTypes.string,
  labelClassName: PropTypes.string
}