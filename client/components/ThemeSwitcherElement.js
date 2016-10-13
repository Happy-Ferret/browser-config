import React from 'react';
class ThemeSwitcherElement extends React.Component {

  handleClick() {
    this.props.changeTheme(this.props.index);
  }
  render() {
    const { index, background, color, border } = this.props;
    return (
      <div className="theme-switcher-element"
        style = {{ background, color, border }}
        onClick = { this.handleClick.bind(this) } > Theme {index} </div>
    );
  }
};

export default ThemeSwitcherElement;
