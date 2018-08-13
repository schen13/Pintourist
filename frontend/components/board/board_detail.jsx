import React from 'react';

class BoardDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleBoard(this.props.board.id);
  }


  render() {
    const { board } = this.props;
    return (
      <div className="board-detail-container">
        <p>{board.title}</p>
        <p>{board.description}</p>
      </div>
    );
  }
}

export default BoardDetail;