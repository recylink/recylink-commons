import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react'
import {InferProps} from 'prop-types'
import keys from 'lodash.keys'
import omit from 'lodash.omit'
import {Link} from 'react-router-dom'
import ButtonLoading from './ButtonLoading'
import Tooltip from '../Tooltip'
import Icon from '../Icon'
import './styles.css'
import ButtonPropTypes from './ButtonPropTypes'

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

const Button = forwardRef((props: InferProps<typeof ButtonPropTypes>, buttonRef) => {
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
      await debounce(await props.onClick?.(e), 250)
    } catch (error) {
      setLoading(false)
    }
    if (isMounted && !props.noLoading) {
      setLoading(false)
    }
  }

  useImperativeHandle(buttonRef, () => ({onClick: async (e: any) => await click(e)}))

  const getChildProps = () => {
    const omitKeys = keys(ButtonPropTypes)
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
      return props.loadingComponent || <ButtonLoading />
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
    <span id={props.id || undefined} className={getClassName()} style={props.style || {}}>
      {renderButtonInner()}
    </span>
  )

  const renderIconType = () => {
    if (!props.iconLibrary) {
      return 'Error: iconLibrary needed'
    }
    if (!props.iconName) {
      return 'Error: iconName needed'
    }
    return (
      <Icon
        className={`recylink-icon-button ${props.className}`}
        library={props.iconLibrary}
        icon={props.iconName}
        onClick={async (e: any) => await click(e)}
      />
    )
  }

  const renderButton = () => {
    const buttonType = buttonTypes[props.type]
    if (!buttonType) {
      return 'Error: Type not valid'
    }
    return buttonType()
  }

  const renderLinkButton = () => {
    if (!props.to) {
      return `Error: "to" url prop needed`
    }
    return (
      <Link
        id={props.id || undefined}
        to={props.disabled ? '#' : props.to}
        state={props.disabled ? {} : props.state}
        className={`recylink-button-container ${props.containerClassName}`}>
        {renderButton()}
      </Link>
    )
  }

  const renderHrefButton = () => {
    if (!props.href) {
      return `Error: "href" url prop needed`
    }
    return (
      <a
        id={props.id || undefined}
        className={`recylink-href-button ${getClassName()}`}
        href={props.href}
        target="blank"
        rel="noopener">
        {renderButtonInner()}
      </a>
    )
  }

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
    return (
      <Tooltip place="top" type="info" content={props.tooltip}>
        {renderMain()}
      </Tooltip>
    )
  } else {
    return renderMain()
  }
})

Button.propTypes = ButtonPropTypes
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
