import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from './LoadingSpinner';
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
    const { images, index, showExplanations, toggleExplanations, loading } = this.props;
    return (
      <div className='screensaver'>
        <LoadingSpinner loading={loading} />
        {images.map((image, i) => (
          <Image
            key={`image-${i}`}
            image={image}
            visible={i === index}
            showExplanation={showExplanations}
            onImageClick={toggleExplanations}
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
  ),
  loading: PropTypes.bool.isRequired,
  showExplanations: PropTypes.bool.isRequired,
  toggleExplanations: PropTypes.func.isRequired
};

Screensaver.defaultProps = {
  images: []
};

export default Screensaver;
