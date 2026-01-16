import React, {FC, useRef, useState} from 'react'
import {createPortal} from 'react-dom'

import {useOutsideClick} from '@recylink/react-hooks'

import Button from '../Button'
import ButtonsContainer from '../ButtonsContainer'
import SuspenseLoading from '../SuspenseLoading'

import {ModalProps} from './ModalProps.types'

import './styles.css'

const Modal: FC<ModalProps> = props => {
  const {isOpen, setOpenModal, modalContent, setModalContent, positionContainerButtons} = props
  const [loadingConfirm, setLoadingConfirm] = useState(false)
  const [loadingCancel, setLoadingCancel] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)

  const closeAndEmptyModal = () => {
    setOpenModal(false)
    setModalContent(<span />)
  }

  useOutsideClick(wrapperRef, () => {
    if (!props.disableOutsideClick) {
      closeAndEmptyModal()
    }
  })

  const onConfirm = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (props.onConfirm) {
      const result = await props.onConfirm(e)

      if (result !== true) {
        return
      }
    }
    closeAndEmptyModal()
  }

  const onCancel = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    if (props.onCancel) {
      const result = await props.onCancel(e)

      if (result !== true) {
        return
      }
    }
    closeAndEmptyModal()
  }

  const onClickConfirm = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setLoadingConfirm(true)
    if (e) {
      e.preventDefault()
    }
    await onConfirm(e)
    setLoadingConfirm(false)
  }

  const onClickCancel = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    setLoadingCancel(true)
    if (e) {
      e.preventDefault()
    }
    await onCancel(e)
    setLoadingCancel(false)
  }

  const confirmButton = () => {
    if (!props.confirmText) {
      return null
    }
    return (
      <Button
        className={props.confirmButtonClassName}
        type="button"
        use="function"
        label={props.confirmText || 'Aceptar'}
        onClick={async e => await onClickConfirm(e)}
        disabled={props.confirmDisabled}
        loading={loadingConfirm}
      />
    )
  }

  const cancelButton = () => {
    if (!props.cancelText) {
      return null
    }
    return (
      <Button
        className={props.cancelButtonClassName || 'recylink-button-ghost'}
        type="button"
        use="function"
        label={props.cancelText}
        onClick={async e => await onClickCancel(e)}
        disabled={props.cancelDisabled}
        loading={loadingCancel}
      />
    )
  }

  const renderButtons = () => (
    <ButtonsContainer
      position={positionContainerButtons}
      className={props.buttonsContainerClassName}>
      {cancelButton()}
      {confirmButton()}
    </ButtonsContainer>
  )

  if (isOpen) {
    return createPortal(
      <div className="overlay">
        <div className={`modal ${props.modalContainerClassName || ''}`} ref={wrapperRef}>
          <div className="modal-content">
            <div className="modal-title">{props.title}</div>
            <SuspenseLoading>{modalContent}</SuspenseLoading>
          </div>
          {renderButtons()}
        </div>
      </div>,
      document.querySelector('#modal-root')
    )
  } else return null
}

export default Modal
