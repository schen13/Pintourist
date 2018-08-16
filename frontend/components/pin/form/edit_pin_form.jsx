import React from 'react';
import Dropzone from 'react-dropzone';

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.pin;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  onDrop(acceptedFiles, rejectedFiles) {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: acceptedFiles[0], photoUrl: fileReader.result });
    };
    if (acceptedFiles[0]) {
      fileReader.readAsDataURL(acceptedFiles[0]);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.props.closePinModal);
  }

  render() {
    const disabled = this.state.photoUrl ? false : true;
    const upload = this.state.photoUrl ?
      <img src={this.state.photoUrl} /> :
      <Dropzone
        multiple={false}
        accept="image/jpeg, image/png, image/tiff, image/bmp, image/gif"
        onDrop={this.onDrop}
      >
        Drag and drop or click to upload
      </Dropzone>;
    const { errors, closePinModal } = this.props;
    const newErrors = {};
    errors.forEach(error => {
      newErrors[Object.keys(error).shift()] = Object.values(error).shift();
    });

    return (
      <div className="pin-form-container">
        <div className="pin-form-header">
          Edit Pin
          <button onClick={closePinModal}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <form className="pin-form" onSubmit={this.handleSubmit}>
          <div className="pin-image-container">
            {upload}
          </div>
          <div className="pin-form-inputs">
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
          </div>

          <div className="edit-pin-form-footer">
            <div className="pin-footer-left">
              <button className="pin-delete-button" onClick={this.handleDelete}>Delete</button>
            </div>
            <div className="pin-footer-right">
              <button className="cancel-form" onClick={closePinModal}>Cancel</button>
              <input className="pin-submit" type="submit" value="Save" disabled={disabled} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPinForm;