import React, { Component } from 'react';
import Image from './Image';

class Screensaver extends Component {
  componentDidMount() {
    this.props.fetchImages();
  }

  render() {
    const { images } = this.props;
    return (
      <div className='screensaver'>
        {images.map((url, i) => (
          <Image key={`image-${i}`} src={url} />
        ))}
      </div>
    )
  }
}

export default Screensaver;
