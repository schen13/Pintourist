import React from 'react';
import { Link, withRouter } from 'react-router-dom';
class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push(`/pin/${this.props.pin.id}`);
  }

  render() {
    const { pin } = this.props;
    const splitURL = pin.url.split('/')[2].split('.');
    return (
      <div key={pin.id} className="pin">
        <Link to={`/pin/${pin.id}`}>
          <img src={pin.photoUrl} />
        </Link>
        <button
          className="create-pinning-button-small"
          onClick={this.handleClick}>
          <i className="fas fa-thumbtack"></i>
          Save
        </button>
        <a href={pin.url}>
          <div className="pin-url-small">
            <i className="fas fa-location-arrow"></i>
            {splitURL[1].concat('.', splitURL[2])}
          </div>
        </a>
      </div>
    );
  }
}

export default withRouter(PinIndexItem);
