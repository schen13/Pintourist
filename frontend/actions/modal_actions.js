export const OPEN_SIGNUP_MODAL = 'OPEN_SIGNUP_MODAL';
export const CLOSE_SIGNUP_MODAL = 'CLOSE_SIGNUP_MODAL';
export const OPEN_BOARD_MODAL = 'OPEN_BOARD_MODAL';
export const CLOSE_BOARD_MODAL = 'CLOSE_BOARD_MODAL';
export const OPEN_PIN_MODAL = 'OPEN_PIN_MODAL';
export const CLOSE_PIN_MODAL = 'CLOSE_PIN_MODAL';

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
