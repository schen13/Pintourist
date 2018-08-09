import React from 'react';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
  }

  loginDemo(e) {
    e.preventDefault();
    this.props
      .login({ username: 'demo_user', password: 'password' })
      .then(this.props.closeModal());
  }

  displayErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  }

  render() {
    const { formType, otherForm } = this.props;
    return (
      <div className="session-form-container">
        <img src={window.logoURL} />
        <h3>Log in to see the sights</h3>
        <h4>The world is at your fingertips</h4>
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
          <input className="session-submit" type="submit" value={formType} />
          <br />
          <button className="demo-login" onClick={this.loginDemo}>
            Demo Login
          </button>
        </form>
        {otherForm}
      </div>
    );
  }
}

export default withRouter(LoginForm);
