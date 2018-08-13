import React from 'react';

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal);
    this.setState({ title: '' });
  }

  // consider making all form classes the same for drier CSS
  render() {
    const { errors, formType, closeModal } = this.props;
    const newErrors = {};
    errors.forEach(error => {
      newErrors[Object.keys(error).shift()] = Object.values(error).shift();
    });
    return (
      <div className="board-form-container">
        <div className="board-form-header">
          <h5>Create Board</h5>
          <button onClick={closeModal}>
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
              placeholder="Description"
              onChange={this.update('description')}
            />
          </span>

          <div className={`board-error${newErrors.description ? `` : `-none`}`}>{newErrors.description}</div>
          <div className="board-form-footer">
            <button className="cancel-form" onClick={closeModal}>Cancel</button>
            <input className="board-submit" type="submit" value={formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateBoardForm;