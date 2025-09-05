import React, { forwardRef } from 'react'
import { InferProps } from 'prop-types'
import keys from 'lodash.keys'
import omit from 'lodash.omit'
import './styles.css'
import MaterialPillPropTypes from './MaterialPillPropTypes'
import { MaterialPillInterface } from './MaterialPillInterface'

const defaultProps = {
  style: {},
  className: '',
  url: undefined,
  children: undefined
}

const MaterialPill = forwardRef<HTMLDivElement, InferProps<typeof MaterialPillPropTypes> & MaterialPillInterface>((props, ref) => {
  const getChildProps = () => {
    const omitKeys = keys(MaterialPillPropTypes)
    return omit(props, ...omitKeys)
  }

  const getClassName = () => {
    const classes = ['recylink-material-pill']
    
    if (props.className) {
      classes.push(props.className)
    }
    
    return classes.join(' ')
  }

  const getContrastColor = (backgroundColor: string): string => {
    // Simple contrast calculation - can be enhanced with a proper contrast library
    const hex = backgroundColor.replace('#', '')
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000
    return brightness > 128 ? '#000000' : '#ffffff'
  }

  const renderMaterialCategory = () => {
    if (props.url) {
      return (
        <a 
          href={props.url} 
          className="recylink-material-pill-link"
          style={{ color: getContrastColor(props.material.color) }}
        >
          {props.material.category}
        </a>
      )
    }
    return props.material.category
  }

  if (!props.material?.category) {
    return null
  }

  const color = getContrastColor(props.material.color)
  const backgroundColor = props.material.color

  return (
    <div
      ref={ref}
      className={getClassName()}
      style={{ color, backgroundColor, ...props.style }}
      {...getChildProps()}
    >
      {renderMaterialCategory()}
      {props.children}
    </div>
  )
})

MaterialPill.propTypes = MaterialPillPropTypes
MaterialPill.defaultProps = defaultProps
MaterialPill.displayName = 'MaterialPill'

export default MaterialPill
