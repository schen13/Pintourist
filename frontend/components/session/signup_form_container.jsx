import SignupForm from './signup_form';
import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: <div onClick={() => dispatch(openModal('login'))}>Log In</div>,
  closeModal: () => dispatch(closeModal()),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
