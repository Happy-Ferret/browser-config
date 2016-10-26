import React from 'react';
import InlineCss from 'react-inline-css';
import Tab from './Tab'
import BrowserTrafficLight from './BrowserTrafficLight';


class BrowserTabBar extends React.Component {

  renderTraffic(theme) {
    if (theme.tabs === 'top') return (<BrowserTrafficLight />);
    return;
  }

  tabBottomToggle(theme) {
    if(theme.tabs === 'bottom')
    return (
      `
        & .tab.active {
          box-shadow: 0 4px 0 ${theme['tab-highlight-active']} inset;
        }
      `
    )
  }

  render() {
    const { tabs, theme } = this.props;

    return (
      <InlineCss stylesheet= {`
        & .tab-bar {
          display: flex;
          max-width: 100%;
          align-items: center;
          background: ${theme['tab-bar-background']}
        }

        & .tab {
          display: flex;
          width: 180px;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          transition: background 75ms, box-shadow 75ms;
        }

        & .tab:hover {
          background: ${theme['tab-background-hover']};
        }

        & .tab.active {
          background: ${theme['tab-background-active']};
          box-shadow: 0 -4px 0 ${theme['tab-highlight-active']} inset;
        }

        & .tab-text {
          display: flex;
          line-height: 15px;
          flex-basis: 100px;
          justify-content: center;
          margin: 0 10px;
        }
        ${ this.tabBottomToggle(theme) }
      `}>
        <div className="tab-bar">
          { this.renderTraffic(theme) }
          { tabs.map((state, i) => <Tab {...this.props} key={ i } index={ i } state={ state } /> ) }
        </div>
      </InlineCss>
    )
  }
};

export default BrowserTabBar;
