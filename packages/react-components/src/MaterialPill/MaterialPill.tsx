import React from 'react'

import contrastBackground from '../utils/contrastBackground'

import {MaterialPillProps} from './MaterialPillProps.types'

import './styles.css'

const MaterialPill = (props: MaterialPillProps) => {
  const getClassName = () => {
    const classes = ['recylink-material-pill']

    if (props.className) {
      classes.push(props.className)
    }

    return classes.join(' ')
  }

  const renderMaterialName = () => {
    const color = contrastBackground(props.material.color)

    if (props.href) {
      return (
        <a href={props.href} className="recylink-material-pill-a" style={{color}}>
          {props.material.name}
        </a>
      )
    }

    return <span style={{color}}>{props.material.name}</span>
  }

  const backgroundColor = props.material.color

  return (
    <div className={getClassName()} style={{backgroundColor, ...props.style}}>
      {renderMaterialName()}
    </div>
  )
}

MaterialPill.displayName = 'MaterialPill'
export default MaterialPill
