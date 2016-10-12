import React from 'react';
import Isvg from 'react-inlinesvg';

class Tab extends React.Component {

  setTabState(state) {
    if  (state) return 'tab active';
    return 'tab';
  }
  render() {
    const { index, state } = this.props;
      return (
      <div onClick={ (e) => this.props.changeActiveTab(index) } className={ this.setTabState(state) }>
        <div className="favicon" />
        <div className="tab-text">I am a Tab {index}</div>
        <div className="tab-close">
          <Isvg src="/svg/close.svg" />
        </div>
      </div>
    );
  }
}

export default Tab;
