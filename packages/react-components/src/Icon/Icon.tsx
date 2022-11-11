import React, {useCallback, useEffect, useState} from 'react'
import PropTypes, {InferProps} from 'prop-types'
import get from 'lodash.get'
import SuspenseLoading from '../SuspenseLoading'
import icons from './icons'
import './styles.css'

const IconPropTypes = {
  library: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  suspenseClassName: PropTypes.string
}

const RenderIcon = ({library, icon, className, onClick}: InferProps<typeof IconPropTypes>) => {
  const [renderIcon, setRenderIcon] = useState(<span />)

  const onCLickIcon = useCallback(
    e => {
      e.stopPropagation()
      if (onClick) {
        onClick(e)
      }
    },
    [onClick]
  )

  useEffect(() => {
    const IconComponent = get(icons, `${library}.${icon}`)
    if (!IconComponent) {
      console.error('No icon or library found')
    }
    setRenderIcon(<IconComponent className={className} onClick={onCLickIcon} />)
  }, [icon, library, className, onCLickIcon])

  return renderIcon
}

const Icon = props => (
  <SuspenseLoading className={props.suspenseClassName}>
    <RenderIcon {...props} />
  </SuspenseLoading>
)

Icon.propTypes = IconPropTypes
export default React.memo(Icon)
