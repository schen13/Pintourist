import LoginForm from './login_form';
import React from 'react';
import { connect } from 'react-redux';
import { login, removeSessionErrors } from '../../actions/session_actions';
import { openSignupModal, closeSignupModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Login',
  otherFormType: '/signup'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: (
    <div className="other-form" onClick={() => dispatch(openSignupModal('signup'))}>
      Sign Up
    </div>
  ),
  closeSignupModal: () => dispatch(closeSignupModal()),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(removeSessionErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
