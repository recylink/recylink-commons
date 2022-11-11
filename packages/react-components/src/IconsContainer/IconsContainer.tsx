import React from 'react'
import PropTypes, {InferProps} from 'prop-types'
import './styles.css'

const IconsContainerPropTypes = {
  children: PropTypes.node,
  position: PropTypes.string
}

const IconsContainer = ({children, position}: InferProps<typeof IconsContainerPropTypes>) => {
  if (position === 'right') {
    return <div className="recylink-icon-buttons-container-right">{children}</div>
  }

  return <div className="recylink-icon-buttons-container">{children}</div>
}

IconsContainer.propTypes = IconsContainerPropTypes
export default IconsContainer
