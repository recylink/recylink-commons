// import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react'
// import styles from './styles.module.css'
// import keys from 'lodash/keys'
// import omit from 'lodash/omit'
// import PropTypes from 'prop-types'
// import BounceLoading from 'orionsoft-parts/lib/components/BounceLoading'
// import {Link} from 'react-router-dom'
// import Tooltip from 'App/components/Tooltip'
// import Icon from 'App/components/renders/Icon'

// const debounce = (func: Function, time: number, immediate?: boolean) => {
//   var timeout: any
//   return (...args) => {
//     var context = this
//     const later = () => {
//       timeout = null
//       if (!immediate) func.apply(context, args)
//     }
//     var callNow = immediate && !timeout
//     clearTimeout(timeout)
//     timeout = setTimeout(later, time)
//     if (callNow) func.apply(context, args)
//   }
// }

// const buttonProperties = {
//   id: PropTypes.string,
//   tooltip: PropTypes.string,
//   to: PropTypes.string,
//   href: PropTypes.string,
//   linkButton: PropTypes.bool,
//   label: PropTypes.any,
//   children: PropTypes.any,
//   primary: PropTypes.bool,
//   ghost: PropTypes.bool,
//   danger: PropTypes.bool,
//   link: PropTypes.bool,
//   default: PropTypes.bool,
//   big: PropTypes.bool,
//   style: PropTypes.object,
//   disabled: PropTypes.bool,
//   loading: PropTypes.bool,
//   fullWidth: PropTypes.bool,
//   icon: PropTypes.any,
//   onClick: PropTypes.func,
//   state: PropTypes.object,
//   noLoading: PropTypes.bool,
//   containerClassName: PropTypes.string,
//   className: PropTypes.string,
//   small: PropTypes.bool,
//   iconName: PropTypes.string,
//   iconLibrary: PropTypes.string
// }

// const Button = forwardRef((props: any, buttonRef) => {
//   const [loading, setLoading] = useState(false)
//   const [isMounted, setMounted] = useState(true)

//   useEffect(() => {
//     return () => setMounted(false)
//   }, [])

//   const click = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
//     if (props.disabled || props.loading || loading) return null
//     if (!props.noLoading) {
//       setLoading(true)
//     }
//     try {
//       await debounce(await props.onClick(e), 250)
//     } catch (error) {
//       setLoading(false)
//     }
//     if (isMounted && !props.noLoading) {
//       setLoading(false)
//     }
//   }

//   useImperativeHandle(buttonRef, () => ({
//     onClick: async (e: any) => await click(e)
//   }))

//   const getChildProps = () => {
//     const omitKeys = keys(buttonProperties)
//     return omit(props, ...omitKeys)
//   }

//   const getClassName = () => {
//     const classes = ['button']
//     if (props.disabled) {
//       if (props.link) {
//         classes.push('button-link-disabled')
//       } else if (props.ghost) {
//         classes.push('button-ghost-disabled')
//       } else {
//         classes.push('button-disabled')
//       }
//     } else {
//       if (props.loading || loading) {
//         classes.push('button-loading')
//       } else if (props.danger) {
//         classes.push('button-danger')
//       } else if (props.default) {
//         classes.push('button-default')
//       } else if (props.primary) {
//         classes.push('button-primary')
//       } else if (props.ghost) {
//         classes.push('button-ghost')
//       } else if (props.link) {
//         classes.push('button-link')
//       }
//     }
//     if (props.big) {
//       classes.push('button-big')
//     }
//     if (props.small) {
//       classes.push('button_small')
//     }
//     if (props.fullWidth) {
//       classes.push('button-fullWidth')
//     }
//     if (props.className) {
//       classes.push(props.className)
//     }
//     return classes.join(' ')
//   }

//   const renderInner = () => {
//     if (props.loading || loading) {
//       return <BounceLoading />
//     }
//     if (props.icon) {
//       return (
//         <span>
//           {renderIcon()}
//           {props.children}
//           {props.label}
//         </span>
//       )
//     } else {
//       return props.label || props.children
//     }
//   }

//   const renderIcon = () => {
//     const icon = props.icon
//     if (!Icon) return null
//     return <Icon className={styles.icon} library="fi" icon={icon} />
//   }

//   const renderButton = () => (
//     <span id={props.id} className={getClassName()} style={props.style}>
//       {renderInner()}
//     </span>
//   )

//   const renderLinkButton = () => (
//     <Link
//       id={props.id}
//       to={props.disabled ? '#' : {pathname: props.to, state: props.state}}
//       className={`os_button_container ${props.containerClassName}`}>
//       {renderButton()}
//     </Link>
//   )

//   const renderAButton = () => (
//     <a id={props.id} className={getClassName()} href={props.href} target="blank" rel="noopener">
//       {renderInner()}
//     </a>
//   )

//   const renderMain = () => {
//     if (props.href) {
//       return renderAButton()
//     } else if (props.linkButton || props.to) {
//       return renderLinkButton()
//     } else if (props.iconName) {
//       return (
//         <Icon
//           className={`icon-button ${props.className}`}
//           library={props.iconLibrary}
//           icon={props.iconName}
//           onClick={async (e: any) => await click(e)}
//         />
//       )
//     } else {
//       return (
//         <span
//           className={`os_button_container ${props.containerClassName}`}
//           {...getChildProps()}
//           onClick={async e => await click(e)}>
//           {renderButton()}
//         </span>
//       )
//     }
//   }

//   if (props.tooltip) {
//     return <Tooltip content={props.tooltip}>{renderMain()}</Tooltip>
//   } else {
//     return renderMain()
//   }
// })

// Button.propTypes = buttonProperties
// Button.defaultProps = {
//   linkButton: false,
//   primary: false,
//   danger: false,
//   big: false,
//   style: {},
//   disabled: false,
//   fullWidth: false,
//   state: {},
//   onClick: () => {},
//   noLoading: false
// }
// Button.displayName = 'Button'
// export default Button
