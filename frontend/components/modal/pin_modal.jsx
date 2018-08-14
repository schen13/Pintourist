import React from 'react';
import CreatePinFormContainer from '../pin/form/create_pin_form_container';
import EditPinFormContainer from '../pin/form/edit_pin_form_container';
import { connect } from 'react-redux';

const PinModal = ({ pinModal, closePinModal }) => {
  if (!pinModal) return null;
  let component;
  switch (pinModal) {
    case 'create':
      component = <CreatePinFormContainer />;
      break;
    case 'edit':
      component = <EditPinFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="pin-modal-background" onClick={closePinModal}>
      <div className="pin-modal-child" onClick={e => e.stopPropagation()} >
        {component}
      </div>
    </div>
  );
};

import { closePinModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  pinModal: state.ui.pinModal
});

const mapDispatchToProps = dispatch => ({
  closePinModal: () => dispatch(closePinModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (PinModal);