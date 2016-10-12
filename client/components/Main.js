import React from 'react';
import ThemeSet from './ThemeSet';
import ThemeGenerator from './ThemeGenerator';
import Browser from './Browser';
import { connect } from 'react-redux';

class Main extends React.Component {
  render() {
    const { theme, tabs } = this.props;
    const currentTheme = theme[0];

    return (
      <div className="wrapper">
        <Browser { ...this.props } tabs={ tabs } theme={ currentTheme }/>
        { /* <ThemeGenerator /> */}
        <div className="themes-container">
          { Object.keys(currentTheme).map((key, i) => <ThemeSet {...this.props} key={i} name={key} themeSet={currentTheme[key]} />) }
        </div>
      </div>
    )
  }
};

export default Main;
