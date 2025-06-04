import React, {useState, useEffect} from 'react'
import {InferProps} from 'prop-types'
import ToastPropTypes from './ToastPropTypes'
import Button from '../Button'
import Icon from '../Icon'

import './styles.css'

const types = {
  danger: {title: 'Error', color: '#f03a47', icon: 'FiXCircle'},
  warning: {title: 'Advertencia', color: '#fa7505', icon: 'FiAlertCircle'},
  news: {title: 'Información', color: '#0069A6', icon: 'FiInfo'},
  success: {title: 'Ok', color: '#27AE60', icon: 'FiCheckCircle'}
}

const Toast = (props: InferProps<typeof ToastPropTypes>) => {
  const {
    id,
    title,
    description,
    type,
    autoDelete,
    autoDeleteTime,
    deleteToast
  }: InferProps<typeof ToastPropTypes> = props
  const [hide, setHide] = useState(false)

  const toastType = types[type]

  useEffect(() => {
    const callHide = setTimeout(() => {
      setHide(true)
    }, autoDeleteTime)
    return () => clearTimeout(callHide)
  }, [autoDeleteTime])

  useEffect(() => {
    const call = setTimeout(() => {
      if (autoDelete && hide) {
        deleteToast()
      }
    }, 700)
    return () => clearTimeout(call)
  }, [autoDelete, deleteToast, hide])

  return (
    <>
      <div
        className={`toast toast-position-top-right ${hide ? 'hide-toast' : ''}`}
        style={{backgroundColor: toastType.color}}>
        <Button
          type="icon"
          iconLibrary="fi"
          iconName={'FiX'}
          className={'toast-close-button'}
          onClick={e => deleteToast(id)}
          use="function"
        />
        <div className={'toast-image'}>
          <Icon library="fi" icon={toastType.icon} className={'toast-icon'} />
        </div>
        <div>
          <p className={'toast-title'}>{title}</p>
          <p className={'toast-message'}>{description}</p>
        </div>
      </div>
    </>
  )
}

Toast.propTypes = ToastPropTypes
Toast.defaultProps = {
  autoDelete: true,
  autoDeleteTime: 3000
}
export default React.memo(Toast)
