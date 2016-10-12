import React from 'react';

class ThemeGenerator extends React.Component {

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) }>
        <input type="submit" value="Generate a Theme" />
      </form>
    )
  }
};

export default ThemeGenerator;
