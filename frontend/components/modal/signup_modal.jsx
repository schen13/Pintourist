import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

const SignupModal = ({ signupModal }) => {
  if (!signupModal) return null;
  let component;
  switch (signupModal) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'login':
      component = <LoginFormContainer />;
      break;
    default:
      return null;
  }
  return <div className="signup-modal-background">{component}</div>;
};

const mapStateToProps = state => ({
  signupModal: state.ui.signupModal
});

export default connect(
  mapStateToProps,
  null
)(SignupModal);
