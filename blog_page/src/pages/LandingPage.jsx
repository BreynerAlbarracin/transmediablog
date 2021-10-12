import React from 'react';
import Texts from '@assets/texts/texts';
import Icon from '@components/icons/Icon';

const LandingPage = () => (
  <div className="full-height rows">
    <div className="columns col-8 ph-3">
      <div className="col-2 align-center title-small">
        {Texts.presentation}
      </div>
      <div className="col-4 title-big">
        {Texts.titlePage}
      </div>
    </div>
    <div className="col-4">
      <div className="col align-center justify-end ph-3 text-white">
        {Texts.goBlog}
        <Icon
          name="MdArrowForwardIos"
          collection="md"
        />
      </div>
    </div>

  </div>
);

export default LandingPage;
