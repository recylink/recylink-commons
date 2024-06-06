import React from 'react'
import PropTypes, {InferProps} from 'prop-types'
import './styles.css'

const ButtonsContainerPropTypes = {
  children: PropTypes.node,
  position: PropTypes.string
}

const ButtonsContainer = ({children, position}: InferProps<typeof ButtonsContainerPropTypes>) => {
  if (position === 'right') {
    return <div className="recylink-buttons-container-right">{children}</div>
  } else if (position === "space-between") {
    return <div className="recylink-buttons-container-space-between">{children}</div>
  }
  return <div className="recylink-buttons-container">{children}</div>
}

ButtonsContainer.propTypes = ButtonsContainerPropTypes
export default ButtonsContainer
