import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SyncLoader from 'react-spinners/SyncLoader';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class DiscoverFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPins: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPins()
      .then(() => this.props.fetchAllUsers());
  }

  onLoad(pin) {
    this.setState(({ loadedPins }) => {
      return { loadedPins: loadedPins.concat(pin) };
    });
  }

  handleClick(pinId) {
    return e => {
      e.preventDefault();
      this.props.history.push(`/pin/${pinId}`);
    };
  }

  render() {
    const { pins } = this.props;
    const pinArray = Object.values(pins);
    const loadedPins = this.state.loadedPins.map(pin =>
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
    );
    const feedLoading = pinArray.length > this.state.loadedPins.length;

    return (
      <div className="masonry">
        <ReactCSSTransitionGroup
          transitionName="feed"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={150}>
          {loadedPins}
        </ReactCSSTransitionGroup>
        {feedLoading &&
          <div className="loading-spinner-container">
            <div className='loading-spinner'>
              <SyncLoader
                sizeUnit={"px"}
                size={15}
                margin={'5px'}
                color={'#00a6ff'}
                loading={feedLoading}
              />
            </div>
          </div>
        }
        <div className="hidden">
          {pinArray.map(pin =>
            <img
              src={pin.photoUrl}
              onLoad={this.onLoad.bind(this, pin)}
              key={pin.id}
            />
          )}
        </div>

      </div>
    );
  }
}

export default withRouter(DiscoverFeed);