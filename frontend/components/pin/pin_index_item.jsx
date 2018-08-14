import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => {
  return (
    <div className="pin-index-item">
      <Link to={`/pin/${pin.id}`}>
        <div className="pin-thumbnail">
          {pin.description}
        </div>
      </Link>
    </div>
  );
};

export default PinIndexItem;
