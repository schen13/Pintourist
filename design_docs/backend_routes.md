# Backend Routes

## HTML

- `GET /` `StaticPagesController#root`

## API Endpoints

### `users`

- `GET /api/users/:id` - return a user's information, including user's boards and pins
- `POST /api/users` - sign up a new user
- `PATCH /api/users/:id` - edit user profile

### `session`

- `POST /api/session` - log in a user
- `DELETE /api/session` - log out current user

### `boards`

- `GET /api/boards/:id` - show a specific board
- `POST /api/boards` - create a new board
- `PATCH /api/boards/:id` - edit a specific board
- `DELETE /api/boards/:id` - delete a specific board

### `pins`

- `GET /api/pins` - display all pins for home feed
- `GET /api/pins/:id` - show a specific pin
- `POST /api/pins` - create a new pin
- `PATCH /api/pins/:id` - edit a specific pin
- `DELETE /api/pins/:id` - delete a specific pin

### `follows`

- `POST /api/users/:user_id/follows` - follow a user
- `DELETE /api/users/:user_id/follows` - unfollow a user
