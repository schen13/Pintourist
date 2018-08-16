export const OPEN_SIGNUP_MODAL = 'OPEN_SIGNUP_MODAL';
export const CLOSE_SIGNUP_MODAL = 'CLOSE_SIGNUP_MODAL';
export const OPEN_BOARD_MODAL = 'OPEN_BOARD_MODAL';
export const CLOSE_BOARD_MODAL = 'CLOSE_BOARD_MODAL';
export const OPEN_PIN_MODAL = 'OPEN_PIN_MODAL';
export const CLOSE_PIN_MODAL = 'CLOSE_PIN_MODAL';
export const OPEN_PIN_DETAIL_MODAL = 'OPEN_PIN_DETAIL_MODAL';
export const CLOSE_PIN_DETAIL_MODAL = 'CLOSE_PIN_DETAIL_MODAL';
export const OPEN_PINNING_MODAL = 'OPEN_PINNING_MODAL';
export const CLOSE_PINNING_MODAL = 'CLOSE_PINNING_MODAL';

export const openSignupModal = modal => ({
  type: OPEN_SIGNUP_MODAL,
  modal
});

export const closeSignupModal = () => ({
  type: CLOSE_SIGNUP_MODAL
});

export const openBoardModal = modal => ({
  type: OPEN_BOARD_MODAL,
  modal
});

export const closeBoardModal = () => ({
  type: CLOSE_BOARD_MODAL
});

export const openPinModal = modal => ({
  type: OPEN_PIN_MODAL,
  modal
});

export const closePinModal = () => ({
  type: CLOSE_PIN_MODAL
});

// export const openPinDetailModalRedirect = modal => dispatch => (
//   dispatch(openPinDetailModal(modal)).then(this.props.history.push)
// );

export const openPinDetailModal = modal => ({
  type: OPEN_PIN_DETAIL_MODAL,
  modal
});

export const closePinDetailModal = () => ({
  type: CLOSE_PIN_DETAIL_MODAL
});

export const openPinningModal = modal => ({
  type: OPEN_PINNING_MODAL,
  modal
});

export const closePinningModal = () => ({
  type: CLOSE_PINNING_MODAL
});