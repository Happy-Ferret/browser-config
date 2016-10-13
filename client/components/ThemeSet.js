import React from 'react';
import ThemeElement from './ThemeElement';

class ThemeSet extends React.Component {

  render() {
    const { themeSet, themeComponentIndex } = this.props;

    return (
      <div className="theme-set">
        <h3>{ themeSet.name }</h3>
        { Object.keys(themeSet).map((key, i) => {
          if (key !== 'name') {
            return (
              <ThemeElement {...this.props} 
                key={i}
                name={key}
                themeComponentIndex = { themeComponentIndex }
                themeElement={themeSet[key]} />
            )
          }
        }
        )}
      </div>
    )
  }
};

export default ThemeSet;
