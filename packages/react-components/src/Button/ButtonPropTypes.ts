import PropTypes from 'prop-types'

export default {
  id: PropTypes.string,
  tooltip: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.any,
  children: PropTypes.any,
  primary: PropTypes.bool,
  ghost: PropTypes.bool,
  danger: PropTypes.bool,
  link: PropTypes.bool,
  default: PropTypes.bool,
  big: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingComponent: PropTypes.node,
  fullWidth: PropTypes.bool,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  state: PropTypes.object,
  noLoading: PropTypes.bool,
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  small: PropTypes.bool,
  iconName: PropTypes.string,
  iconLibrary: PropTypes.string,
  onlyText: PropTypes.bool,

  gaclickid: PropTypes.string,

  type: PropTypes.string.isRequired,
  use: PropTypes.string.isRequired
}
