# `users`

| column name       | data type | details                   |
| ----------------- | :-------: | ------------------------- |
| `id`              |  integer  | not null, primary key     |
| `username`        |  string   | not null, indexed, unique |
| `fname`           |  string   | not null                  |
| `lname`           |  string   | not null                  |
| `email`           |  string   | not null, indexed, unique |
| `password_digest` |  string   | not null                  |
| `session_token`   |  string   | not null, indexed, unique |
| `created_at`      | datetime  | not null                  |
| `updated_at`      | datetime  | not null                  |

- index on `:username, unique: true`
- index on `:email, unique: true`
- index on `:session_token, unique: true`

# `boards`

| column name   | data type | details                        |
| ------------- | :-------: | ------------------------------ |
| `id`          |  integer  | not null, primary key          |
| `user_id`     |  integer  | not null, indexed, foreign key |
| `title`       |  string   | not null                       |
| `description` |  string   | optional                       |
| `created_at`  | datetime  | not null                       |
| `updated_at`  | datetime  | not null                       |

- `user_id` references `users`
- index on `:user_id, unique: true`

# `pins`

| column name   | data type | details                        |
| ------------- | :-------: | ------------------------------ |
| `id`          |  integer  | not null, primary key          |
| `user_id`     |  integer  | not null, indexed, foreign key |
| `url`         |  string   | not null                       |
| `description` |  string   | optional                       |
| `created_at`  | datetime  | not null                       |
| `updated_at`  | datetime  | not null                       |

- `user_id` references `users`
- index on `:user_id, unique: true`

# `follows`

| column name   | data type | details               |
| ------------- | :-------: | --------------------- |
| `id`          |  integer  | not null, primary key |
| `followee_id` |  integer  | not null, foreign key |
| `follower_id` |  integer  | not null, foreign key |
| `created_at`  | datetime  | not null              |
| `updated_at`  | datetime  | not null              |

- `followee_id` references `users`
- `follower_id` references `users`
- index on `[:follower_id, :followee_id], unique: true`

# `pinnings`

| column name | data type | details               |
| ----------- | :-------: | --------------------- |
| `id`        |  integer  | not null, primary key |
| `board_id`  |  integer  | not null, foreign key |
| `pin_id`    |  integer  | not null, foreign key |
| created_at  | datetime  | not null              |
| updated_at  | datetime  | not null              |

- `board_id` references `boards`
- `pin_id` references `pins`
- index on `[:board_id, :pin_id], unique: true`
