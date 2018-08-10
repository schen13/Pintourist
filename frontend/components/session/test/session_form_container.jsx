import SessionForm from './login_form';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  signup,
  login,
  removeSessionErrors
} from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors, session }, ownProps) => {
  const buttonText = (path === '/signup') ? 'Sign Up' : 'Log In';
  const path = ownProps.location.pathname;
  const otherPath = (path === '/signup') ? '/login' : '/signup';
  return {
    errors: errors.session,
    loggedIn: Boolean(session.id),
    buttonText,
    path,
    otherPath
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.location.pathname;
  const formType = (path === '/signup') ? signup : login;
  const otherFormType = (path === '/signup') ? 'login' : 'signup';
  const otherFormText = (path === '/signup') ? 'Log In' : 'Sign Up';
  const formTitle = (path === '/signup')
    ? <div><h3>Welcome to Pintourist</h3><h4>Find new places to visit</h4></div>
    : <div><h3>Log in to see the sights</h3><h4>The world at your fingertips</h4></div>;
  return {
    login: user => dispatch(login(user)),
    processForm: user => dispatch(formType(user)),
    otherForm: (
      <div
        className="other-form"
        onClick={() => dispatch(openModal(otherFormType))}
      >
        {otherFormText}
      </div>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(removeSessionErrors()),
    formTitle
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
