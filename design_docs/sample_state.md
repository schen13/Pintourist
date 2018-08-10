```js
{
  entities: {
    users: {
      1: {
        id: 1,
        username: "schen13",
        fname: "Steven",
        lname: "Chen",
        email: "steven.chen313@gmail.com"
      }
    },

    boards: {
      1: {
        id: 1,
        userId: 1,
        title: "Paris",
        description: "Visit the City of Lights"
      }
    },

    pins: {
      1: {
        id: 1,
        userId: 1,
        url: "https://www.louvre.fr/en",
        description: "Louvre Lights",
      }
    },

    follows: {
      1: {
        id: 1,
        followeeId: 2,
        followerId: 1
      },
      2: {
        id: 2,
        followeeId: 1,
        followerId: 4
      }
    },

    pinnings: {
      1: {
        id: 1,
        boardId: 1,
        pinId: 1
      }
    }
  },

  ui: {
    loading: true/false,
    loginModal: true/false,
    pinModal: true/false
  },

  errors: {
    session: ["Incorrect username/password combination"],
    boards: ["Board title cannot be blank"],
    pins: ["Pin url cannot be blank"]
  },

  session: {
    id: 1
  }
}
```
