import React from 'react'
import {InferProps} from 'prop-types'
import uniqueId from 'lodash.uniqueid'
import IconPropTypes from './IconPropTypes'
import RenderIcon from './RenderIcon'
import SuspenseLoading from '../SuspenseLoading'

const defaultProps = {
  className: ''
}

const Icon = (props: InferProps<typeof IconPropTypes> & typeof defaultProps) => {
  const id = uniqueId('recylink-icon')
  
  return (
    <SuspenseLoading className={props.suspenseClassName}>
      <RenderIcon id={id} {...props} />
    </SuspenseLoading>
  )
}

Icon.propTypes = IconPropTypes
Icon.defaultProps = defaultProps
export default React.memo(Icon)
