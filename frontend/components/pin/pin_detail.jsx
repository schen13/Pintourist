import React from 'react';
import { withRouter } from 'react-router-dom';
class PinDetail extends React.Component {

  constructor(props) {
    super(props);
    this.routeToProfile = this.routeToProfile.bind(this);
  }

  componentDidMount() {
    this.props.fetchSinglePin(this.props.match.params.pinId);
  }

  routeToProfile(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.history.goBack();
  }

  handleSave(e) {
    e.preventDefault();
  }

  render() {
    const { pin, openPinModal, openPinningModal } = this.props;
    if (!pin) return <div>Loading...</div>;
    const splitURL = pin.url.split('/')[2].split('.');
    return (
      <div className="pin-detail-background"
        onClick={this.routeToProfile}>
        <button
          className="pin-detail-back-button"
          onClick={this.routeToProfile}
        >
          <i class="fas fa-angle-left"></i>
          Back
        </button>
        <div className="pin-info-container"
          onClick={e => e.stopPropagation()}>
          <div className="pin-info-buttons">
            {openPinModal}
            <button
              className="create-pinning-button"
              onClick={openPinningModal}>
              <i className="fas fa-thumbtack"></i>
              Save
            </button>
          </div>

          <div className="pin-info">
            <div className="pin-pic">
              <img src={pin.photoUrl}></img>
            </div>
            <div className="pin-text">
              <div className="pin-description">{pin.description}</div>
              <a href={pin.url}>
                <div className="pin-url">
                  <i className="fas fa-location-arrow"></i>
                  {splitURL[1].concat('.', splitURL[2])}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default withRouter(PinDetail);