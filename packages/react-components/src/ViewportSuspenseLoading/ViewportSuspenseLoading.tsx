import React, {useEffect, useRef} from 'react'
import useIntersectionObserver from 'App/hooks/useIntersectionObserver'
import PropTypes from 'prop-types'
import SuspenseLoading from 'App/components/SuspenseLoading'

function OnView(props) {
  const nodivRef = useRef()

  const [inView] = useIntersectionObserver(nodivRef, {threshold: 0})

  useEffect(() => {}, [inView])

  if (!inView) return <div ref={nodivRef} />
  props.onView()
  return <SuspenseLoading {...props}>{props.children}</SuspenseLoading>
}

OnView.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  noLoading: PropTypes.bool,
  block: PropTypes.bool,
  size: PropTypes.number,
  onRender: PropTypes.func,
  onView: PropTypes.func
}
OnView.defaultProps = {onView: () => {}}
export default OnView
