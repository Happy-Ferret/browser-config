import React from 'react';
import InlineCss from 'react-inline-css';
import Isvg from 'react-inlinesvg';

import Tab from './Tab';

class Browser extends React.Component {

  render() {
    const i = 0;
    const { theme, tabs } = this.props;
    return (
      <InlineCss stylesheet={` 
          & .chrome {
            background: ${theme.globals['background']};
            color: ${theme.globals['color']};
            font-size: ${theme.globals['font-size']};
            border-bottom: ${theme.globals['border-bottom']};
          }

          & .tab-bar {
            display: flex;
            max-width: 100%;
            align-items: center;
          }

          & .tab-text {
            display: flex;
            line-height: ${theme.tabText['line-height']};
            max-width: ${theme.tabText['max-width']};
            justify-content: center;
            margin: ${theme.tabText['margin']};
          }

          .svg-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          & .close-svg,
          & .hamburger-svg,
          $ .back-svg {
            fill: ${theme.globals['svg-fill']};
            transition: all 150ms;
          }

          & .svg-wrapper:hover .hamburger-svg,
          & .svg-wrapper:hover .back-svg,
          & .close-svg:hover {
            fill: ${theme.globals['svg-fill:hover']};
          }

          & .svg-wrapper:active .hamburger-svg,
          & .svg-wrapper:active .back-svg,
          & .close-svg:active {
            fill: ${theme.globals['svg-fill:active']};
          }

          & .tab {
            display: flex;
            width: ${theme.tab['flex-basis']};
            align-items: center;
            justify-content: space-between;
            border-bottom: ${theme.tab['border-bottom']};
            border-left: ${theme.tab['border-left']};
            border-radius: ${theme.tab['border-radius']};
            border-right: ${theme.tab['border-right']};
            border-top: ${theme.tab['border-top']};
            margin: ${theme.tab['margin']};
            padding: ${theme.tab['padding']};
            transition: background 75ms, box-shadow 150ms;
          }

          & .tab-text {
            width: ${theme.tabText['flex-basis']};
            margin: ${theme.tabText['margin']};
            line-height: ${theme.tabText['line-height']};
          }

          & .tab:hover {
            background-color: ${theme.tab['&:hover background-color']};
            box-shadow: ${theme.tab['&:hover box-shadow']};
          }

          & .tab.active {
            background-color: ${theme.tab['&:active background-color']};
            box-shadow: ${theme.tab['&:active box-shadow']};
          }

          .back {
            transition: background 150ms;
            border: ${theme.back['border']};
            border-radius: ${theme.back['border-radius']};
            flex: ${theme.back['flex']};
            height: ${theme.back['height']};
            margin: ${theme.back['margin']};
            background: ${theme.back['background']};
            position: relative;
          }

          .back:hover {
            background: ${theme.back['&:hover background']};
          }

          .back:active {
            background: ${theme.back['&:active background']};
          }

          .back-svg {
            position: relative;
            top: 1px;
          }

          & .tab-text {
            flex: 1 1 ${theme.tabText['flex-basis']};
          }

          & .tool-bar {
            display: flex;
            align-items: stretch;
            border-top: ${theme.toolBar['border-top']};
          }

          & .search {
            flex: 1;
            font-size: ${theme.search['font-size']};
            border: ${theme.search['border']};
            border-radius: ${theme.search['border-radius']};
            height: ${theme.search['height']};
            margin: ${theme.search['margin']};
            padding: ${theme.search['padding']};
            line-height: ${theme.search['line-height']};
          }

          & .search:focus {
            box-shadow: ${theme.search['&:focus box-shadow']};
          }

          & .hamburger {
            border-left: ${theme.hamburger['border-left']};
            flex: 0 0 ${theme.hamburger['width']};
            justify-content: center;
          }

          .hamburger:hover {
            background: ${theme.hamburger['&:hover background']};
          }

          .hamburger:active {
            background: ${theme.hamburger['&:active background']};
          }
        `}>
          <div className="browser">
            <div className="chrome">
              <div className="tab-bar">
                <div className="os-controls">
                  <div className="close"></div>
                  <div className="minimize"></div>
                  <div className="maximize"></div>
                </div>
                { tabs.map((state, i) => <Tab {...this.props} key={ i } index={ i } state={ state } /> ) }
                <div className="tab-increment"/>
              </div>
              <div className="tool-bar">
                <div className="back svg-wrapper">
                  <Isvg src="/svg/back.svg" />
                </div>
                <input type="text" className="search" defaultValue="search"/>
                <div className="hamburger tool-icon svg-wrapper">
                  <Isvg src="/svg/hamburger.svg" />
                </div>
              </div>
            </div>
          </div>
      </InlineCss>
    );
  }
}

export default Browser;
