import React, { useState } from 'react';
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

const SettingsGroups = () => {
  const classes = useStyles();

  const [displayName, setDisplayName] = useState('');
  const [theme, setTheme] = useState('light');
  const [hideCompleted, setHideCompleted] = useState(false);

  const handleChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleBlur = (e) => {
    if (displayName === e.target.value) return;
  };

  const handleThemeChange = (e) => {
    if (theme === e.target.value) return;
    setTheme(e.target.value);
  };

  const handleHideCompletedChange = () => {
    setHideCompleted(!hideCompleted);
  };

  return (
    <Grid container item direction="column" className={classes.root}>
      <Grid container item className={classes.settingGroup}>
        <Paper className={classes.contentContainer}>
          <Typography>Display Name</Typography>
          <TextField
            name="displayName"
            variant="outlined"
            className={classes.textField}
            value={displayName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Paper>

        <Grid container item className={classes.settingsGroup}>
          <Paper className={classes.contentContainer}>
            <Typography>Theme</Typography>
            <Select
              name="theme"
              value={theme}
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
              defaultValue={hideCompleted}
              onChange={handleHideCompletedChange}
            />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SettingsGroups;
