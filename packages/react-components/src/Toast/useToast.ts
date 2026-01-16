import {useContext} from 'react'

import {ToastContext} from './toastContext'
import {ToastContextProps} from './ToastProps.types'

const useToast = () => {
  const {addToast}: ToastContextProps = useContext(ToastContext)

  return addToast
}

export default useToast
