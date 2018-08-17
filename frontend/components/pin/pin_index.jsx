import React from 'react';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {

  componentDidMount() {
    this.props.nowLoading();
    this.props.fetchAllPins()
      .then(() => this.props.stopLoading());
  }

  render() {
    const { pins, user, currentUserId, openPinModal } = this.props;
    if (this.props.loading || !pins) return <div className="homepage-loading">Loading...</div>;
    return (
      <div className="pins-container">
        {currentUserId === user.id ? openPinModal : ''}
        <div className="masonry-pin">
          {pins.map(
            pin => <PinIndexItem
              key={pin.id}
              pin={pin}
            />
          )}
        </div>
      </div >
    );
  }
}

export default PinIndex;