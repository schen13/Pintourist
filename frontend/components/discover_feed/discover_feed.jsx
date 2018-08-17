import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

class DiscoverFeed extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.nowLoading();
    this.props.fetchAllPins()
      .then(() => this.props.fetchAllUsers())
      .then(() => this.props.stopLoading());
  }

  handleClick(pinId) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/pin/${pinId}`);
    };
  }

  render() {
    const { pins, loading } = this.props;
    if (loading || !pins) return (
      <div className="loading-spinner-container">
        <div className='loading-spinner'>
          <ClipLoader
            sizeUnit={"px"}
            size={150}
            color={'#00a6ff'}
            loading={loading}
          />
        </div>
      </div>
    );

    return (
      <div className="masonry">
        {Object.values(pins).map(pin =>
          <div key={pin.id} className="pin">
            <Link to={`/pin/${pin.id}`}>
              <img src={pin.photoUrl} />
            </Link>
            <button
              className="create-pinning-button-small"
              onClick={this.handleClick(pin.id)}>
              <i className="fas fa-thumbtack"></i>
              Save
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(DiscoverFeed);