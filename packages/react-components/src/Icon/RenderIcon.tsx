import React, {useEffect} from 'react'
import {InferProps} from 'prop-types'
// import loadable from "@loadable/component"
import get from 'lodash.get'
import uniqueId from 'lodash.uniqueid'
// import { IconType } from "react-icons/lib"
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
  gaclickid
}: InferProps<typeof IconPropTypes> & typeof defaultProps) => {
  const id = uniqueId('recylink-icon')

  const onClickIcon = e => {
      e.stopPropagation()
      if (onClick) {
        onClick(e)
      }
    }

  useEffect(() => {
    const el = document.getElementById(id)
    if (el && gaclickid) {
      el.setAttribute('gaclickid', gaclickid)
      el.querySelector('svg path')?.setAttribute('gaclickid', gaclickid)
    }
  }, [gaclickid])

  const IconComponent = get(icons, `${library}.${icon}`)

  // const IconComponent: IconType = loadable(() => import(`./icons/${library}/index.js`), {
  //   resolveComponent: (el: JSX.Element) => el[icon as keyof JSX.Element]
  // });

  if (!IconComponent) {
    console.error('No icon or library found')
    return <span />
  }

  return <IconComponent id={id} className={className} onClick={onClickIcon} />
}

RenderIcon.propTypes = IconPropTypes
export default React.memo(RenderIcon)
