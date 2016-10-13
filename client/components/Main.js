import React from 'react';
import ThemeSet from './ThemeSet';
import ThemeGenerator from './ThemeGenerator';
import ThemeSwitcher from './ThemeSwitcher';
import Browser from './Browser';
import { connect } from 'react-redux';


class Main extends React.Component {

  render() {
    const { theme, tabs } = this.props;
    const currentTheme = theme[0];

    return (
      <div className="full-page">
        <div className="top">
          <div className="wrapper">
            <Browser { ...this.props } tabs={ tabs } theme={ currentTheme }/>
          </div>
        </div>
        <div className="bottom">
          <div className="wrapper">
            <div>          
              <ThemeGenerator  { ...this.props } theme={ currentTheme } />
              <ThemeSwitcher  { ...this.props } theme={ theme } />
            </div>
            <div className="themes-container">
              { Object.keys(currentTheme).map((key, i) => <ThemeSet {...this.props} key={i} themeComponentIndex={i} themeSet={currentTheme[key]} />) }
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Main;
