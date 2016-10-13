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

          & * {
            transition: background: 500px;
          }

          & .tab:nth-child(1) .favicon  {
            background: red;
          }

          & .chrome {
            background: ${theme[0]['background']};
            color: ${theme[0]['color']};
            font-size: ${theme[0]['font-size']};
            border-bottom: ${theme[0]['border-bottom']};
          }

          & .tab-bar {
            display: flex;
            max-width: 100%;
            align-items: center;
          }

          & .tab-text {
            display: flex;
            line-height: ${theme[2]['line-height']};
            max-width: ${theme[2]['max-width']};
            justify-content: center;
            margin: ${theme[2]['margin']};
          }

          .svg-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          & .close-svg,
          & .hamburger-svg,
          & .back-svg {
            fill: ${theme[0]['svg-fill']};
            transition: all 150ms;
          }

          & .svg-wrapper:hover .hamburger-svg,
          & .svg-wrapper:hover .back-svg,
          & .close-svg:hover {
            fill: ${theme[0]['svg-fill:hover']};
          }

          & .svg-wrapper:active .hamburger-svg,
          & .svg-wrapper:active .back-svg,
          & .close-svg:active {
            fill: ${theme[0]['svg-fill:active']};
          }

          & .tab {
            display: flex;
            width: ${theme[1]['flex-basis']};
            align-items: center;
            justify-content: space-between;
            border-bottom: ${theme[1]['border-bottom']};
            border-left: ${theme[1]['border-left']};
            border-radius: ${theme[1]['border-radius']};
            border-right: ${theme[1]['border-right']};
            border-top: ${theme[1]['border-top']};
            margin: ${theme[1]['margin']};
            padding: ${theme[1]['padding']};
            transition: background 75ms, box-shadow 150ms;
          }

          & .tab-text {
            width: ${theme[2]['flex-basis']};
            margin: ${theme[2]['margin']};
            line-height: ${theme[2]['line-height']};
          }

          & .tab:hover {
            background-color: ${theme[1]['&:hover background-color']};
            box-shadow: ${theme[1]['&:hover box-shadow']};
          }

          & .tab.active {
            background-color: ${theme[1]['&:active background-color']};
            box-shadow: ${theme[1]['&:active box-shadow']};
          }

          .back {
            transition: background 150ms;
            border: ${theme[4]['border']};
            border-radius: ${theme[4]['border-radius']};
            flex: ${theme[4]['flex']};
            height: ${theme[4]['height']};
            margin: ${theme[4]['margin']};
            background: ${theme[4]['background']};
            position: relative;
            top: 1px;
          }

          .back:hover {
            background: ${theme[4]['&:hover background']};
          }

          .back:active {
            background: ${theme[4]['&:active background']};
          }

          .back-svg {
            position: relative;
            top: 1px;
          }

          & .tab-text {
            flex: 1 1 ${theme[1]['flex-basis']};
          }

          & .tool-bar {
            display: flex;
            align-items: stretch;
            border-top: ${theme[3]['border-top']};
          }

          & .search {
            flex: 1;
            font-size: ${theme[5]['font-size']};
            border: ${theme[5]['border']};
            border-radius: ${theme[5]['border-radius']};
            height: ${theme[5]['height']};
            margin: ${theme[5]['margin']};
            padding: ${theme[5]['padding']};
            line-height: ${theme[5]['line-height']};
          }

          & .search:focus {
            box-shadow: ${theme[5]['&:focus box-shadow']};
          }

          & .hamburger {
            border-left: ${theme[6]['border-left']};
            flex: 0 0 ${theme[6]['width']};
            justify-content: center;
          }

          .hamburger:hover {
            background: ${theme[6]['&:hover background']};
          }

          .hamburger:active {
            background: ${theme[6]['&:active background']};
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
