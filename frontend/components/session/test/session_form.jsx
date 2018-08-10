import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.path === '/signup') {
      this.state = {
        username: '',
        password: '',
        email: '',
        fname: '',
        lname: ''
      };
    } else {
      this.state = {
        username: '',
        password: ''
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemo = this.loginDemo.bind(this);
    this.changeForms = this.changeForms.bind(this);
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.history.push('/');
    }
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

  changeForms() {
    this.props.clearErrors();
    this.props.history.push(this.props.otherPath);
  }

  displayErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
    );
  }

  render() {
    const { formTitle, buttonText, otherForm } = this.props;
    return (
      <div className="session-form-container">
        <img src={window.logoURL} alt="logo" />
        {formTitle}
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
          <input className="session-submit" type="submit">{buttonText}</input>
          <br />
          <button className="demo-login" onClick={this.loginDemo}>
            Demo Login
          </button>
        </form>
        <div onClick={this.changeForms}>{otherForm}</div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
