import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageInfo from './ImageInfo';

class Image extends Component {
  render() {
    const { image } = this.props;
    const { title, explanation, date } = image;
    
    return (
      <div
        className={`screensaver-image ${this.props.visible ? 'active' : ''}`}
        style={{ backgroundImage: `url("${image.hdurl || image.url}")`}}
      >
        <ImageInfo
          title={title}
          explanation={explanation}
          date={date}
        />
      </div>
    );
  }
}

Image.propTypes = {
  image: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.string,
    explanation: PropTypes.string,
    hdurl: PropTypes.string,
    url: PropTypes.string
  }).isRequired,
  visible: PropTypes.bool.isRequired
};

export default Image;
