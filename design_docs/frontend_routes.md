## Frontend Routes

Components are organized as follows:

* `Root`
  * `App`
    * `NavBar`
    * `AppContent`
    * `Footer`

The following routes, defined in `AppContent`, will render components between `NavBar` and `Footer`.

* `/`
  * `LoginModal`
* `/home`
  * `HomeFeed`
    * `Pins`
    * `PinModal`
  * `CreatePinModal`
* `/login`
  * `SessionForm`
* `/signup`
  * `SessionForm`
* `/:username`
  * `Profile`
  * `FollowsContainer`
    * `/:username/followers`
      * `FollowerDetail`
    * `/:username/following`
      * `FollowingDetail`
  * `BoardsContainer`
    * `/:username/boards`
      * `BoardsIndex`
        * `BoardForm`
      * `/:username/:boardId`
        * `BoardDetail`
  * `PinsContainer`
    * `/:username/pins`
      * `PinsIndex`
        * `PinForm`
      * `/pin/:pinId`
        * `PinDetail`
