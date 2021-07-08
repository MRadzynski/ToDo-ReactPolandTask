import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import Spinner from './components/Spinner/Spinner';
import NotFound from './components/NotFound/NotFound';
import ErrorBourdary from './components/ErrorBoundary/ErrorBoundary';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));

const List = lazy(() => import('./pages/List/List'));

const AddTodo = lazy(() => import('./pages/AddTodo/AddTodo'));

const PreviewTodo = lazy(() => import('./pages/PreviewTodo/PreviewTodo'));

const EditTodo = lazy(() => import('./pages/EditTodo/EditTodo'));

const Settings = lazy(() => import('./pages/Settings/Settings'));

const App = () => {
  return (
    <>
      <ErrorBourdary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route exact path="/list" component={List} />

            <Route exact path="/add-todo" component={AddTodo} />

            <Route exact path="/list/:id" component={PreviewTodo} />

            <Route path="/list/:id/edit" component={EditTodo} />

            <Route exact path="/settings" component={Settings} />

            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </ErrorBourdary>
    </>
  );
};

export default App;
