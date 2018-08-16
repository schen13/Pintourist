import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }

  render() {
    const { options } = this.props;
    const { menuOpen } = this.state;
    return (
      <div className="dropdown-container">
        <div className="dropdown-button"
          onClick={this.toggleMenu}>
          <i className="fas fa-ellipsis-h"></i>
        </div>
        {menuOpen && <ul className="dropdown-options">
          {options.map((option, idx) => (
            <li className={`dropdown-option-${idx}`} key={idx}>
              {option}
            </li>
          ))}
        </ul>}
      </div>
    );
  }
}

export default Dropdown;