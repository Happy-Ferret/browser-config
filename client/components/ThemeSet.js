import React from 'react';
import ThemeElement from './ThemeElement';

class ThemeSet extends React.Component {

  render() {
    const { theme } = this.props;

    return (
      <div className="theme-set">
        { Object.keys(theme).map((key, i) => {
          return (
            <ThemeElement {...this.props} 
              key={i}
              name={key}
              themeElement={theme[key]} />
          )
        })
      }
      </div>
    )
  }
};

export default ThemeSet;
