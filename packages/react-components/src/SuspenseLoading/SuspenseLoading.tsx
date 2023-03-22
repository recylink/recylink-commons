import React, {Suspense} from 'react'
import PropTypes, {InferProps} from 'prop-types'
import './styles.css'

const SuspenseLoadingPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fallback: PropTypes.node,
  onRender: PropTypes.func
  // delay: PropTypes.number
}

const SuspenseLoading = (props: InferProps<typeof SuspenseLoadingPropTypes>) => {
  // const {delay} = props

  // const [isShown, setIsShown] = useState(delay === 0)

  const renderFallback = () => {
    if (props.fallback) {
      return props.fallback
    } else {
      return <div className={`recylink-loading-block ${props.className || ''}`} />
    }
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsShown(true)
  //   }, delay)
  // }, [delay])

  const renderChildren = () => {
    return props.children
  }

  return (
    <Suspense fallback={renderFallback()}>
      {renderChildren()}
      {props.onRender?.()}
    </Suspense>
  )
}

SuspenseLoading.propTypes = SuspenseLoadingPropTypes
SuspenseLoading.defaultProps = {onRender: () => {}}
export default SuspenseLoading
