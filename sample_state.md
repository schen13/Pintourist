```js
{
  entities: {
    users: {
      1: {
        id: 1,
        username: "schen13",
        fname: "Steven",
        lname: "Chen",
        email: "steven.chen313@gmail.com",
        imgUrl: "/app/assets/images/steven.png",
        boardIds: [1, 4],
        follows: {
          followerIds: [2, 4, 6],
          followeeIds: [2, 3, 5]
        }
      }
    },

    boards: {
      1: {
        id: 1,
        userId: 1,
        title: "Paris",
        description: "Visit the City of Lights",
        category: "Travel",
        isSecret: false,
        pinIds: [1, 2]
      }
    },

    pins: {
      1: {
        id: 1,
        userId: 1,
        url: "https://www.louvre.fr/en",
        description: "Louvre Lights",
        imgUrl: "https://pixabay.com/en/louvre-pyramid-paris-tourism-102840/",
        boardIds: [1, 4]
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
    loginModal: true/false
  },

  errors: {
    login: ["Incorrect username/password combination"],
    pins: ["Pin url cannot be blank"],
    boards: ["Board title cannot be blank"]
  },

  session: {
    currentUser: {
      id: 1
    }
  }
}

```
