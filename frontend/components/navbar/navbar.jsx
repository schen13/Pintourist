import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import SearchBarContainer from './searchbar_container'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout, openPinModal } = this.props;
    return (
      <div className="navbar-background">
        <header className="nav-bar">
          <nav className="left-nav">
            <div className="nav-logo-container">
              <Link to="/">
                <img src={window.logoURL} alt="logo" />
              </Link>
            </div>
            <SearchBarContainer />
          </nav>

          <nav className="right-nav">
            <ul>
              <li className="nav-home">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-profile">
                <img src={currentUser.photoUrl} />
                <Link to={`/${currentUser.username}`}>
                  {currentUser.fname}
                </Link>
              </li>
              <li className="github-link">
                <a href="https://github.com/schen13/Pintourist">
                  <i className="fab fa-github" />
                </a>
              </li>
              <li className="dropdown">
                <Dropdown logout={logout} />
              </li>
            </ul>
          </nav>
        </header>
        <button className="create-pin-button" onClick={openPinModal}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    );
  }
}

export default Navbar;
