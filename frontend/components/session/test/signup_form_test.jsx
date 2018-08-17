import React from 'react';
import { withRouter } from 'react-router-dom';
import Link from 'valuelink';
import { Input } from '../../../node_modules/valuelink/tags';

// Inspired by https://medium.com/@gaperton/react-forms-with-value-links-part-2-validation-9d1ba78f8e49
const FormInput = (...props) => {
  props = props[0];
  return (
    <div>
      <Input {...props} className="session-input" />
      <div className='error-placeholder'>
        {props.valueLink.error || ''}
      </div>
    </div>
  );
};

class SignupFormTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      fname: '',
      lname: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeSignupModal);
  }

  loginDemo(e) {
    e.preventDefault();
    this.props
      .login({ username: 'demo_user', password: 'password' })
      .then(this.props.closeSignupModal);
  }

  render() {
    const fnameLink = Link.state(this, 'fname')
      .check(fname => fname, 'First name is required')
      .check(fname => fname.indexOf(' ') < 0, 'First name should not contain spaces');

    const lnameLink = Link.state(this, 'lname')
      .check(lname => lname, 'Last name is required')
      .check(lname => lname.indexOf(' ') < 0, 'Last name should not contain spaces');

    const emailPattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    const emailLink = Link.state(this, 'email')
      .check(email => email, 'Email is required')
      .check(email => email.match(emailPattern), 'Must be valid email');

    const usernameLink = Link.state(this, 'username')
      .check(username => username, 'Username is required')
      .check(username => username.indexOf(' ') < 0, 'Username should not contain spaces');

    const passwordLink = Link.state(this, 'password')
      .check(password => password, 'Password is required')
      .check(password => password.length >= 6, 'Minimum password length is 6 characters')
      .check(password => password.indexOf(' ') < 0, 'Password should not contain spaces');

    const { formType, otherForm, clearErrors } = this.props;
    return (
      <div className="session-form-container">
        <img src={window.logoURL} alt="logo" />
        <h3>Welcome to Pintourist</h3>
        <h4>Find new places to visit</h4>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <FormInput valueLink={fnameLink}
            type="text"
            value={this.state.fname}
            placeholder="First Name"
            onChange={this.update("fname")}
          />
          <br />
          <FormInput valueLink={lnameLink}
            type="text"
            value={this.state.lname}
            placeholder="Last Name"
            onChange={this.update("lname")}
          />
          <br />
          <FormInput valueLink={emailLink}
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.update("email")}
          />
          <br />
          <FormInput valueLink={usernameLink}
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.update("username")}
          />
          <br />
          <FormInput valueLink={passwordLink}
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update("password")}
          />
          <br />
          <input
            className="session-submit"
            type="submit"
            value={formType}
            disabled={fnameLink.error
              || lnameLink.error
              || emailLink.error
              || usernameLink.error
              || passwordLink.error}
          />
          <br />
          <button className="demo-login" onClick={this.loginDemo}>
            Demo Login
          </button>
        </form>
        <div onClick={clearErrors}>{otherForm}</div>
      </div>
    );
  }
}

export default withRouter(SignupFormTest);
