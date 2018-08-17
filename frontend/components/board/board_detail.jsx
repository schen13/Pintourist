import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from '../pin/pin_index_item';
import { selectPinsForBoard } from '../../reducers/selectors';

class BoardDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleBoard(this.props.board.id);
    this.props.fetchAllPins();
  }

  render() {
    const {
      board,
      pins,
      pinnings,
      user,
      openBoardModal,
      openPinDetailModal,
    } = this.props;
    const selectedPins = selectPinsForBoard(pinnings, pins, board.id);
    const pinCount = selectedPins.length === 1 ? `1 Pin` : `${selectedPins.length} Pins`;
    return (
      <div className="board-detail-container">
        <div className="board-info-container">
          <div className="board-info-buttons">
            <div className="board-upload-icon">
              <i className="fas fa-upload"></i>
            </div>
            {openBoardModal}
            <div className="board-ellipsis-icon">
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          <div className="board-info">
            <div className="title-with-count">
              <div className="board-title">
                {board.title}
              </div>
              <div className="board-pin-count">
                {pinCount}
              </div>
            </div>
            <div className="profile-pic">
              <Link to={`/${user.username}`}>
                <i className="fas fa-user-circle"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="board-detail-pins">
          <div className="board-pins-title">Your Pins</div>
          {selectedPins.map(
            pin => <PinIndexItem
              key={pin ? pin.id : ""}
              pin={pin ? pin : ""}
              openPinDetailModal={openPinDetailModal}
            />
          )}
        </div>
      </div >
    );
  }
}

export default BoardDetail;