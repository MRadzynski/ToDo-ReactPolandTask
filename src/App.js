import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage.jsx';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route
          exact
          path="/list"
          render={() => <h1>There will be all todo page</h1>}
        />

        <Route
          exact
          path="/add-todo"
          render={() => <h1>There will be add todo page</h1>}
        />

        <Route
          exact
          path="/list/:id"
          render={() => <h1>There will todo preview page</h1>}
        />

        <Route
          path="/list/:id/edit"
          render={() => <h1>There will todo edit page</h1>}
        />

        <Route
          exact
          path="/settings"
          render={() => <h1>There will be settings page</h1>}
        />

        <Route render={() => <h1>There will be 404 page</h1>} />
      </Switch>
    </>
  );
};

export default App;
