import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage.jsx';
import AddTodo from './pages/AddTodo/AddTodo.jsx';
import List from './pages/List/List.jsx';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route exact path="/list" component={List} />

        <Route exact path="/add-todo" component={AddTodo} />

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
