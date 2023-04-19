import PropTypes from 'prop-types'

const ToastPropTypes = {
  id: PropTypes.string,
  deleteToast: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string.isRequired,
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  autoDeleteTime: PropTypes.any
}

export default ToastPropTypes
