import React from 'react';
import Tab from './Tab';

class BrowserTrafficLight extends React.Component {

  render() {
    return (
      <div className="os-controls">
        <div className="close"></div>
        <div className="minimize"></div>
        <div className="maximize"></div>
      </div>
    )
  }
};

export default BrowserTrafficLight;
