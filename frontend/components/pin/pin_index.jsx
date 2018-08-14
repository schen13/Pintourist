import React from 'react';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    const { pins } = this.props;
    if (!pins) return <div>Loading...</div>;
    return (
      <div className="profile-index-container">
        {this.props.openPinModal}
        {pins.map(
          pin => <PinIndexItem
            key={pin.id}
            pin={pin}
          />
        )}
      </div >
    );
  }
}

export default PinIndex;