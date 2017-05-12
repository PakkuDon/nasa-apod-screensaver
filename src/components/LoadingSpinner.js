import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = props => (
  (props.loading && (
    <div className='overlay'>
      <i className='fa fa-spinner' aria-hidden='true' />
    </div>
  ))
)

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default LoadingSpinner;
