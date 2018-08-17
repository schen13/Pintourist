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
  * Users can create, edit, and delete both boards and pins
    * Users can only edit and delete their own boards and pins
  * Users can save pins to their own boards
  * Pins 