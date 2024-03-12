import {ToastItem} from './ToastItemInterface'

export interface ToastContextInterface {
  addToast: (toast: ToastItem) => any
}
