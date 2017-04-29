import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
