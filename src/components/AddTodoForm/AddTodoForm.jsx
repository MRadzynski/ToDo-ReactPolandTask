import React from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Grid } from '@material-ui/core';

import useStyles from './AddTodoForm.styles';

const AddTodoForm = () => {
  const classes = useStyles();

  const handleChange = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid item>
      <form
        noValidate
        autoComplete="off"
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <TextField
          variant="outlined"
          fullWidth
          label="Name"
          required
          onChange={handleChange}
        />
        <TextField
          variant="outlined"
          label="Description"
          multiline
          rows={4}
          fullWidth
          onChange={handleChange}
          required
        />

        <TextField
          variant="outlined"
          multiline
          rows={2}
          fullWidth
          label="Comments"
          onChange={handleChange}
        />

        <TextField
          variant="outlined"
          type="datetime-local"
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          startIcon={<Add />}
          variant="contained"
          size="large"
          className={classes.button}
        >
          Add ToDo
        </Button>
      </form>
    </Grid>
  );
};

export default AddTodoForm;
