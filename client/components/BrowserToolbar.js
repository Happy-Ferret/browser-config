import React from 'react';
import InlineCss from 'react-inline-css';
import Isvg from 'react-inlinesvg';
import BrowserTrafficLight from './BrowserTrafficLight';

class BrowserToolbar extends React.Component {

  renderTraffic(theme) {
    if (theme.tabs != 'top') return (<BrowserTrafficLight />);
    return;
  }

  tabBottomToggle(theme) {
    if(theme.tabs === 'bottom')
    return (
      `
        & .tool-bar {
          border-top: none;
          border-bottom: 1px solid ${theme['border']};
        }
        & .back-wrapper {
          left: 0;
        }
        .search {
          padding: 0 20px 0 12px !important;
        }
      `
    )
  }

  render() {
    const { theme } = this.props;
    return (
      <InlineCss stylesheet={`
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

          & .hamburger:hover {
            background: ${theme['button-background-hover']};
          }

          & .hamburger:active {
            background: ${theme['button-background-active']};
          }
          ${ this.tabBottomToggle(theme) }
      `} >
        <div className="tool-bar">
          { this.renderTraffic(theme) }
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
      </InlineCss>
    )
  }
};

export default BrowserToolbar;
