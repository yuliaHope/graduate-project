import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ error }) {
  return <div className="articles-container">ERROR: {error}</div>;
}

Error.propTypes = {
  error: PropTypes.string.isRequired,
};
