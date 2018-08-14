import SignupForm from './signup_form';
import React from 'react';
import { connect } from 'react-redux';
import { signup, login, removeSessionErrors } from '../../actions/session_actions';
import { openSignupModal, closeSignupModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up',
  otherFormType: '/login'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <div className="other-form" onClick={() => dispatch(openSignupModal('login'))}>
      Log In
    </div>
  ),
  closeSignupModal: () => dispatch(closeSignupModal()),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(removeSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
