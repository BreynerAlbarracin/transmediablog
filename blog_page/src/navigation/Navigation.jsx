import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import FullPageLayout from '../layouts/FullPageLayout';

import Pages from '../pages/Pages';

const Navigation = () => (
  <Router>
    <Switch>
      <Route path="/">
        <FullPageLayout Component={Pages.LandingPage} />
      </Route>
    </Switch>
  </Router>
);

export default Navigation;
