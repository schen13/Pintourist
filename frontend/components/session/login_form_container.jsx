import LoginForm from './login_form';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Login'
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  otherForm: <div onClick={() => dispatch(openModal('signup'))}>Sign Up</div>,
  closeModal: () => dispatch(closeModal()),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
