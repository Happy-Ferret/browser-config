import React from 'react';
import InlineCss from 'react-inline-css';
import Isvg from 'react-inlinesvg';

import Tab from './Tab';

class Browser extends React.Component {

  render() {
    const { tabs, theme } = this.props;
    return (
      <InlineCss 
         stylesheet={`

          $toolbar-height: 50px;

          & * {
            transition: background: 100px;
          }

          & .chrome {
            background: ${theme['background']};
            color: ${theme['color']};
            font-size: 13px;
            border-bottom: 1px solid ${theme['border']};
          }

          & .tab-bar {
            display: flex;
            max-width: 100%;
            align-items: center;
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

          .svg-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          & .close-svg,
          & .hamburger-svg,
          & .back-svg,
          & .downloads-svg,
          & .panel-svg,
          & .hollow-star-svg {
            fill: ${theme['svg-fill']};
            transition: all 150ms;
          }

          & .svg-wrapper:hover [class$='svg'],
          & .tool-button:hover [class$='svg'],
          & .close-svg:hover {
            fill: ${theme['svg-fill-hover']};
          }

          & .svg-wrapper:active [class$='svg'],
          & .tool-button:active [class$='svg'],
          & .close-svg:active {
            fill: ${theme['svg-fill-active']};
          }

          .back-wrapper {
            flex: 0 0 36px;
            background: ${theme['background']};
            position: relative;
            z-index: 1;
            left: 8px;
            border-radius: 50%;
          }

          .back {
            transition: background 150ms;
            border: 1px solid ${theme['border']};
            border-radius: 50%;
            flex: 0 0 36px;
            height: 36px;
            background: ${theme['back-background']};
          }

          .back:hover {
            background: ${theme['button-background-hover']};
          }

          .back:active {
            background: ${theme['button-background-active']};
          }

          .back-svg {
            position: relative;
            top: 1px;
          }

          & .tool-bar {
            display: flex;
            align-items: center;
            border-top: 1px solid ${theme['border']};
          }

          & .tool-button:hover {
            border-color: ${theme['border']};
            background: ${theme['button-background-hover']};
          }

          & .tool-button:active {
            border-color: ${theme['border']};
            background: ${theme['button-background-active']};
          }

          & .search {
            flex: 1;
            font-size: 13px;
            border: 1px solid ${theme['border']};
            border-radius: 0 3px 3px 0;
            height: 28px;
            margin: 0 0 0 -8px;
            padding: 0 20px;
            outline: none;
            line-height: 20px;
            color: ${theme['search-color']};
          }

          & .search:focus {
            box-shadow: 0 0 0 2px ${theme['search-focus-ring']};
          }

          & .hamburger {
            border-left: 1px solid ${theme['border']};
            flex: 0 0 50px;
            height: 44px;
            justify-content: center;
          }

          .hamburger:hover {
            background: ${theme['button-background-hover']};
          }

          .hamburger:active {
            background: ${theme['button-background-active']};
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
                <div className="back-wrapper">
                <div className="back svg-wrapper">
                  <Isvg src="/svg/back.svg" />
                </div>
                </div>
                <input type="text" className="search" defaultValue="search"/>
                <div className="tool-icons-wrapper">
                <div className="tool-icon">
                  <button className="tool-button svg-wrapper">
                    <Isvg src="/svg/hollow-star.svg" />
                  </button>
                </div>
                <div className="tool-icon">
                  <button className="tool-button svg-wrapper">
                    <Isvg src="/svg/panel.svg" />
                  </button>
                </div>
                <div className="tool-icon">
                  <button className="tool-button svg-wrapper">
                    <Isvg src="/svg/downloads.svg" />
                  </button>
                </div>
                </div>
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
