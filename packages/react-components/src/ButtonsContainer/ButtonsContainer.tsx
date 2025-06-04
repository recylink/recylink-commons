import React from 'react'
import PropTypes, {InferProps} from 'prop-types'
import './styles.css'

const ButtonsContainerPropTypes = {
  children: PropTypes.node,
  position: PropTypes.string,
  className: PropTypes.string,
}

const ButtonsContainer = ({children, position, className}: InferProps<typeof ButtonsContainerPropTypes>) => {
  if (position === 'right') {
    return <div className={`recylink-buttons-container-right ${className || ""}`}>{children}</div>
  } else if (position === "space-between") {
    return <div className={`recylink-buttons-container-space-between ${className || ""}`}>{children}</div>
  }
  return <div className={`recylink-buttons-container ${className || ""}`}>{children}</div>
}

ButtonsContainer.propTypes = ButtonsContainerPropTypes
export default ButtonsContainer
