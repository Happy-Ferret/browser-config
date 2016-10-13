import React from 'react';
import ThemeSwitcherElement from './ThemeSwitcherElement';

class ThemeSwitcher extends React.Component {

  render() {
    const { theme, changeTheme } = this.props;
    return (
      <div>
        {theme.map((el, index) => {
          console.log();
          if (index > 0)
          return (
            <ThemeSwitcherElement 
              key={index} 
              index={index} 
              changeTheme={ changeTheme } 
              background={theme[index][0]['background']}
              color={theme[index][0]['color']}
              border={theme[index][0]['border-bottom']}
            />
        )})}
      </div>
    )
  }
};

export default ThemeSwitcher;
