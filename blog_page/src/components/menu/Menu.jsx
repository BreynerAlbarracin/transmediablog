import React from 'react';
import PropTypes from 'prop-types';
import Texts from '../../assets/texts/texts';

const Menu = ({ artList }) => (
  <div className="full-height">
    <div className="home-presentation">
      {Texts.allArticles}
    </div>
    <div className="home-title">
      {artList.map((link) => (
        <div>
          {link.name}
        </div>
      ))}
    </div>
  </div>
);

Menu.propTypes = {
  artList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
