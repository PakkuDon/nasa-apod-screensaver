import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { image } = this.props;
    return (
      <div
        className={`screensaver-image ${this.props.visible ? 'active' : ''}`}
        style={{ backgroundImage: `url("${image.hdurl || image.url}")`}}
      />
    );
  }
}

export default Image;
