import {useEffect, useMemo, useState} from 'react'

const useIntersectionObserver = (ref: any, {threshold, root, rootMargin}: any, persist = false) => {
  // configure the state
  const [state, setState] = useState({
    inView: false,
    triggered: false,
    entry: undefined
  })

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        (entries, observerInstance: any) => {
          // checks to see if the element is intersecting
          if (persist) {
            setState({
              inView: entries[0].isIntersecting,
              triggered: true,
              entry: observerInstance
            })
          } else {
            if (entries[0].isIntersecting) {
              // if it is update the state, we set triggered as to not re-observe the element
              setState({
                inView: true,
                triggered: true,
                entry: observerInstance
              })
              // unobserve the element
              if (ref && ref.current) {
                observerInstance.unobserve(ref.current)
              }
            }
          }
          return
        },
        {
          threshold: threshold || 0,
          root: root || null,
          rootMargin: rootMargin || '0%'
        }
      ),
    [persist, ref, root, rootMargin, threshold]
  )

  useEffect(() => {
    // check that the element exists, and has not already been triggered
    if (ref && ref.current && !state.triggered) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [observer, ref, state.triggered])

  return [state.inView, state.entry]
}

export default useIntersectionObserver
