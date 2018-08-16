import React from 'react';
import { selectBoardIdFromBoardTitle } from '../../reducers/selectors';

class CreatePinning extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardId: "",
      pinId: this.props.pin.id
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(title) {
    return e => {
      e.preventDefault();
      const selectedBoardId =
        selectBoardIdFromBoardTitle(this.props.boards, title)[0].id;
      this.setState({ boardId: selectedBoardId },
        () => this.props.createPinning(this.state)
          .then(this.props.closePinningModal));
    };
  }

  render() {
    const { boards, pin, closePinningModal } = this.props;

    return (
      <div className="create-pinning-container">
        <div className="create-pinning-header">
          Choose Board
          <button onClick={closePinningModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="create-pinning-body">
          <div className="pinning-image-container">
            <img src={pin.photoUrl} />
          </div>

          <ul className="pinning-board-list">
            {boards.map(board => (
              <li
                key={board.id}
                className="pinning-board-item"
                value={board.title}
                onClick={this.handleClick(board.title)}
              >
                <div className="create-pinning-text">
                  {board.title}
                </div>
                <button className="create-pinning-button">
                  <i className="fas fa-thumbtack"></i>
                  Save
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default CreatePinning;