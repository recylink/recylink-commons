import {useEffect, useRef} from 'react'
import isEqual from 'lodash/isEqual'

const useDeepEffect = (fn: Function, params: Array<any>) => {
  const isFirst = useRef(true)
  const prevParams = useRef(params)

  useEffect(() => {
    const isSame = prevParams.current.every((obj, index) => isEqual(obj, params[index]))

    if (isFirst.current || !isSame) {
      fn()
    }

    isFirst.current = false
    prevParams.current = params
  }, [params, fn])
}

export default useDeepEffect
