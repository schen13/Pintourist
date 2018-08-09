import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      <nav className="nav-bar">
        <div className="nav-logo">
          <Link to="/">P</Link>
        </div>
        <div className="nav-profile">
          <Link to={`/${currentUser.username}`}>Hi, {currentUser.fname}</Link>
        </div>
        <div className="nav-buttons">
          <a
            className="github-link"
            href="https://github.com/schen13/Pintourist"
          >
            Github
          </a>
          <button className="logout" onClick={logout}>
            Log Out
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
