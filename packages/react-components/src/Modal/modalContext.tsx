import React, {createContext, useEffect, useState} from 'react'
import Modal from './Modal'
import {ModalContextInterface} from './ModalContextInterface'

let ModalContext
const {Provider} = (ModalContext = createContext<ModalContextInterface>({} as any))

const ModalProvider = ({children}) => {
  const [isOpen, setOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState(<span />)
  const [modalProps, setModalProps] = useState({})

  useEffect(() => {
    if (!isOpen) {
      setModalContent(<span />)
      setModalProps({})
    }
  }, [isOpen])

 const handleModal = (content = null, props) => {
    setOpenModal(true)
    setModalProps(props)
    if (content) {
      setModalContent(content)
    }
  }

  return (
    <Provider value={{isOpen, setOpenModal, handleModal, modalContent, setModalContent, setModalProps}}>
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
