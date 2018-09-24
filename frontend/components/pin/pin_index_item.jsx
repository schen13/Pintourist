import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

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
    // const parser = document.createElement('a');
    // parser.href = pin.url;
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
        {/* <a href={pin.url}>
          <div className="pin-url-small">
            <i className="fas fa-location-arrow"></i>
            {parser.hostname}
          </div>
        </a> */}
        <div className="pin-item-description">
          <LinesEllipsis
            text={pin.description}
            maxLine='2'
          />
        </div>
      </div>
    );
  }
}

export default withRouter(PinIndexItem);
