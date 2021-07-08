import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  Checkbox,
} from '@material-ui/core';

import useStyles from './Settings.styles';

import {
  setDisplayName,
  setTheme,
  setHideCompletedTodos,
} from '../../redux/user/user.actions';

import {
  selectTheme,
  selectHideCompletedTodos,
  selectDisplayName,
} from '../../redux/user/user.selectors';

const SettingsGroups = ({
  displayName,
  theme,
  hideCompletedTodos,
  setDisplayName,
  setTheme,
  setHideCompletedTodos,
}) => {
  const classes = useStyles();

  const [userName, setUserName] = useState(displayName);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleBlur = () => {
    if (userName === displayName) return;

    setDisplayName(userName);
  };

  const handleThemeChange = (e) => {
    if (theme === e.target.value) return;

    setTheme(e.target.value);
  };

  const handleHideCompletedChange = () => {
    setHideCompletedTodos(!hideCompletedTodos);
  };

  return (
    <Grid container item direction="column" className={classes.root}>
      <Grid container item className={classes.settingGroup}>
        <Paper className={classes.contentContainer}>
          <Typography>Display Name</Typography>
          <TextField
            name="userName"
            variant="outlined"
            className={classes.textField}
            value={userName || ''}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Paper>

        <Grid container item className={classes.settingsGroup}>
          <Paper className={classes.contentContainer}>
            <Typography>Theme</Typography>
            <Select
              name="theme"
              value={theme || 'light'}
              className={classes.themeSelect}
              onChange={handleThemeChange}
            >
              <MenuItem value="light">Light</MenuItem>
              <MenuItem value="dark">Dark</MenuItem>
            </Select>
          </Paper>
        </Grid>

        <Grid container item className={classes.settingsGroup}>
          <Paper className={classes.contentContainer}>
            <Typography>Hide completed todos</Typography>
            <Checkbox
              name="hideComplete"
              checked={hideCompletedTodos}
              onChange={handleHideCompletedChange}
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({
  displayName: selectDisplayName(state),
  theme: selectTheme(state),
  hideCompletedTodos: selectHideCompletedTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  setDisplayName: (displayName) => dispatch(setDisplayName(displayName)),
  setTheme: (theme) => dispatch(setTheme(theme)),
  setHideCompletedTodos: (decision) =>
    dispatch(setHideCompletedTodos(decision)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsGroups);
