import PropTypes from 'prop-types'

export default {
  title: PropTypes.string,
  confirmText: PropTypes.string,
  confirmDisabled: PropTypes.bool,
  confirmButtonClassName: PropTypes.string,
  onConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  cancelDisabled: PropTypes.bool,
  cancelButtonClassName: PropTypes.string,
  onCancel: PropTypes.func,
  contentClassName: PropTypes.string,
  disableOutsideClick: PropTypes.bool,
  confirmPrimary: PropTypes.bool,
  isOpen: PropTypes.bool,
  handleModal: PropTypes.func,
  setOpenModal: PropTypes.func.isRequired,
  modalContent: PropTypes.any,
  setModalContent: PropTypes.func.isRequired,
  setModalProps: PropTypes.func
}
