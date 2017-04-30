import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class ImageInfo extends Component {
  render() {
    const { title, explanation, date } = this.props;
    const formattedDate = moment(date, 'YYYY-MM-DD').format('MMMM Do YYYY');

    return (
      <div className='image-info'>
        <h1>{title}</h1>
        <p>{explanation}</p>
        <footer>
          <time>{formattedDate}</time>
        </footer>
      </div>
    );
  }
}

ImageInfo.propTypes = {
  title: PropTypes.string,
  explanation: PropTypes.string,
  date: PropTypes.string
};

export default ImageInfo;
