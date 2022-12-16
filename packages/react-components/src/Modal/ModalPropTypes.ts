import PropTypes from 'prop-types'

export default {
  title: PropTypes.string,
  confirmText: PropTypes.string,
  confirmDisabled: PropTypes.bool,
  onConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func,

  isOpen: PropTypes.bool,
  handleModal: PropTypes.func,
  setOpenModal: PropTypes.func.isRequired,
  modalContent: PropTypes.any,
  setModalContent: PropTypes.func.isRequired
}
