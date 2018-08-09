import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
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
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  loginDemo(e) {
    e.preventDefault();
    this.props.login({ username: 'demo_user', password: 'password' });
  }

  displayErrors() {
    return (
      <ul>
        {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  }

  render() {
    const { formType, redirectLink } = this.props;
    return (
      <div className="session-form-container">
        <h3>
          {formType} or {redirectLink}
        </h3>
        {this.displayErrors()}
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input
            className="session-input"
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.update('username')}
          />
          <br />
          <input
            className="session-input"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update('password')}
          />
          <br />
          <input
            className="session-input"
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.update('email')}
          />
          <br />
          <input
            className="session-input"
            type="text"
            value={this.state.fname}
            placeholder="First Name"
            onChange={this.update('fname')}
          />
          <br />
          <input
            className="session-input"
            type="text"
            value={this.state.lname}
            placeholder="Last Name"
            onChange={this.update('lname')}
          />
          <br />
          <input className="session-submit" type="submit" value={formType} />
          <button className="demo-login" onClick={this.loginDemo}>
            Demo Login
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
