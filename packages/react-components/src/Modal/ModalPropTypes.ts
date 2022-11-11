import PropTypes from 'prop-types'

export default {
  confirmText: PropTypes.string,
  onConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func,

  showModal: PropTypes.bool,
  handleModal: PropTypes.func,
  modalContent: PropTypes.any
}
