import * as PinningAPIUtil from '../util/pinning_api_util';
import { openNotification, closeNotification } from '../actions/notification_actions';

export const RECEIVE_ALL_PINNINGS = 'RECEIVE_ALL_PINNINGS';
export const RECEIVE_SINGLE_PINNING = 'RECEIVE_SINGLE_PINNING';
export const REMOVE_PINNING = 'REMOVE_PINNING';

export const fetchAllPinnings = () => dispatch => (
  PinningAPIUtil.fetchAllPinnings().then(
    res => dispatch(receiveAllPinnings(res))
  )
);

export const createPinning = pinning => dispatch => (
  PinningAPIUtil.createPinning(pinning).then(
    res => {
      dispatch(receiveSinglePinning(res));
      dispatch(openNotification("Pin Saved!"));
      setTimeout(() => dispatch(closeNotification()), 3000);
    },
    err => {
      dispatch(openNotification("Already saved to this board."));
      setTimeout(() => dispatch(closeNotification()), 3000);
    }
  )
);

export const deletePinning = pinning => dispatch => (
  PinningAPIUtil.deletePinning(pinning).then(
    res => dispatch(removePinning(res))
  )
);

const receiveAllPinnings = pinnings => ({
  type: RECEIVE_ALL_PINNINGS,
  pinnings
});

const receiveSinglePinning = pinning => ({
  type: RECEIVE_SINGLE_PINNING,
  pinning
});

const removePinning = pinningId => ({
  type: REMOVE_PINNING,
  pinningId
});