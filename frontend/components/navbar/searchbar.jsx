import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
  }

  componentDidMount() {
    this.props.resetResults();
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ query: e.target.value }, () => {
      if (this.state.query.length >= 3) {
        this.props.fetchAllResults(this.state.query);
      }
    });
  }

  handleClick(url) {
    this.setState({ query: "" });
    this.props.resetResults();
    this.props.history.push(url);
  }

  generateList(items, type) {
    if (items.length === 0) return null;
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
    const listItems = items.map((item, idx) => {
      const photo = item.photoUrl ? <img src={item.photoUrl} /> : null;
      switch (type) {
        case "pins":
          return (
            <li key={idx} onClick={() => this.handleClick(`/pin/${item.id}`)}>
              {photo}
              <ResponsiveEllipsis
                text={item.description}
              />
            </li>
          );
        case "boards":
          return (
            <li key={idx} onClick={() => this.handleClick(`/${this.props.users[item.userId].username}/${item.title.replace(/\s+/g, '-').toLowerCase()}`)}>
              <span className="search-board-item">{item.title}</span>
            </li>
          );
        case "users":
          return (
            <li key={idx} onClick={() => this.handleClick(`/${item.username}`)}>
              {photo}
              <span className="search-user-item">{item.username}</span>
            </li>
          );
        default:
          return null;
      }
    });

    return (
      <div className="search-items">
        <h4 className='search-section-header'>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
        <ul className='search-section-items'>{listItems}</ul>
      </div>
    );
  }

  displayDropdown() {
    const { search } = this.props;
    const pins = search.pins || [];
    const boards = search.boards || [];
    const users = search.users || [];

    let pinList = null;
    let boardList = null;
    let userList = null;

    if (Object.keys(search).length) {
      pinList = this.generateList(pins, "pins");
      boardList = this.generateList(boards, "boards");
      userList = this.generateList(users, "users");
    }

    document.addEventListener("mousedown", e => {
      const dropdown = document.getElementsByClassName('search-dropdown')[0];
      if (e.path.includes(dropdown) || e.target.className === 'search-bar') {
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
    });

    return (
      <div className="search-dropdown">
        {pinList}
        {boardList}
        {userList}
      </div>
    );
  }

  render() {
    return (
      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={this.state.query}
          onChange={this.handleInput}
        />
        {this.displayDropdown()}
      </div>
    );
  }
}

export default withRouter(SearchBar);