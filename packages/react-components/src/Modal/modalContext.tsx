import React, {createContext, useEffect, useState} from 'react'
import Modal from './Modal'
import {ModalContextInterface} from './ModalContextInterface'

let ModalContext
const {Provider} = (ModalContext = createContext<ModalContextInterface>({} as any))

const ModalProvider = ({children}) => {
  const [showModal, setShowModal] = useState(false)
  const [modalContent, setModalContent] = useState(<span />)
  const [modalProps, setModalProps] = useState({})

  useEffect(() => {
    if (!showModal) {
      setModalContent(<span />)
      setModalProps({})
    }
  }, [showModal])

  const handleModal = (content = null, props) => {
    setShowModal(true)
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
        setShowModal={setShowModal}
        modalContent={modalContent}
      />
      {children}
    </Provider>
  )
}

export {ModalContext, ModalProvider}
