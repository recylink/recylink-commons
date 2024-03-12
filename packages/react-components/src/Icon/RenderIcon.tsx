import React, {lazy, useCallback, useEffect, useState} from 'react'
import {InferProps} from 'prop-types'
import get from 'lodash.get'
import IconPropTypes from './IconPropTypes'
import icons from './icons'
import './styles.css'

const defaultProps = {
  className: ''
}

const RenderIcon = ({
  library,
  icon,
  className,
  onClick,
  gaclickid,
  id
}: InferProps<typeof IconPropTypes> & typeof defaultProps) => {
  const [renderIcon, setRenderIcon] = useState(<span />)

  const onClickIcon = useCallback(
    e => {
      if (onClick) {
        e.preventDefault()
        e.stopPropagation()
        onClick(e)
      }
    },
    [onClick]
  )


  useEffect(() => {
    const el = document.getElementById(id)
    if (el && gaclickid) {
      el.setAttribute('gaclickid', gaclickid)
      el.querySelector('svg path')?.setAttribute('gaclickid', gaclickid)
    }
  }, [gaclickid, id])


  const getIconComponent = useCallback(
    async (library, icon) => {
      const importFunction = get(icons, `${library}.${icon}`)
      if (!importFunction) {
        return
      }
      const Icon = lazy(() =>
        importFunction().catch(error => {
          console.log({error})
        })
      )
      if (Icon) {
        setRenderIcon(<Icon id={id} className={className} onClick={onClickIcon} />)
      }
    },
    [className, onClickIcon, id]
  )

  useEffect(() => {
    getIconComponent(library, icon)
  }, [getIconComponent, library, icon])

  return renderIcon
}

RenderIcon.propTypes = IconPropTypes
export default React.memo(RenderIcon)
