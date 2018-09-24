import React from 'react';
import { Link } from 'react-router-dom';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.ddRef = React.createRef();
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick(e) {
    if (!this.ddRef.current.contains(e.target)) this.setState({ menuOpen: false });
  }

  render() {
    const options = [
      <Link to="/account">
        <button className="edit-profile-button" onClick={() => this.setState({ menuOpen: false })}>
          Edit Profile
        </button>
      </Link>,
      <button className="logout-button" onClick={this.props.logout}>
        Log Out
      </button>
    ];
    const { menuOpen } = this.state;
    return (
      <div ref={this.ddRef} className="dropdown-container">
        <div className="dropdown-button"
          onClick={this.toggleMenu}>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        {menuOpen && <ul className="dropdown-options">
          {options.map((option, idx) => (
            <li
              key={idx}
              className={`dropdown-option-${idx}`}
            >
              {option}
            </li>
          ))}
        </ul>}
      </div>
    );
  }
}

export default Dropdown;