import React, {FC} from 'react'

import uniqueId from 'lodash.uniqueid'

import SuspenseLoading from '../SuspenseLoading'

import {IconProps} from './IconProps.types'
import RenderIcon from './RenderIcon'

const Icon: FC<IconProps> = props => {
  const id = uniqueId('recylink-icon')

  return (
    <SuspenseLoading className={props.suspenseClassName}>
      <RenderIcon id={id} className={props.className} {...props} />
    </SuspenseLoading>
  )
}

export default React.memo(Icon)
