import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const INTERVAL = 30000;

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
        {images.map((image, i) => (
          <Image
            key={`image-${i}`}
            image={image}
            visible={i === index}
          />
        ))}
      </div>
    )
  }
}

Screensaver.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      title: PropTypes.string,
      explanation: PropTypes.string,
      hdurl: PropTypes.string,
      url: PropTypes.string
    })
  )
};

Screensaver.defaultProps = {
  images: []
};

export default Screensaver;
