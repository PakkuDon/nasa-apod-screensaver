import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { src } = this.props;
    return (
      <div
        className={`screensaver-image ${this.props.visible ? 'active' : ''}`}
        style={{ backgroundImage: `url("${src}")`}}
      />
    );
  }
}

export default Image;
