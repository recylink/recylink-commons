import React, {FC, lazy, useCallback, useEffect, useState} from 'react'

import get from 'lodash.get'

import {IconProps} from './IconProps.types'
import icons from './icons'

import './styles.css'

const RenderIcon: FC<IconProps> = ({library, icon, className, onClick, gaclickid, id}) => {
  const [renderIcon, setRenderIcon] = useState(<span />)

  const onClickIcon = useCallback(
    (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
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
    async (library: string, icon: string) => {
      const importFunction = get(icons, `${library}.${icon}`)
      if (!importFunction) {
        return
      }
      const Icon = lazy(() =>
        importFunction().catch((error: Error) => {
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

export default React.memo(RenderIcon)
