import React from 'react';

class ThemeElement extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      value: this.props.themeElement
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.themeElement
    })
  }


  handleSubmit(evt) {
    evt.preventDefault();
    this.props.changeThemeValue(this.props.name, this.state.value);
  }

  handleChange(evt) {
    this.setState({
      value: evt.target.value
    });
  }

  render() {
    const { themeElement, name } = this.props;

    return (
      <form onSubmit={ this.handleSubmit.bind(this) } className="theme-element">
        <label htmlFor = { name } >{ name }: </label>
        <input type="text" id = { name }
          value={ this.state.value }
          onChange={ this.handleChange.bind(this) }
          onBlur={ this.handleSubmit.bind(this) } />
        <input type="submit" hidden />
      </form>
    )
  }
};

export default ThemeElement;
