import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => {
  return (
    <Link to={`/pin/${pin.id}`}>
      <div className="pin-index-item">
        <div className="pin-thumbnail">
          I'm a pin!
        </div>
      </div>
    </Link>
  );
};

export default PinIndexItem;
