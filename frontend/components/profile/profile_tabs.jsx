import React from 'react';
import BoardIndexContainer from '../board/board_index_container';
import PinsIndexContainer from '../pins/pins_index_container';

class Tabs extends React.Component {
  render() {
    const { contents, selectedTabIdx, changeTab } = this.props;
    const tabs = contents.map((content, idx) => {
      const selected = (idx === selectedTabIdx) ? 'selected' : '';
      return (
        <li
          key={idx}
          className={selected}
          onClick={() => changeTab(idx)}
        >
          {content.title}
        </li>
      );
    });
    return (
      <ul className="tabs">
        {tabs}
      </ul>
    );
  }
}

class ProfileTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTabIdx: 0
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(idx) {
    this.setState({ selectedTabIdx: idx });
  }

  render() {
    const { boards } = this.props;
    const selectedTabIdx = this.state.selectedTabIdx;
    const contents = [{
      title: 'Boards',
      content: boards,
    }, {
      title: 'Pins',
      content: 'User\'s pins'
    }];
    const selectedTab = (
      selectedTabIdx === 0 ?
        <div className="profile-content-container">
          <BoardIndexContainer boards={
            contents[selectedTabIdx].content
          } />
        </div> :
        <div className="profile-content-container">
          <PinsIndexContainer pins={
            contents[selectedTabIdx].content
          } />
        </div>
    );
    return (
      <div className="profile-tabs-container" >
        <Tabs
          selectedTabIdx={selectedTabIdx}
          changeTab={this.changeTab}
          contents={contents}
        />
        {selectedTab}
      </div >
    );

  }
}

export default ProfileTabs;
