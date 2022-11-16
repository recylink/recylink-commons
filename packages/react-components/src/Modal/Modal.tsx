import React, {useRef, useState} from 'react'
import {InferProps} from 'prop-types'
import ReactDOM from 'react-dom'
import {useOutsideClick} from '@recylink/react-hooks'
import Button from '../Button'
import ButtonsContainer from '../ButtonsContainer'
import SuspenseLoading from '../SuspenseLoading'
import ModalPropTypes from './ModalPropTypes'

import './styles.css'

const Modal = (props: InferProps<typeof ModalPropTypes>) => {
  const {showModal, setShowModal, modalContent}: InferProps<typeof ModalPropTypes> = props
  const [loadingConfirm, setLoadingConfirm] = useState(false)

  const wrapperRef = useRef<HTMLDivElement>(null)

  useOutsideClick(wrapperRef, () => setShowModal(false))

  const onClickConfirm = async e => {
    setLoadingConfirm(true)
    e.preventDefault()
    if (props.onConfirm) {
      await props.onConfirm()
    }
    setLoadingConfirm(false)
    setShowModal(false)
  }

  const onClickCancel = async e => {
    e.preventDefault()
    if (props.onCancel) {
      await props.onCancel()
    }
    setShowModal(false)
  }

  const confirmButton = () => (
    <Button
      primary
      type="button"
      use="function"
      label={props.confirmText}
      onClick={async e => await onClickConfirm(e)}
      disabled={props.confirmDisabled}
    />
  )

  const cancelButton = () => {
    if (!props.cancelText) {
      return null
    }
    return (
      <Button
        danger
        type="button"
        use="function"
        label={props.cancelText}
        onClick={async e => await onClickCancel(e)}
      />
    )
  }

  const renderButtons = () => (
    <ButtonsContainer position="right">
      {cancelButton()}
      {confirmButton()}
    </ButtonsContainer>
  )

  if (showModal) {
    return ReactDOM.createPortal(
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
