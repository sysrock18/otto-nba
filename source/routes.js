import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Teams from './pages/teams';
import Error404 from './pages/error404';
import Header from './shared/header';

function Routes() {
  return (
    <main role="application">
      <Header />
      
      <Switch>
        {/* NBA Page home */}
        <Route
          path="/"
          exact
          title="Home"
          component={Home}
        />
        {/* Error 404 */}
        <Route component={Error404} />
      </Switch>
    </main>
  );
}

export default Routes;
