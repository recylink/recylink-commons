import React, {useCallback, useEffect, useState} from 'react'
import PropTypes, {InferProps} from 'prop-types'
import get from 'lodash.get'
import uniqueId from 'lodash.uniqueid'
import SuspenseLoading from '../SuspenseLoading'
import icons from './icons'
import './styles.css'

const IconPropTypes = {
  library: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  suspenseClassName: PropTypes.string,
  gaclickid: PropTypes.string
}

const RenderIcon = ({
  library,
  icon,
  className,
  onClick,
  gaclickid
}: InferProps<typeof IconPropTypes>) => {
  const id = uniqueId('recylink-icon')

  const onClickIcon = useCallback(
    e => {
      e.stopPropagation()
      if (onClick) {
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
  }, [gaclickid])

  const IconComponent = get(icons, `${library}.${icon}`)

  if (!IconComponent) {
    console.error('No icon or library found')
    return <span />
  }

  return <IconComponent id={id} className={className} onClick={onClickIcon} />
}

const Icon = props => (
  <SuspenseLoading className={props.suspenseClassName}>
    <RenderIcon {...props} />
  </SuspenseLoading>
)

Icon.propTypes = IconPropTypes
export default React.memo(Icon)
