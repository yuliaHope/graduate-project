import React from 'react';
import PropTypes from 'prop-types';

import Error from './error';

export default function withLoadingHandlers(WrappedComponent) {
  function WithLoadingHandlers(props) {
    const { loaded, error } = props;
    if (error) {
      return <Error error={error} />;
    }

    return <WrappedComponent {...props} className={loaded ? '' : 'loader'} />;
  }

  WithLoadingHandlers.propTypes = {
    loaded: PropTypes.bool,
    error: PropTypes.string,
  };

  WithLoadingHandlers.defaultProps = {
    loaded: false,
    error: '',
  };

  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

  WithLoadingHandlers.displayName = `withLoadingHandlers(${wrappedComponentName})`;
  return WithLoadingHandlers;
}
