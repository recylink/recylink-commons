import React, {useState, useEffect} from 'react'
import { Icon, Button} from '@recylink/react-components'
import { InferProps } from 'prop-types'
import ToastPropTypes from './ToastPropTypes'

import './styles.css'

const types = {
  danger: { title: 'Error', color: 'var(--red)', icon: 'FiXCircle' },
  warning: { title: 'Advertencia', color: '#fa7505', icon: 'FiAlertCircle' },
  alert: { title: 'Alerta', color: '#f4b642', icon: 'FiAlertCircle' },
  news: { title: 'Información', color: 'var(--blue)', icon: 'FiInfo' },
  success: { title: 'Ok', color: '#27AE60', icon: 'FiCheckCircle' }
}

const Toast = (props: InferProps<typeof ToastPropTypes>) => {
  const { id, title, description, type, autoDelete, autoDeleteTime, deleteToast }: InferProps<typeof ToastPropTypes> = props
  const [hide, setHide] = useState(false)

  const notificationType = types[type]

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
        className={`notification toast bottomRight ${hide ? 'hide' : ''}`}
        style={{ backgroundColor: notificationType.color }}>
        <Button
          type="icon"
          iconLibrary="fi"
          iconName={'FiX'}
          className={'buttonClose'}
          onClick={(e) => deleteToast(id)}
          use="function"
        />
        <div className={'notificationImage'}>
          <Icon library="fi" icon={notificationType.icon} className={'icon'} />
        </div>
        <div>
          <p className={'notificationTitle'}>{title}</p>
          <p className={'notificationMessage'}>{description}</p>
        </div>
      </div>
    </>)

}

Toast.propTypes = ToastPropTypes
Toast.defaultProps = {
  autoDelete: true,
  autoDeleteTime: 3000
}
export default React.memo(Toast)
