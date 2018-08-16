import React from 'react';
import { withRouter } from 'react-router-dom';

class EditBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteBoard(this.state.id)
      .then(this.props.history.push(`/${this.props.userPath}`))
      .then(this.props.closeBoardModal);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeBoardModal);
    this.setState({ title: '' });
  }

  // consider making all form classes the same for drier CSS
  render() {
    const { errors, closeBoardModal } = this.props;
    const newErrors = {};
    errors.forEach(error => {
      newErrors[Object.keys(error).shift()] = Object.values(error).shift();
    });
    return (
      <div className="board-form-container">
        <div className="board-form-header">
          <h5>Edit Board</h5>
          <button onClick={closeBoardModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form className="board-form" onSubmit={this.handleSubmit}>
          <span className="board-name">
            <div className="input-label">Name</div>
            <input
              className={`board-input${newErrors.title ? `-error` : ``}`}
              type="text"
              value={this.state.title}
              placeholder='Like "Places to Visit"'
              onChange={this.update('title')}
            />
          </span>

          <div className={`board-error${newErrors.title ? `` : `-none`}`}>{newErrors.title}</div>

          <span className="board-description">
            <div className="input-label">Description</div>
            <textarea
              className={`board-input${newErrors.description ? `-error` : ``}`}
              value={this.state.description}
              placeholder="Say more about this board"
              onChange={this.update('description')}
            />
          </span>

          <div className={`board-error${newErrors.description ? `` : `-none`}`}>{newErrors.description}</div>
          <div className="edit-board-form-footer">
            <div className="board-footer-left">
              <button className="board-delete-button" onClick={this.handleDelete}>Delete</button>
            </div>
            <div className="board-footer-right">
              <button className="cancel-form" onClick={closeBoardModal}>Cancel</button>
              <input className="board-submit" type="submit" value="Save" disabled={this.state.title === ''} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(EditBoardForm);