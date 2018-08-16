import React from 'react';
import { connect } from 'react-redux';
import PinIndex from './pin_index';
import {
  fetchAllPins,
  deletePin,
  createPin
} from '../../actions/pin_actions';
import { openPinModal, openPinDetailModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
  pins: ownProps.pins
});

const mapDispatchToProps = dispatch => ({
  fetchAllPins: () => dispatch(fetchAllPins()),
  createPin: pin => dispatch(createPin(pin)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  openPinModal: (
    <div
      className="pin-modal-container"
      onClick={() => dispatch(openPinModal('create'))}
    >
      <div className="pin-modal-thumbnail">
        <div className="pin-create-icon">
          <i className="fas fa-plus-circle"></i>
        </div>
      </div>
      <div className="pin-title-link">Create Pin</div>
    </div >
  ),
  openPinDetailModal: () => dispatch(openPinDetailModal('show'))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);