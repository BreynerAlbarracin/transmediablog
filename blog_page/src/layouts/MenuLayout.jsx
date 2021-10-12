import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../components/menu/Menu';

const MenuLayout = ({ Component }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      {showMenu && (
      <Menu />
      )}

      <div>
        <Component />
      </div>
    </div>
  );
};

MenuLayout.propTypes = {
  Component: PropTypes.element.isRequired,
};

export default MenuLayout;
