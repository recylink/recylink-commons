import React, {FC} from 'react'

import {IconsContainerProps} from './IconsContainerProps.types'

import './styles.css'

const IconsContainer: FC<IconsContainerProps> = ({children, position}) => {
  if (position === 'right') {
    return <div className="recylink-icon-buttons-container-right">{children}</div>
  }

  return <div className="recylink-icon-buttons-container">{children}</div>
}

export default IconsContainer
