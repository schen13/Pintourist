import React from 'react';
import { connect } from 'react-redux';
import PinDetail from './pin_detail';
import { withRouter } from 'react-router-dom';
import { fetchSinglePin } from '../../actions/pin_actions';
import { openPinModal } from '../../actions/modal_actions';
import { updatePin } from '../../actions/pin_actions';

const mapStateToProps = ({ entities: { pins, users } }, ownProps) => {
  const pin = pins[ownProps.match.params.pinId];
  return {
    pin,
    username: users[pin.userId].username
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: pinId => dispatch(updatePin(pinId)),
  fetchSinglePin: id => dispatch(fetchSinglePin(id)),
  openPinModal: (
    <div
      className="pin-detail-edit-container"
      onClick={() => dispatch(openPinModal('edit'))}
    >
      <i className="fas fa-pencil-alt"></i>
    </div>
  ),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinDetail));
