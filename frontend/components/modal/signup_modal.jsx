import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

// Inspired by Dudley Storey https://codepen.io/dudleystorey/pen/qEoKzZ
// and Marshall Cheng https://github.com/marshallycheng/Gameshelf
class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    //   this.bgiArray = [
    //     "https://s3-us-west-1.amazonaws.com/pintourist-dev/zbo2nN55cA8HrVvJbbxDmSsM",
    //     "https://s3-us-west-1.amazonaws.com/pintourist-dev/1gZGTzJBpxZ65Nn1XZZ98FVr",
    //     "https://s3-us-west-1.amazonaws.com/pintourist-dev/3yXuJsbQdmKkQv9566r65DMF",
    //     "https://s3-us-west-1.amazonaws.com/pintourist-dev/5W5VU8CEnozLjHeTStJ65iRp"
    //   ];
    //   this.ms = 4000;
    //   this.bgiArray.forEach(img => {
    //     new Image().src = img;
    //   });
    //   this.bgSequence();
  }
  // bgSequence() {
  //   window.clearTimeout();
  //   let j = 0;

  //   for (let i = 0; i < this.bgiArray.length; i++) {
  //     setTimeout(() => {
  //       document.getElementsByClassName('signup-modal-background')[0].style.background = "url(" + this.bgiArray[j] + ") no-repeat center center fixed";
  //       // document.getElementsByClassName('signup-modal-background')[0].style.backgroundSize = "150% 150%";
  //       document.getElementsByClassName('signup-modal-background')[0].style.backgroundPosition = "0px";
  //       if ((j + 1) === this.bgiArray.length) {
  //         setTimeout(() => this.bgSequence(), this.ms);
  //       } else {
  //         j++;
  //       }
  //     }, this.ms * i);
  //   }
  // }
  render() {
    const { signupModal } = this.props;
    if (!signupModal) return null;
    let component;
    switch (signupModal) {
      case 'signup':
        component = <SignupFormContainer />;
        break;
      case 'login':
        component = <LoginFormContainer />;
        break;
      default:
        return null;
    }
    return <div className="signup-modal-background">{component}</div>;
  }
}

const mapStateToProps = state => ({
  signupModal: state.ui.signupModal
});

export default connect(
  mapStateToProps,
  null
)(SignupModal);
