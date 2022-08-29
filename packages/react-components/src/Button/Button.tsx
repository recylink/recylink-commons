import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react'
import keys from 'lodash.keys'
import omit from 'lodash.omit'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Tooltip from '../Tooltip'
import Icon from '../Icon'
import './styles.css'

const debounce = (func: Function, time: number, immediate?: boolean) => {
  var timeout: any
  return (...args) => {
    var context = this
    const later = () => {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, time)
    if (callNow) func.apply(context, args)
  }
}

const buttonProperties = {
  id: PropTypes.string,
  tooltip: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  linkButton: PropTypes.bool,
  label: PropTypes.any,
  children: PropTypes.any,
  primary: PropTypes.bool,
  ghost: PropTypes.bool,
  danger: PropTypes.bool,
  link: PropTypes.bool,
  default: PropTypes.bool,
  big: PropTypes.bool,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingComponent: PropTypes.node,
  fullWidth: PropTypes.bool,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  state: PropTypes.object,
  noLoading: PropTypes.bool,
  containerClassName: PropTypes.string,
  className: PropTypes.string,
  small: PropTypes.bool,
  iconName: PropTypes.string,
  iconLibrary: PropTypes.string,

  type: PropTypes.string,
  use: PropTypes.string
}

const Button = forwardRef((props: any, buttonRef) => {
  const [loading, setLoading] = useState(false)
  const [isMounted, setMounted] = useState(true)

  useEffect(() => {
    return () => setMounted(false)
  }, [])

  const click = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (props.disabled || props.loading || loading) return null
    if (!props.noLoading) {
      setLoading(true)
    }
    try {
      await debounce(await props.onClick(e), 250)
    } catch (error) {
      setLoading(false)
    }
    if (isMounted && !props.noLoading) {
      setLoading(false)
    }
  }

  useImperativeHandle(buttonRef, () => ({onClick: async (e: any) => await click(e)}))

  const getChildProps = () => {
    const omitKeys = keys(buttonProperties)
    return omit(props, ...omitKeys)
  }

  const getClassName = () => {
    const classes = ['recylink-button']
    if (props.disabled) {
      if (props.link) {
        classes.push('recylink-button-link-disabled')
      } else if (props.ghost) {
        classes.push('recylink-button-ghost-disabled')
      } else {
        classes.push('recylink-button-disabled')
      }
    } else {
      if (props.loading || loading) {
        classes.push('recylink-button-loading')
      } else if (props.danger) {
        classes.push('recylink-button-danger')
      } else if (props.default) {
        classes.push('recylink-button-default')
      } else if (props.primary) {
        classes.push('recylink-button-primary')
      } else if (props.ghost) {
        classes.push('recylink-button-ghost')
      } else if (props.link) {
        classes.push('recylink-button-link')
      }
    }
    if (props.big) {
      classes.push('recylink-button-big')
    }
    if (props.small) {
      classes.push('recylink-button-small')
    }
    if (props.fullWidth) {
      classes.push('recylink-button-fullWidth')
    }
    if (props.className) {
      classes.push(props.className)
    }
    return classes.join(' ')
  }

  const renderButtonInner = () => {
    if (props.loading || loading) {
      return props.loadingComponent || null
    }
    if (props.icon) {
      return (
        <span>
          {renderIconType()}
          {props.children}
          {props.label}
        </span>
      )
    } else {
      return props.label || props.children
    }
  }

  const renderButtonType = () => (
    <span id={props.id} className={getClassName()} style={props.style}>
      {renderButtonInner()}
    </span>
  )

  const renderIconType = () => (
    <Icon
      className={`recylink-icon-button ${props.className}`}
      library={props.iconLibrary}
      icon={props.iconName}
      onClick={async (e: any) => await click(e)}
    />
  )

  const renderButton = () => {
    const buttonType = buttonTypes[props.type]
    if (!buttonType) {
      return 'Error: Type not valid'
    }
    return buttonType()
  }

  const renderLinkButton = () => (
    <Link
      id={props.id}
      to={props.disabled ? '#' : props.to}
      state={props.disabled ? {} : props.state}
      className={`recylink-button-container ${props.containerClassName}`}>
      {renderButton()}
    </Link>
  )

  const renderHrefButton = () => (
    <a
      id={props.id}
      className={`recylink-href-button ${getClassName()}`}
      href={props.href}
      target="blank"
      rel="noopener">
      {renderButtonInner()}
    </a>
  )

  const renderFunctionButton = () => (
    <span
      className={`recylink-button-container ${props.containerClassName}`}
      {...getChildProps()}
      onClick={async e => await click(e)}>
      {renderButton()}
    </span>
  )

  const buttonTypes = {
    button: () => renderButtonType(),
    icon: () => renderIconType()
  }

  const buttonUses = {
    href: () => renderHrefButton(),
    link: () => renderLinkButton(),
    function: () => renderFunctionButton()
  }

  const renderMain = () => {
    const buttonUse = buttonUses[props.use]
    if (!buttonUse) {
      return 'Error: Use not valid'
    }
    return buttonUse()
  }

  if (props.tooltip) {
    return <Tooltip content={props.tooltip}>{renderMain()}</Tooltip>
  } else {
    return renderMain()
  }
})

Button.propTypes = buttonProperties
Button.defaultProps = {
  linkButton: false,
  primary: false,
  danger: false,
  big: false,
  style: {},
  disabled: false,
  fullWidth: false,
  state: {},
  onClick: () => {},
  noLoading: false,
  type: 'button',
  use: 'function'
}
Button.displayName = 'Button'
export default Button
