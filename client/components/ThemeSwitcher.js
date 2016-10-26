import React from 'react';
import ThemeSwitcherElement from './ThemeSwitcherElement';

class ThemeSwitcher extends React.Component {

  render() {
    const { theme, changeTheme } = this.props;
    return (
      <div>
        {theme.map((el, index) => {
          if (index > 0)
          return (
            <ThemeSwitcherElement 
              key={index} 
              index={index} 
              changeTheme={ changeTheme } 
              background={theme[index]['background']}
              color={theme[index]['color']}
              borderColor={theme[index]['border']}
            />
        )})}
      </div>
    )
  }
};

export default ThemeSwitcher;
