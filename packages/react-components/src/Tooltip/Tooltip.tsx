import React from 'react'
import PropTypes, {InferProps} from 'prop-types'
import ReactTooltip, {Place} from 'react-tooltip'
import isString from 'lodash.isstring'
import uniqueId from 'lodash.uniqueid'
import './styles.css'

const TooltipPropTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left'] as const).isRequired,
  offset: PropTypes.object,
  type: PropTypes.oneOf(['dark', 'success', 'warning', 'error', 'info', 'light'] as const)
    .isRequired,
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  delayHide: PropTypes.number,

  border: PropTypes.bool,
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
      data-tip=""
      data-for={id}
      className={`recylink-tooltip-container ${props.containerClassName}`}>
      {props.children}
      {props.content && (
        <div className="recylink-tooltip-content-container">
          <ReactTooltip
            id={id}
            place={props.place}
            offset={props.offset || undefined}
            type={props.type}
            delayHide={props.delayHide || undefined}
            className={`recylink-tooltip ${props.className}`}
            effect="solid"
            getContent={() => renderContent()}
            border={props.border || undefined}
            backgroundColor={props.backgroundColor || undefined}
            textColor={props.textColor || undefined}
            borderColor={props.borderColor || undefined}
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
  backgroundColor: 'var(--blue)',
  textColor: '#fff',
  borderColor: 'var(--blue)',
  arrowColor: 'var(--blue)'
}
export default Tooltip
