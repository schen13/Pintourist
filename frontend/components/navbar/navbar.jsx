import React from 'react';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;
    return (
      <header className="nav-bar">
        <nav className="left-nav">
          <Link to="/">
            <img src={window.logoURL} />
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
              <a href="https://github.com/schen13/Pintourist">Github</a>
            </li>
            <li className="logout-container">
              <button className="logout" onClick={logout}>
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
