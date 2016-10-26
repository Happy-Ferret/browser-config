import React from 'react';
import InlineCss from 'react-inline-css';
import Isvg from 'react-inlinesvg';

import BrowserTabBar from './BrowserTabBar';
import BrowserToolbar from './BrowserToolbar';

class Browser extends React.Component {

  tabBottomToggle(theme) {
    if(theme.tabs === 'bottom')
    return (
      `
        & .chrome {
          display: flex;
          flex-direction: column-reverse;
        }
      `
    )
  }

  render() {
    const { tabs, theme } = this.props;

    return (
      <InlineCss 
         stylesheet={`
          & * {
            transition: background: 100px;
          }

          & .chrome {
            background: ${theme['background']};
            color: ${theme['color']};
            font-size: 13px;
            border-bottom: 1px solid ${theme['border']};
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

          .back-svg {
            position: relative;
            top: 1px;
          }
          ${ this.tabBottomToggle(theme) }
        `}>  
          <div className="browser">
            <div className="chrome">
              <BrowserTabBar {...this.props} tabs={tabs} theme={theme} />
              <BrowserToolbar {...this.props} theme={ theme } />
            </div>
          </div>
      </InlineCss>
    );
  }
}

export default Browser;
