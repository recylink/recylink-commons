import React, {createContext, FC, PropsWithChildren, ReactNode, useEffect, useState} from 'react'

import Modal from './Modal'
import {ModalContextProps, ModalProps} from './ModalProps.types'

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps)
const Provider = ModalContext.Provider

const ModalProvider: FC<PropsWithChildren<ModalContextProps>> = ({children}) => {
  const [isOpen, setOpenModal] = useState<boolean>(false)
  const [modalContent, setModalContent] = useState<ReactNode>(<span />)
  const [modalProps, setModalProps] = useState<ModalProps>({})

  useEffect(() => {
    if (!isOpen) {
      setModalContent(<span />)
      setModalProps({})
    }
  }, [isOpen])

  const handleModal = (content: ReactNode, props: ModalProps) => {
    setOpenModal(true)
    setModalProps(props)
    if (content) {
      setModalContent(content)
    }
  }

  return (
    <Provider
      value={{isOpen, setOpenModal, handleModal, modalContent, setModalContent, setModalProps}}>
      <Modal
        {...modalProps}
        isOpen={isOpen}
        setOpenModal={setOpenModal}
        modalContent={modalContent}
        setModalContent={setModalContent}
      />
      {children}
    </Provider>
  )
}

export {ModalContext, ModalProvider}
