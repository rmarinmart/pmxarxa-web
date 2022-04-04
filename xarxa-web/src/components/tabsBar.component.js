import React from "react";

class TabsBar extends React.Component {
  onSetTab = (selectedId) => {
    this.props.onSetTab(selectedId);
  };

  renderTabs = () => {
    const currentTab = this.props.initialTab;
    return this.props.tabsConfig.map(({ tabName, tabId }) => {
      return (
        <li className="nav-item" key={tabId}>
          <button
            className={`nav-link ${currentTab === tabId ? "active" : ""}`}
            onClick={() => this.onSetTab(tabId)}
          >
            {tabName}
          </button>
        </li>
      );
    });
  };

  render() {
    return <ul className="nav nav-tabs">{this.renderTabs()}</ul>;
  }
}

export default TabsBar;
