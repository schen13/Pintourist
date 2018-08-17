import React from 'react';
import { connect } from 'react-redux';
import PinDetail from './pin_detail';
import { withRouter } from 'react-router-dom';
import { fetchSinglePin, updatePin } from '../../actions/pin_actions';
import { openPinModal, openPinningModal } from '../../actions/modal_actions';
import { fetchDesiredUser } from '../../actions/user_actions';

const mapStateToProps = ({ entities: { pins, users } }, ownProps) => {
  const pin = pins[ownProps.match.params.pinId];
  return {
    pin,
    users
  };
};

const mapDispatchToProps = dispatch => ({
  processForm: pinId => dispatch(updatePin(pinId)),
  fetchSinglePin: id => dispatch(fetchSinglePin(id)),
  fetchDesiredUser: id => dispatch(fetchDesiredUser(id)),
  openPinModal: (
    <div
      className="pin-detail-edit-container"
      onClick={() => dispatch(openPinModal('edit'))}
    >
      <i className="fas fa-pencil-alt"></i>
    </div>
  ),
  openPinningModal: () => dispatch(openPinningModal('create'))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinDetail));
