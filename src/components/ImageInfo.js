import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ImageInfo = props => {
  const { title, explanation, date, onClick, showExplanation } = props;
  const formattedDate = moment(date, 'YYYY-MM-DD').format('MMMM Do YYYY');

  return (
    <div className='image-info'>
      <button
        className='toggle-expand'
        onClick={onClick}
      >
        {showExplanation ? '-' : '+'}
      </button>
      <h1>{title}</h1>
      <p className={`explanation ${showExplanation ? 'show-explanation' : ''}`}>
        {explanation}
      </p>
      <footer>
        <time>{formattedDate}</time>
      </footer>
    </div>
  );
}

ImageInfo.propTypes = {
  title: PropTypes.string,
  explanation: PropTypes.string,
  date: PropTypes.string,
  showExplanation: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

ImageInfo.defaultProps = {
  onClick: () => {}
}

export default ImageInfo;
