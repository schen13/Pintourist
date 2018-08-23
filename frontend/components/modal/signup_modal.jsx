import React from 'react';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';

// Inspired by Dudley Storey https://codepen.io/dudleystorey/pen/qEoKzZ
// and Marshall Cheng https://github.com/marshallycheng/Gameshelf
class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.bgImages = [
      window.santoriniURL,
      window.neuschwansteinURL,
      window.auroraURL,
      window.icelandURL,
    ];
    this.bgImages.forEach(img => {
      new Image().src = img;
    });

    this.timer = 3000;
    this.renderImages();
  }
  renderImages() {
    window.clearTimeout();
    let j = 0;

    for (let i = 0; i < this.bgImages.length; i++) {
      setTimeout(() => {
        document.getElementsByClassName('signup-modal-background')[0].style.background = "url(" + this.bgImages[j] + ") no-repeat center center fixed";
        // document.getElementsByClassName('signup-modal-background')[0].style.backgroundSize = "120% 120%";
        document.getElementsByClassName('signup-modal-background')[0].style.backgroundPosition = "0px";
        if ((j + 1) === this.bgImages.length) {
          setTimeout(() => this.renderImages(), this.timer);
        } else {
          j++;
        }
      }, this.timer * i);
    }
  }
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
