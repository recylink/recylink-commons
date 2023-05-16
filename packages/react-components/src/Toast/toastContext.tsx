import React, {createContext, useState} from 'react'
import {ToastContextInterface} from './ToastContextInterface'
import {createPortal} from 'react-dom'
import clonedeep from 'lodash.clonedeep'
import Toast from './Toast'
import './styles.css'

let ToastContext
const {Provider} = (ToastContext = createContext<ToastContextInterface>({} as any))

const ToastProvider = ({children}) => {
  const [toastList, setToastList] = useState<any>({list: [], counter: 0})

  const addToast = (toast: Object) => {
    setToastList(currentList => {
      const newToastList = [...currentList.list, {id: `toast_${currentList.counter}`, props: toast}]
      return {list: newToastList, counter: currentList.counter + 1}
    })
  }

  const deleteToast = (id: string) => {
    setToastList((currentList: {list: any[]; counter: any}) => {
      const toastIndex = currentList.list.findIndex(t => t.id === id)
      if (toastIndex > -1) {
        const newToastList = clonedeep(currentList.list)
        newToastList.splice(toastIndex, 1)
        return {list: newToastList, counter: currentList.counter}
      }
      return currentList
    })
  }

  return (
    <Provider value={{addToast}}>
      {createPortal(
        <div className={`toast-container toast-position-top-right`}>
          {toastList.list.map((toast: any) => (
            <Toast
              key={toast.id}
              id={toast.id}
              {...toast.props}
              deleteToast={() => deleteToast(toast.id)}
            />
          ))}
        </div>,
        document.querySelector('#toast-root')
      )}
      {children}
    </Provider>
  )
}

export {ToastProvider, ToastContext}
