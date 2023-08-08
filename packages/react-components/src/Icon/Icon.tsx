import React from 'react'
import {InferProps} from 'prop-types'
import IconPropTypes from './IconPropTypes'
import RenderIcon from './RenderIcon'
import SuspenseLoading from '../SuspenseLoading'

const defaultProps = {
  className: ''
}

const Icon = (props: InferProps<typeof IconPropTypes> & typeof defaultProps) => (
  <SuspenseLoading className={props.suspenseClassName}>
    <RenderIcon {...props} />
  </SuspenseLoading>
)

Icon.propTypes = IconPropTypes
Icon.defaultProps = defaultProps
export default React.memo(Icon)
