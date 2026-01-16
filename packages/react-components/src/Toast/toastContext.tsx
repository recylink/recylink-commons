import React, {createContext, PropsWithChildren, useState} from 'react'
import {createPortal} from 'react-dom'

import clonedeep from 'lodash.clonedeep'

import Toast from './Toast'
import {ToastContextProps, ToastProps} from './ToastProps.types'

import './styles.css'

let ToastContext: React.Context<ToastContextProps>

const {Provider} = (ToastContext = createContext<ToastContextProps>({} as ToastContextProps))

type ToastListProps = {
  id: string
  props: ToastProps
}

type ToastListStateProps = {
  list: ToastListProps[]
  counter: number
}

const ToastProvider = ({children}: PropsWithChildren<ToastContextProps>): JSX.Element => {
  const [toastList, setToastList] = useState<ToastListStateProps>({list: [], counter: 0})

  const addToast = (toast: ToastProps) => {
    setToastList(currentList => {
      const newToastList = [...currentList.list, {id: `toast_${currentList.counter}`, props: toast}]
      return {list: newToastList, counter: currentList.counter + 1}
    })
  }

  const deleteToast = (id: string) => {
    setToastList((currentList: ToastListStateProps) => {
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
          {toastList.list.map((toast: ToastListProps) => (
            <Toast
              key={toast.id}
              {...toast.props}
              id={toast.id}
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
