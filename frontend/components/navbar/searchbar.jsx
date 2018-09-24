import React from 'react';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import { selectPinsForBoard } from '../../reducers/selectors';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.displayDropdown = this.displayDropdown.bind(this);
  }

  componentDidMount() {
    this.props.resetResults();
  }

  handleInput(e) {
    e.preventDefault();
    console.log(this.state.query);
    this.setState({ query: e.target.value }, () => {
      if (this.state.query.length >= 3) {
        this.props.fetchAllResults(this.state.query);
      }
    });
  }

  handleReset(e) {
    e.preventDefault();
    this.setState({ query: "" }, console.log(this.state.query));
    this.props.resetResults();
  }

  generateList(items, type) {
    if (items.length === 0) return null;
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
    const listItems = items.map((item, idx) => {
      const photo = item.photoUrl ? <img src={item.photoUrl} /> : null;
      switch (type) {
        case "pins":
          return (
            <Link to={`/pin/${item.id}`}>
              <li key={idx} onClick={this.handleReset}>
                {photo}
                <ResponsiveEllipsis
                  text={item.description}
                />
              </li>
            </Link >
          );
        case "boards":
          return (
            <Link to={`/${this.props.users[item.userId].username}/${item.title.replace(/\s+/g, '-').toLowerCase()}`}>
              <li key={idx} onClick={this.handleReset}>
                <span className="search-board-item">{item.title}</span>
              </li>
            </Link>
          );
        case "users":
          return (
            <Link to={`/${item.username}`}>
              <li key={idx} onClick={this.handleReset}>
                {photo}
                <span className="search-user-item">{item.username}</span>
              </li>
            </Link >
          );
        default:
          return null;
      }
    });

    return (
      <div className="search-items">
        <h3 className='search-section-header'>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
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
      if (e.target.className === 'search-bar') {
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

  // openSearch() {
  //   if (!this.state.open) this.setState({ open: true });
  // }

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

export default SearchBar;