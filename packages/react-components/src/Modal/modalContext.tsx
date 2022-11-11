import React, {createContext, useState} from 'react'
import Modal from './Modal'
import {ModalContextInterface} from './ModalContextInterface'

let ModalContext
const {Provider} = (ModalContext = createContext<ModalContextInterface>({} as any))

const ModalProvider = ({children}) => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(<span />)
  const [modalProps, setModalProps] = useState({})

  const handleModal = (content = null, props) => {
    setShowModal(!showModal)
    setModalProps(props)
    if (content) {
      setModalContent(content)
    }
  }

  return (
    <Provider value={{showModal, handleModal, modalContent}}>
      <Modal
        {...modalProps}
        showModal={showModal}
        handleModal={handleModal}
        modalContent={modalContent}
      />
      {children}
    </Provider>
  )
}

export {ModalContext, ModalProvider}
