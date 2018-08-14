import React from 'react';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closePinModal);
    this.setState({ url: '' });
  }

  // consider making all form classes the same for drier CSS
  render() {
    const { errors, formType, closePinModal } = this.props;
    const newErrors = {};
    errors.forEach(error => {
      newErrors[Object.keys(error).shift()] = Object.values(error).shift();
    });
    return (
      <div className="pin-form-container">
        <div className="pin-form-header">
          Create Pin
          <button onClick={closePinModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <form className="pin-form" onSubmit={this.handleSubmit}>
          <span className="pin-name">
            <div className="input-label">Website</div>
            <input
              className={`pin-input${newErrors.url ? `-error` : ``}`}
              type="text"
              value={this.state.url}
              placeholder='Add URL'
              onChange={this.update('url')}
            />
          </span>

          <div className={`pin-error${newErrors.url ? `` : `-none`}`}>{newErrors.url}</div>

          <span className="pin-description">
            <div className="input-label">Description</div>
            <textarea
              className={`pin-input${newErrors.description ? `-error` : ``}`}
              value={this.state.description}
              placeholder="Say more about this Pin"
              onChange={this.update('description')}
            />
          </span>

          <div className={`pin-error${newErrors.description ? `` : `-none`}`}>{newErrors.description}</div>
          <div className="pin-form-footer">
            <button className="cancel-form" onClick={closePinModal}>Cancel</button>
            <input className="pin-submit" type="submit" value={formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePinForm;