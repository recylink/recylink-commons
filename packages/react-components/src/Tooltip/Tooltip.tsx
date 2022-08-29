import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import isString from 'lodash.isstring'
import uniqueId from 'lodash.uniqueid'
import './styles.css'

const Tooltip = (props: any) => {
  const id = uniqueId('os-tooltip')

  const getContent = () =>
    isString(props.content)
      ? props.content.split('\n').map((line, index) => (
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
            className={`recylink-tooltip ${props.className}`}
            id={id}
            place={props.place}
            offset={props.offset}
            effect="solid"
            type={props.type}
            delayHide={props.delayHide}
            getContent={() => renderContent()}
            border={props.border}
            backgroundColor={props.backgroundColor}
            textColor={props.textColor}
            borderColor={props.borderColor}
            arrowColor={props.arrowColor}
          />
        </div>
      )}
    </div>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  place: PropTypes.string,
  offset: PropTypes.object,
  type: PropTypes.string,
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
Tooltip.defaultProps = {
  className: '',
  backgroundColor: 'var(--blue)',
  textColor: '#fff',
  borderColor: 'var(--blue)',
  arrowColor: 'var(--blue)'
}
export default Tooltip
