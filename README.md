# Pintourist

[Live Demo][heroku]

[heroku]: www.pintourist.co

Welcome to Pintourist! Discover a world you never knew you needed to explore, until now.
This website, as the name suggests, is inspired by Pinterest and makes use of a Rails/PostgreSQL backend with React/Redux frontend.

The project was designed and built in a two-week timeframe, but I plan to continue adding improvements, features, and bugfixes in the future.

## Technologies

Ruby on Rails/PostgreSQL: Due to the project's smaller scale, Rails' ease of use allowed for a simple RESTful API and CRUD route implementation.

React/Redux: Promoted seamless navigation through the app with descriptive pathnames. A normalized Redux state facilitated smooth modal tracking and extraction of relevant data based on the current path (e.g. username, board name).

AWS/Rails ActiveStorage: Handled image upload and cloud storage, with submitted images (through pin creation) being pushed to an S3 bucket.

react-dropzone, react-spinners: Packages incorporated for image drag/drop and page loading spinner animations respectively.

## Features
  * Secure BCrypt password hashing, backend Rails validations, and frontend validation logic generate intuitive error messages and disable improper submissions
  * Creating an account, logging in, or using the demo login grants access main content, such as board and pin creation
  * Once logged in, users can view each others' profiles, including their boards and pins
  * Boards and pins can be easily created, modified, or deleted due to a RESTful API and normalized Redux state
  * Responsive and aesthetically pleasing home feed, courtesy of simple CSS media queries and selectors
  * Cloud-based image storage and upload through Rails ActiveStorage and AWS, optimizing for scalability and minimal server load

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
    
    ...

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

With a column-count based on media queries, the pins respond to different devices and screen sizes.

### Informative and Formatted Errors

![Presence Validation Errors](/design_docs/images/presence_errors.jpg)
![Uniqueness Validation Errors](/design_docs/images/unique_errors.jpg)

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
![Disabled Create Button](/design_docs/images/disabled_create.jpg)
![Enabled Create Button](/design_docs/images/enabled_create.jpg)
![Disabled Edit Button](/design_docs/images/disabled_edit.jpg)

```js
const disabled =
      (this.state.photoUrl && (this.state.userId === this.props.currentUserId)) ? false : true;
```
The pin form submit buttons check for necessary fields (e.g. photoUrl) and remain disabled if the user has not uploaded a photo. This prevents users from making erroneous form submissions. The edit pin button is also disabled if the current user is not the owner of the pin.

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