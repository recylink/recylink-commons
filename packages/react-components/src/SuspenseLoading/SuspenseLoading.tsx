import React, {Suspense} from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const SuspenseLoading = props => {
  const renderFallback = () => {
    if (props.fallback) {
      return props.fallback
    } else {
      return <div className={`recylink-loading-block ${props.className || ''}`} />
    }
  }

  return (
    <Suspense fallback={renderFallback()}>
      {props.children}
      {props.onRender()}
    </Suspense>
  )
}

SuspenseLoading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fallback: PropTypes.node,
  onRender: PropTypes.func
}
SuspenseLoading.defaultProps = {onRender: () => {}}
export default SuspenseLoading
