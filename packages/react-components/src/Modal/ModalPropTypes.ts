import PropTypes from 'prop-types'

export default {
  title: PropTypes.string,
  confirmText: PropTypes.string,
  onConfirm: PropTypes.func,
  cancelText: PropTypes.string,
  onCancel: PropTypes.func,

  showModal: PropTypes.bool,
  handleModal: PropTypes.func,
  setShowModal: PropTypes.func.isRequired,
  modalContent: PropTypes.any
}
