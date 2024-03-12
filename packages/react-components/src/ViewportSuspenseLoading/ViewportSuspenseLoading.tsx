import React, {useEffect, useRef} from 'react'
import PropTypes, {InferProps} from 'prop-types'
import {useIntersectionObserver} from '@recylink/react-hooks'
import SuspenseLoading from '../SuspenseLoading'

const ViewportSuspenseLoadingPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onRender: PropTypes.func,
  onView: PropTypes.func,
  fallback: PropTypes.node
  // delay: PropTypes.number
}

const ViewportSuspenseLoading = (props: InferProps<typeof ViewportSuspenseLoadingPropTypes>) => {
  const nodivRef = useRef<HTMLDivElement>(null)

  const [inView] = useIntersectionObserver(nodivRef, {threshold: 0})

  useEffect(() => props.onView?.(), [inView])

  if (!inView) return <div ref={nodivRef} />

  return <SuspenseLoading {...props}>{props.children}</SuspenseLoading>
}

ViewportSuspenseLoading.propTypes = ViewportSuspenseLoadingPropTypes
ViewportSuspenseLoading.defaultProps = {onView: () => {}}
export default ViewportSuspenseLoading
