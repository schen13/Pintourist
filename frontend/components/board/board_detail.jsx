import React from 'react';
import { Link } from 'react-router-dom';
class BoardDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleBoard(this.props.board.id);
  }


  render() {
    const { board, user, openBoardModal } = this.props;
    return (
      <div className="board-detail-container">
        <div className="board-info-container">
          <div className="board-info-buttons">
            {openBoardModal}
          </div>
          <div className="board-info">
            <div className="board-title">
              {board.title}
            </div>
            <div className="profile-pic">
              <Link to={`/${user.username}`}>
                <i className="fas fa-user-circle"></i>
              </Link>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default BoardDetail;