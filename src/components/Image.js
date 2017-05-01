import React from 'react';
import PropTypes from 'prop-types';
import ImageInfo from './ImageInfo';

const Image = props => {
  const { image, visible } = props;
  const { title, explanation, date } = image;

  return (
    <div
      className={`screensaver-image ${visible ? 'active' : ''}`}
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
