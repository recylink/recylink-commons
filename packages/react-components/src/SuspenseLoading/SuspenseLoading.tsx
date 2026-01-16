import React, {FC, Suspense} from 'react'

import {useDeepEffect} from '@recylink/react-hooks'

import {SuspenseLoadingProps} from './SuspenseLoadingProps.types'

import './styles.css'

const SuspenseLoading: FC<SuspenseLoadingProps> = props => {
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

  useDeepEffect(() => {
    props.onRender?.()
  }, [props.onRender])

  const renderChildren = () => {
    return props.children
  }

  return <Suspense fallback={renderFallback()}>{renderChildren()}</Suspense>
}

export default SuspenseLoading
