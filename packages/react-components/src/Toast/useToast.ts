import {useContext} from 'react'
import {ToastContext} from './toastContext'
import {ToastContextInterface} from './ToastContextInterface'

const useToast = () => {
  const {addToast}: ToastContextInterface = useContext(ToastContext)

  return addToast
}

export default useToast
