import React from 'react';
import Dropzone from 'react-dropzone';
// import ReactAvatarEditor from 'react-avatar-editor';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    const user = this.props.user;
    const photoUrl = user.photoUrl || '';
    const photo = user.photo || '';
    this.state = {
      id: user.id,
      email: user.email,
      username: user.username,
      fname: user.fname,
      lname: user.lname,
      photoUrl,
      photo
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  onDrop(acceptedFiles) {
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photo: acceptedFiles[0], photoUrl: fileReader.result });
    };
    if (acceptedFiles[0]) {
      fileReader.readAsDataURL(acceptedFiles[0]);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearErrors();
    const formData = new FormData();
    formData.append('user[email]', this.state.email);
    formData.append('user[username]', this.state.username);
    formData.append('user[fname]', this.state.fname);
    formData.append('user[lname]', this.state.lname);
    if (this.state.photo) {
      formData.append('user[photo]', this.state.photo);
    }
    this.props.processForm(formData, this.state.id);
  }

  render() {
    const disabled = (this.state.fname && this.state.lname && this.state.email) ? false : true;
    const upload = this.state.photoUrl ?
      <img src={this.state.photoUrl} /> :
      <Dropzone
        multiple={false}
        accept="image/jpeg, image/png, image/tiff, image/bmp, image/gif"
        onDrop={this.onDrop}
      >
        Drag and drop or click to upload
        {/* <ReactAvatarEditor width={250} height={250} image={this.state.photo} /> */}
      </Dropzone>;
    const { errors } = this.props;
    const newErrors = {};
    errors.forEach(error => {
      newErrors[Object.keys(error).shift()] = Object.values(error).shift();
    });

    return (
      <div className="profile-form-container">
        <div className="profile-form-header">
          Profile
        </div>
        <form className="profile-form" onSubmit={this.handleSubmit}>

          <div className="profile-form-inputs">
            <div className="profile-email">
              <div className="input-label">Email</div>
              <input
                className={`profile-input${newErrors.email ? `-error` : ``}`}
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
              />
            </div>

            <div className={`profile-error${newErrors.email ? `` : `-none`}`}>{newErrors.email}</div>

            <div className="profile-username">
              <div className="input-label">Username</div>
              <input
                className={`profile-input${newErrors.username ? `-error` : ``}`}
                type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </div>

            <div className={`profile-error${newErrors.username ? `` : `-none`}`}>{newErrors.username}</div>


            <div className="profile-fname">
              <div className="input-label">First Name</div>
              <input
                className="profile-input"
                value={this.state.fname}
                onChange={this.update('fname')}
              />
            </div>

            <div className="profile-lname">
              <div className="input-label">Last Name</div>
              <input
                className="profile-input"
                value={this.state.lname}
                onChange={this.update('lname')}
              />
            </div>

            <div className="profile-image-container">
              Picture
              {upload}
            </div>

          </div>

          <div className="profile-form-footer">
            <input className="profile-submit" type="submit" value="Save" disabled={disabled} />
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfileForm;