import React, {FC} from 'react'
import {Tooltip as ReactTooltip} from 'react-tooltip'

import isString from 'lodash.isstring'
import uniqueId from 'lodash.uniqueid'

import {TooltipProps} from './TooltipProps.types'

import './styles.css'

const Tooltip: FC<TooltipProps> = props => {
  const id = uniqueId('recylink-tooltip')

  const getContent = () =>
    props.content && isString(props.content)
      ? (props.content as string).split('\n').map((line, index) => (
          <div key={index} className={`recylink-tooltip-content ${props.contentClassName}`}>
            {line}
          </div>
        ))
      : props.content

  const renderContent = () => (
    <>
      <div className="recylink-tooltip-title">{props.title}</div>
      <div className="recylink-tooltip-content">{getContent()}</div>
    </>
  )

  return (
    <div data-tooltip-id={id} className={`recylink-tooltip-container ${props.containerClassName}`}>
      {props.children}
      {props.content && (
        <div className="recylink-tooltip-content-container">
          <ReactTooltip
            id={id}
            place={props.place}
            variant={props.type}
            style={{
              backgroundColor: props.backgroundColor || '#0069A6',
              color: props.textColor || '#fff'
            }}
            delayHide={props.delayHide || 0}
            className={`recylink-tooltip ${props.className}`}
            render={() => renderContent()}
            border={props.border || 0}
            arrowColor={props.arrowColor || '#0069A6'}
          />
        </div>
      )}
    </div>
  )
}

export default Tooltip
