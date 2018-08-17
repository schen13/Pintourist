import React from 'react';
import { Link, withRouter } from 'react-router-dom';
class PinDetail extends React.Component {

  constructor(props) {
    super(props);
    this.routeToProfile = this.routeToProfile.bind(this);
  }

  componentDidMount() {
    this.props.fetchSinglePin(this.props.match.params.pinId)
      .then(action => this.props.fetchDesiredUser(action.pin.userId));
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
    const { pin, users, openPinModal, openPinningModal } = this.props;
    if (!pin) return <div>Loading...</div>;
    const pinOwner = users[pin.userId];
    let pinOwnerName;
    if (pinOwner) {
      pinOwnerName =
        <Link to={`/${pinOwner.username}`}>
          <div className="pin-owner-name">
            {pinOwner.fname} {pinOwner.lname}
          </div>
        </Link>;
    }
    const splitURL = pin.url.split('/')[2].split('.');
    return (
      <div className="pin-detail-background"
        onClick={this.routeToProfile}>
        <button
          className="pin-detail-back-button"
          onClick={this.routeToProfile}
        >
          <i className="fas fa-angle-left"></i>
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

          <div className="pin-body">
            <div className="pin-pic">
              <a href={pin.url}>
                <img src={pin.photoUrl}></img>
              </a>
            </div>
            <div className="pin-info">
              <div className="pin-text">
                {pinOwnerName}
                <a href={pin.url}>
                  <div className="pin-url">
                    <i className="fas fa-location-arrow"></i>
                    {splitURL[1].concat('.', splitURL[2])}
                  </div>
                </a>
              </div>
              <div className="pin-description">{pin.description}</div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default withRouter(PinDetail);