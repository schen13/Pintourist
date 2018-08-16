import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;
    const options = [
      <button className="edit-profile-button" onClick={logout}>
        Edit Profile
      </button>,
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
    ];
    return (
      <header className="nav-bar">
        <nav className="left-nav">
          <Link to="/">
            <img src={window.logoURL} alt="logo" />
          </Link>
        </nav>
        <nav className="right-nav">
          <ul>
            <li className="nav-home">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-profile">
              <Link to={`/${currentUser.username}`}>{currentUser.fname}</Link>
            </li>
            <li className="github-link">
              <a href="https://github.com/schen13/Pintourist">
                <i className="fab fa-github" />
              </a>
            </li>
            <li className="dropdown">
              <Dropdown options={options} />
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
