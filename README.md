# Pintourist

[Live Demo][heroku]

[heroku]: https://pintouristapp.herokuapp.com/

Welcome to Pintourist! Discover a world you never knew you needed to explore, until now.
This website, as the name suggests, is inspired by Pinterest and makes use of a Rails/PostgreSQL backend with React/Redux frontend.

The project was designed and built in a two-week timeframe, but I plan to continue adding improvements, features, and bugfixes in the future.


## Features
  * Secure backend user authentication with BCrypt
    * Useful backend validations with informative error display on the frontend
  * Users can create accounts, log in, or use a demo login to bypass this process
  * Users can view both their own and others' profiles, including their boards and pins
  * Users can create, edit, and delete both boards and pins, while also being able to save pins to their boards
    * Users can only edit and delete their own boards and pins
  * The homepage discover feed is responsive and display all pins nicely


### Responsive Feed
![Pintourist Feed](/design_docs/images/discover_feed.png)

```scss
.masonry {
  position: absolute;
  top: 64px;
  margin: 1.5em auto 1.5em auto;
  padding: 0 20px;
  column-gap: 1em;
  box-sizing: border-box;
  div {
    box-sizing: inherit;
  }
  .pin {
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 0 0 1em;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    &:hover {
      background-color: $lighter-gray;
      -webkit-transition: background-color 300ms linear;
      -ms-transition: background-color 300ms linear;
      transition: background-color 300ms linear;
      cursor: -moz-zoom-in;
      cursor: -webkit-zoom-in;
      cursor: zoom-in;
      img {
        cursor: -moz-zoom-in;
        cursor: -webkit-zoom-in;
        cursor: zoom-in;
        opacity: 0.7;
      }
      .create-pinning-button-small {
        display: block;
        opacity: 1;
      }
    }
    img {
      border-radius: 10px;
      opacity: 1;
      transition: .8s opacity;
    }
  }
}

@media only screen and (min-width: 1200px) {
  .masonry {
    column-count: 5;
  }
}

@media only screen and (max-width: 1199px) and (min-width: 1000px) {
  .masonry {
    column-count: 4;
  }
}

@media only screen and (max-width: 999px) and (min-width: 800px) {
  .masonry {
    column-count: 3;
  }
}

@media only screen and (max-width: 799px) and (min-width: 600px) {
  .masonry {
    column-count: 2;
  }
}
```
![Responsive Masonry](/design_docs/images/responsive_masonry.gif)

With column-count based on media queries and transitioned opacity on hover, the pins respond to changes in screen size and user mouse input.

### Informative and Formatted Errors

![Presence Validation Errors](/design_docs/images/presence_errors.png)
![Uniqueness Validation Errors](/design_docs/images/unique_errors.png)

```js
render() {
  const { errors, formType, otherForm, clearErrors } = this.props;
  const newErrors = {};
  errors.forEach(error => {
    newErrors[Object.keys(error).shift()] = Object.values(error).shift();
  });
  return (
    <div className="session-form-container">
      <img src={window.logoURL} alt="logo" />
      <h3>Welcome to Pintourist</h3>
      <h4>Find new places to visit</h4>
      <form className="session-form" onSubmit={this.handleSubmit}>
        <input
          className={`session-input${newErrors.fname ? `-error` : ``}`}
          type="text"
          value={this.state.fname}
          placeholder="First Name"
          onChange={this.update('fname')}
        />
        <div className={`session-error${newErrors.fname ? `` : `-none`}`}>{newErrors.fname}</div>
        ...
        <input className="session-submit" type="submit" value={formType} />
        <br />
        <button className="demo-login" onClick={this.loginDemo}>
          Demo Login
        </button>
      </form>
      <div onClick={clearErrors}>{otherForm}</div>
    </div>
  );
}
```
Elements receive different class names based on the presence or absence of errors, which are then styled through CSS class selectors. The other input fields were omitted for brevity. I aim to DRY up the forms by abstracting out repetitive code (e.g. form wrappers).

### Smart Modal
![Disabled Create Button](/design_docs/images/disabled_create.png)
![Enabled Create Button](/design_docs/images/enabled_create.png)
![Disabled Edit Button](/design_docs/images/disabled_edit.png)

```js
const disabled =
      (this.state.photoUrl && (this.state.userId === this.props.currentUserId)) ? false : true;
```
The pin form submit buttons check for necessary fields (e.g. photoUrl) and remain disabled if the user has not uploaded a photo. This prevents users from making erroneous form submissions. The edit pin button is also disabled if the current user is not the owner of the pin.

## Technologies

Rails was used for the backend for simple implementation of RESTful routes. Due to the small scale of the project, Rails was perfect for ease of use.

Normalized Redux states allowed for easy tracking of modals and extraction of relevant data based on the current path.

Packages like react-dropzone and react-spinners were utilized for image drag/drop and page loading spinner animations respectively. AWS served as the primary image hosting, and submitted images (through pin creation) are pushed to an S3 bucket.

### Additional Resources
+ [MVP List](MVP-List)
+ [Database Schema](Database-Schema)
+ [Sample State](Sample-State)
+ [Frontend Routes and Components](Frontend-Routes-and-Components)
+ [Backend Routes](Backend-Routes)

## Future Features
* Follows (users and boards)
* Search Bar
* Categories for smarter discover feed
* Improved signup/login background