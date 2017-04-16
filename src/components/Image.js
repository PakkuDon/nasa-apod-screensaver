import React, { Component } from 'react';

class Image extends Component {
  render() {
    const { src } = this.props;
    return (
      <div className='screensaver-image' style={{ backgroundImage: `url("${src}")`}}>
      </div>
    );
  }
}

export default Image;
