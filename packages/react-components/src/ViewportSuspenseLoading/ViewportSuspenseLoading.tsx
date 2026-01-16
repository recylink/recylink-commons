import React, {FC, useRef} from 'react'

import {useDeepEffect, useIntersectionObserver} from '@recylink/react-hooks'

import SuspenseLoading from '../SuspenseLoading'

import {ViewportSuspenseLoadingProps} from './ViewportSuspenseLoadingProps.types'

const ViewportSuspenseLoading: FC<ViewportSuspenseLoadingProps> = props => {
  const nodivRef = useRef<HTMLDivElement>(null)

  const [inView] = useIntersectionObserver(nodivRef, {threshold: 0})

  useDeepEffect(() => props.onView?.(), [inView])

  if (!inView) return <div ref={nodivRef} />

  return <SuspenseLoading {...props}>{props.children}</SuspenseLoading>
}

export default ViewportSuspenseLoading
