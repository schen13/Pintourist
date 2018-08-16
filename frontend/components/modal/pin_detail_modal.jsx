import React from 'react';
import PinDetailContainer from '../pin/pin_detail_container';
import { connect } from 'react-redux';

const PinDetailModal = ({ pinDetailModal, closePinDetailModal }) => {
  if (!pinDetailModal) return null;
  return (
    <div className="pin-detail-modal-background" onClick={closePinDetailModal}>
      <div className="pin-detail-modal-child" onClick={e => e.stopPropagation()} >
        {PinDetailContainer}
      </div>
    </div>
  );
};

import { closePinDetailModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  pinDetailModal: state.ui.pinDetailModal
});

const mapDispatchToProps = dispatch => ({
  closePinDetailModal: () => dispatch(closePinDetailModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (PinDetailModal);