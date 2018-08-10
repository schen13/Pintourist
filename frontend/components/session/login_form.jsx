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
    this.setState({ password: '' });
  }

  loginDemo(e) {
    e.preventDefault();
    this.props
      .login({ username: 'demo_user', password: 'password' })
      .then(this.props.closeModal());
  }

  render() {
    const { errors, formType, otherForm, clearErrors } = this.props;
    return (
      <div className="session-form-container">
        <img src={window.logoURL} alt="logo" />
        <h3>Log in to see the sights</h3>
        <h4>The world is at your fingertips</h4>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input
            className={`session-input${errors.length > 0 ? `-error` : ``}`}
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.update('username')}
          />
          <br />
          <input
            className={`session-input${errors.length > 0 ? `-error` : ``}`}
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update('password')}
          />
          <br />
          <div className={`session-error${errors.length > 0 ? `` : `-none`}`}>{errors}</div>
          <br />
          <input className="session-submit" type="submit" value={formType} />
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

export default withRouter(LoginForm);