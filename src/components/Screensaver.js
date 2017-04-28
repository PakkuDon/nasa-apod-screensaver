import React, { Component } from 'react';
import Image from './Image';

const INTERVAL = 5000;

class Screensaver extends Component {
  componentDidMount() {
    this.props.fetchImages();
    setInterval(() => {
      this.props.changeImage();
    }, INTERVAL);
  }

  render() {
    const { images, index } = this.props;
    return (
      <div className='screensaver'>
        {images.map((url, i) => (
          <Image
            key={`image-${i}`}
            src={url}
            visible={i === index}
          />
        ))}
      </div>
    )
  }
}

export default Screensaver;
