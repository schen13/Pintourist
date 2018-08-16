import * as PinningAPIUtil from '../util/pinning_api_util';

export const RECEIVE_SINGLE_PINNING = 'RECEIVE_SINGLE_PINNING';
export const REMOVE_PINNING = 'REMOVE_PINNING';

export const createPinning = pinning => dispatch => (
  PinningAPIUtil.createPinning(pinning).then(
    res => dispatch(receiveSinglePinning(res))
  )
);

export const deletePinning = pinning => dispatch => (
  PinningAPIUtil.deletePinning(pinning).then(
    res => dispatch(removePinning(res))
  )
);

const receiveSinglePinning = pinning => ({
  type: RECEIVE_SINGLE_PINNING,
  pinning
});

const removePinning = pinningId => ({
  type: REMOVE_PINNING,
  pinningId
});