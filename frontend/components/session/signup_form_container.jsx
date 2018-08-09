import SessionForm from './session_form';
import React from 'react';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Sign Up',
  redirectLink: <Link to="/login">login instead!</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
