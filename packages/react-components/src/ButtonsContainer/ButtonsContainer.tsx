import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const ButtonsContainer = ({children, position}) => {
  if (position === 'right') {
    return <div className="recylink-buttons-container-right">{children}</div>
  }

  return <div className="recylink-buttons-container">{children}</div>
}

ButtonsContainer.propTypes = {
  children: PropTypes.node,
  position: PropTypes.string
}
export default ButtonsContainer
