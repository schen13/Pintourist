import SessionForm from './session_form';
import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formType: 'Login',
  redirectLink: <Link to="/signup">sign up instead!</Link>
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
