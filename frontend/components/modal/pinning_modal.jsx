import React from 'react';
import CreatePinningContainer from '../pinning/create_pinning_container';
import { connect } from 'react-redux';

const PinningModal = ({ pinningModal, closePinningModal }) => {
  if (!pinningModal) return null;
  return (
    <div className="pinning-modal-background" onClick={closePinningModal}>
      <div className="pinning-modal-child" onClick={e => e.stopPropagation()} >
        <CreatePinningContainer />
      </div>
    </div>
  );
};

import { closePinningModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  pinningModal: state.ui.pinningModal
});

const mapDispatchToProps = dispatch => ({
  closePinningModal: () => dispatch(closePinningModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (PinningModal);