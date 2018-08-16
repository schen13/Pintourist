import React from 'react';
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pin } = this.props;
    return (
      <div className="pin-thumbnail">
        <Link to={`/pin/${pin.id}`}>
          <img src={pin.photoUrl} />
        </Link>
      </div >
    );
  }
}

export default PinIndexItem;
