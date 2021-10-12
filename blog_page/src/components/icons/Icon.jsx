import React from 'react';
import * as md from 'react-icons/md';
import * as vsc from 'react-icons/vsc';
import PropTypes from 'prop-types';

const Icon = ({ name, collection }) => {
  let ReturnIcon = <div />;

  switch (collection) {
    case 'md':
      ReturnIcon = md[name];
      return <ReturnIcon />;
    case 'vsc':
      ReturnIcon = vsc[name];
      return <ReturnIcon />;
    default:
      ReturnIcon = vsc.VscBracketError;
  }

  return <ReturnIcon />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  collection: PropTypes.string.isRequired,
};

export default Icon;
