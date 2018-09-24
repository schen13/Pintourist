import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_SINGLE_PIN = 'RECEIVE_SINGLE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';
export const REMOVE_PIN_ERRORS = 'REMOVE_PIN_ERRORS';
export const LOAD_PIN = 'LOAD_PIN';

export const loadPin = loadedPin => ({
  type: LOAD_PIN,
  loadedPin
});

export const fetchAllPins = () => dispatch => (
  PinAPIUtil.fetchAllPins().then(
    res => dispatch(receiveAllPins(res)))
);

export const fetchSinglePin = id => dispatch => (
  PinAPIUtil.fetchSinglePin(id).then(
    res => dispatch(receiveSinglePin(res)))
);

export const createPin = pin => dispatch => (
  PinAPIUtil.createPin(pin).then(
    res => dispatch(receiveSinglePin(res)),
    errors => dispatch(receivePinErrors(errors.responseJSON))
  )
);

export const updatePin = pin => dispatch => (
  PinAPIUtil.updatePin(pin).then(
    res => dispatch(receiveSinglePin(res)),
    errors => dispatch(receivePinErrors(errors.responseJSON)))
);

export const deletePin = pinId => dispatch => (
  PinAPIUtil.deletePin(pinId).then(
    res => dispatch(removePin(res.id)),
    errors => dispatch(receivePinErrors(errors.responseJSON)))
);

const receiveAllPins = pins => ({
  type: RECEIVE_ALL_PINS,
  pins
});

const receiveSinglePin = pin => ({
  type: RECEIVE_SINGLE_PIN,
  pin
});

const removePin = pinId => ({
  type: REMOVE_PIN,
  pinId
});

const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

export const removePinErrors = () => ({
  type: REMOVE_PIN_ERRORS
});