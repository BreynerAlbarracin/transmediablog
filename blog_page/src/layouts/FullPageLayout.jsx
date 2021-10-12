import React from 'react';
import PropTypes from 'prop-types';

const FullPageLayout = ({ Component }) => (
  <div className="full-page">
    <Component />
  </div>
);

FullPageLayout.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default FullPageLayout;
