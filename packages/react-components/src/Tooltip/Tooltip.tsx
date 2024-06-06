import React from 'react'
import PropTypes, {InferProps} from 'prop-types'
import {Tooltip as ReactTooltip} from 'react-tooltip'
import isString from 'lodash.isstring'
import uniqueId from 'lodash.uniqueid'
import './styles.css'

const TooltipPropTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left'] as const).isRequired,
  type: PropTypes.oneOf(['dark', 'success', 'warning', 'error', 'info', 'light'] as const)
    .isRequired,
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  delayHide: PropTypes.number,
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  arrowColor: PropTypes.string
}

const Tooltip = (props: InferProps<typeof TooltipPropTypes>) => {
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
    <div
      data-tooltip-id={id}
      className={`recylink-tooltip-container ${props.containerClassName}`}>
      {props.children}
      {props.content && (
        <div className="recylink-tooltip-content-container">
          <ReactTooltip
            id={id}
            place={props.place}
            variant={props.type}
            style={{ backgroundColor: props.backgroundColor, color: props.textColor}}
            delayHide={props.delayHide || undefined}
            className={`recylink-tooltip ${props.className}`}
            render={() => renderContent()}
            border={props.border || undefined}
            arrowColor={props.arrowColor || undefined}
          />
        </div>
      )}
    </div>
  )
}

Tooltip.propTypes = TooltipPropTypes
Tooltip.defaultProps = {
  className: '',
  containerClassName: '',
  arrowColor: '#0078c8',
  backgroundColor: '#0078c8',
  textColor: '#fff',
}
export default Tooltip
