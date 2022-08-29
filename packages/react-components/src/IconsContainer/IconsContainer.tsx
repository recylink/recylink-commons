import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const IconsContainer = ({children, position}) => {
  if (position === 'right') {
    return <div className="recylink-icon-buttons-container-right">{children}</div>
  }

  return <div className="recylink-icon-buttons-container">{children}</div>
}

IconsContainer.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string
}
export default IconsContainer
