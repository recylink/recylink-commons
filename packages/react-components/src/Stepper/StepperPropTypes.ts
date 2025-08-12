import PropTypes from 'prop-types'

const StepperStepPropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string,
  disabled: PropTypes.bool
})

export default {
  steps: PropTypes.arrayOf(StepperStepPropType).isRequired,
  currentStep: PropTypes.number,
  onStepClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
  showStepNumbers: PropTypes.bool,
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  separatorColor: PropTypes.string,
  showSeparators: PropTypes.bool,
  clickable: PropTypes.bool
}
