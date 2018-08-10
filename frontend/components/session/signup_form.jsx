import React from 'react';
import { withRouter } from 'react-router-dom';
class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      username: '',
      password: '',
      email: ''
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
      .then(this.props.closeModal);
  }

  render() {
    const { errors, formType, otherForm, clearErrors } = this.props;
    const newErrors = {};
    errors.forEach(error => {
      newErrors[Object.keys(error).shift()] = Object.values(error).shift();
    });
    return (
      <div className="session-form-container">
        <img src={window.logoURL} alt="logo" />
        <h3>Welcome to Pintourist</h3>
        <h4>Find new places to visit</h4>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <input
            className={`session-input${newErrors.fname ? `-error` : ``}`}
            type="text"
            value={this.state.fname}
            placeholder="First Name"
            onChange={this.update('fname')}
          />
          <div className={`session-error${newErrors.fname ? `` : `-none`}`}>{newErrors.fname}</div>
          <input
            className={`session-input${newErrors.lname ? `-error` : ``}`}
            type="text"
            value={this.state.lname}
            placeholder="Last Name"
            onChange={this.update('lname')}
          />
          <div className={`session-error${newErrors.lname ? `` : `-none`}`}>{newErrors.lname}</div>
          <input
            className={`session-input${newErrors.email ? `-error` : ``}`}
            type="text"
            value={this.state.email}
            placeholder="Email"
            onChange={this.update('email')}
          />
          <div className={`session-error${newErrors.email ? `` : `-none`}`}>{newErrors.email}</div>
          <input
            className={`session-input${newErrors.username ? `-error` : ``}`}
            type="text"
            value={this.state.username}
            placeholder="Username"
            onChange={this.update('username')}
          />
          <div className={`session-error${newErrors.username ? `` : `-none`}`}>{newErrors.username}</div>
          <input
            className={`session-input${newErrors.password ? `-error` : ``}`}
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.update('password')}
          />
          <br />
          <div className={`session-error${newErrors.password ? `` : `-none`}`}>{newErrors.password}</div>
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

export default withRouter(SignupForm);
