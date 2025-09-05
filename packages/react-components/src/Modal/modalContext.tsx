import React, {FC, PropsWithChildren, ReactNode, createContext, useEffect, useState} from 'react'
import Modal from './Modal'
import {ModalContextInterface} from './ModalContextInterface'
import {ModalContextProps} from './ModalContextProps'
import {ModalProps} from './ModalProps'

const ModalContext = createContext<ModalContextInterface>({} as ModalContextInterface)
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
