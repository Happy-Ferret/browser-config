import React from 'react';

class ThemeGenerator extends React.Component {

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTheme(this.props.theme);
  }

  render() {
    return (
      <form className="theme-generator" onSubmit={ this.handleSubmit.bind(this) }>
        <input type="submit" value="Generate a Theme" />
      </form>
    )
  }
};

export default ThemeGenerator;
