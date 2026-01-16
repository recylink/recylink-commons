import PropTypes from 'prop-types'

const MaterialPropType = PropTypes.shape({
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
})

export default {
  material: MaterialPropType.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  url: PropTypes.string,
  children: PropTypes.node
}
