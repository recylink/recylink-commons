// import React, {useCallback, useEffect, useState} from 'react'
// import PropTypes from 'prop-types'
// import SuspenseLoading from 'App/components/SuspenseLoading'
// import icons from './icons'

// const GetIcon = ({library, icon, className, onClick}) => {
//   const [renderIcon, setRenderIcon] = useState(<span />)

//   const onCLickIcon = useCallback(
//     e => {
//       e.stopPropagation()
//       if (onClick) {
//         onClick(e)
//       }
//     },
//     [onClick]
//   )

//   useEffect(() => {
//     const Icon = icons[library][icon]
//     setRenderIcon(<Icon className={className} onClick={onCLickIcon} />)
//   }, [icon, library, className, onCLickIcon])

//   return renderIcon
// }

// const RenderIcon = props => (
//   <SuspenseLoading block className={props.className}>
//     <GetIcon {...props} />
//   </SuspenseLoading>
// )

// RenderIcon.propTypes = {
//   library: PropTypes.string,
//   icon: PropTypes.string,
//   className: PropTypes.string,
//   onClick: PropTypes.func
// }
// export default React.memo(RenderIcon)
