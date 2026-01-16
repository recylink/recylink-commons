import React, {FC} from 'react'

import {ButtonsContainerProps} from './ButtonsContainerProps.types'

import './styles.css'

const ButtonsContainer: FC<ButtonsContainerProps> = ({children, position, className}) => {
  if (position === 'right') {
    return <div className={`recylink-buttons-container-right ${className || ''}`}>{children}</div>
  } else if (position === 'space-between') {
    return (
      <div className={`recylink-buttons-container-space-between ${className || ''}`}>
        {children}
      </div>
    )
  }
  return <div className={`recylink-buttons-container ${className || ''}`}>{children}</div>
}

export default ButtonsContainer
