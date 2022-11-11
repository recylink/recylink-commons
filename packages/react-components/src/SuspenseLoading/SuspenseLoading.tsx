import React, {Suspense} from 'react'
import PropTypes, {InferProps} from 'prop-types'
import './styles.css'

const SuspenseLoadingPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fallback: PropTypes.node,
  onRender: PropTypes.func
}

const SuspenseLoading = (props: InferProps<typeof SuspenseLoadingPropTypes>) => {
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
      {props.onRender?.()}
    </Suspense>
  )
}

SuspenseLoading.propTypes = SuspenseLoadingPropTypes
SuspenseLoading.defaultProps = {onRender: () => {}}
export default SuspenseLoading
