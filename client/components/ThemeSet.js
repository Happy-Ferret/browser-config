import React from 'react';
import ThemeElement from './ThemeElement';

class ThemeSet extends React.Component {

  componentWillMount() {
    this.state = {
      color: this.props.color
    }
  }

  render() {
    const { themeSet, name } = this.props;


    return (
      <div className="theme-set">
        <h3>{ name }</h3>
        { Object.keys(themeSet).map((key, i) => 
          <ThemeElement {...this.props} 
            key={i}
            parentName={name}
            name={key}
            themeElement={themeSet[key]} />
        )}
      </div>
    )
  }
};

export default ThemeSet;
