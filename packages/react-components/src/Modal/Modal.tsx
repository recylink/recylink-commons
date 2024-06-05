import React, {useRef, useState} from 'react'
import {InferProps} from 'prop-types'
import {createPortal} from 'react-dom'
import {useOutsideClick} from '@recylink/react-hooks'
import Button from '../Button'
import ButtonsContainer from '../ButtonsContainer'
import SuspenseLoading from '../SuspenseLoading'
import ModalPropTypes from './ModalPropTypes'

import './styles.css'

const Modal = (props: InferProps<typeof ModalPropTypes>) => {
  const {isOpen, setOpenModal, modalContent, setModalContent}: InferProps<typeof ModalPropTypes> =
    props
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

  const onConfirm = async () => {
    let result = true
    if (props.onConfirm) {
      result = await props.onConfirm()
    }
    if (result !== false) {
      closeAndEmptyModal()
    }
  }

  const onCancel = async () => {
    let result = true
    if (props.onCancel) {
      result = await props.onCancel()
    }
    if (result !== false) {
      closeAndEmptyModal()
    }
  }

  const onClickConfirm = async e => {
    setLoadingConfirm(true)
    if (e) {
      e.preventDefault()
    }
    await onConfirm()
    setLoadingConfirm(false)
  }

  const onClickCancel = async e => {
    setLoadingCancel(true)
    if (e) {
      e.preventDefault()
    }
    await onCancel()
    setLoadingCancel(false)
  }

  const confirmButton = () => {
    
    return (
      <Button
        className={props.confirmButtonClassName}
        primary={props.confirmPrimary ? true : false}
        type="button"
        use="function"
        label={props.confirmText}
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
        className={props.cancelButtonClassName}
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
    <ButtonsContainer position="right">
      {cancelButton()}
      {confirmButton()}
    </ButtonsContainer>
  )

  if (isOpen) {
    return createPortal(
      <div className="overlay">
        <div className="modal" ref={wrapperRef}>
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

Modal.propTypes = ModalPropTypes
Modal.defaultProps = {confirmText: 'Aceptar'}
export default Modal
