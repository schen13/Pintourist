import React from 'react';
import ProfileContent from './profile_content';

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
    const { user } = this.props;
    const contents = [{
      title: 'Boards',
      content: 'User\'s boards'
    }, {
      title: 'Pins',
      content: 'User\'s pins'
    }];
    return (
      <div className="profile-tabs-container">
        <Tabs
          selectedTabIdx={this.state.selectedTabIdx}
          changeTab={this.changeTab}
          contents={contents}
        />
        <div className="profile-content-container">
          <article>
            <ProfileContent content={contents[this.state.selectedTabIdx].content} />
          </article>
        </div>
      </div >
    );
  }
}

export default ProfileTabs;
