import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider, Grid } from '@material-ui/core';

import Spinner from './components/Spinner/Spinner';
import NotFound from './components/NotFound/NotFound';
import ErrorBourdary from './components/ErrorBoundary/ErrorBoundary';
import { green } from '@material-ui/core/colors';
import { selectTheme } from './redux/user/user.selectors';

import useStyles from './App.styles';

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const List = lazy(() => import('./pages/List/List'));
const AddTodo = lazy(() => import('./pages/AddTodo/AddTodo'));
const PreviewTodo = lazy(() => import('./pages/PreviewTodo/PreviewTodo'));
const EditTodo = lazy(() => import('./pages/EditTodo/EditTodo'));
const Settings = lazy(() => import('./pages/Settings/Settings'));

const App = ({ theme }) => {
  const vh = window.innerHeight * 0.01;

  const customTheme = createMuiTheme({
    heightVh: vh,
    palette: {
      type: theme ? `dark` : 'light',
      primary: green,
      backgroundColor: theme ? '#373737' : '#eaeaea',
    },
  });

  const classes = useStyles(customTheme);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Grid container className={classes.root}>
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
        </Grid>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => ({
  theme: selectTheme(state),
});

export default connect(mapStateToProps)(App);
