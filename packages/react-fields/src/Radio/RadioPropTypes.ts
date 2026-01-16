import PropTypes from 'prop-types'

const RadioOptionPropType = PropTypes.shape({
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool
})

export const RadioGroupPropTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]) || undefined,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(RadioOptionPropType).isRequired,
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  radioPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  containerClassName: PropTypes.string,
  containerStyle: PropTypes.object
}

export const RadioItemPropTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  radioPosition: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  style: PropTypes.object
}
