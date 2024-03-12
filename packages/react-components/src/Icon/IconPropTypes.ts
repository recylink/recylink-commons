import PropTypes from 'prop-types'

export default {
  library: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  suspenseClassName: PropTypes.string,
  gaclickid: PropTypes.string,
  id: PropTypes.string
}