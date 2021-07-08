import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import {
  Grid,
  Typography,
  Paper,
  Divider,
  Checkbox,
  IconButton,
} from '@material-ui/core';

import { orange } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { deleteTodo } from '../../redux/todo/todo.actions';
import useStyles from './TodoDetails.styles';

const TodoDetails = ({ deleteTodo, todo }) => {
  const classes = useStyles();
  const history = useHistory();

  const dividedTimestamp = todo.timestamp.split('T');

  const handleDelete = () => {
    deleteTodo(todo.id);
    history.push('/list');
  };

  const handleCheckbox = () => {
    todo.done = !todo.done;
  };

  return (
    <Grid
      container
      item
      direction="column"
      className={classes.root}
      xs={10}
      sm={8}
      md={6}
      lg={4}
    >
      <Grid container item direction="column" className={classes.contentGroup}>
        <Paper className={classes.paper}>
          <Typography variant={'h5'} className={classes.groupTitle}>
            {todo.name}
          </Typography>
          <Divider />
          <Grid item container className={classes.datatimeContainer}>
            <Typography variant={'h5'}>End:</Typography>
            <Typography variant={'h6'} className={classes.datetime}>
              {dividedTimestamp[0]}
            </Typography>
            <Typography variant={'h6'} className={classes.datetime}>
              {dividedTimestamp[1]}
            </Typography>
          </Grid>
        </Paper>
      </Grid>

      <Grid container item className={classes.contentGroup}>
        <Paper className={classes.paper}>
          <Typography variant={'h5'} className={classes.groupTitle}>
            Description:
          </Typography>
          <Divider />
          <Typography variant={'h6'}>{todo.description}</Typography>
        </Paper>
      </Grid>

      <Grid container item className={classes.contentGroup}>
        <Paper className={classes.paper}>
          <Typography variant={'h5'} className={classes.groupTitle}>
            Comments:
          </Typography>
          <Divider />
          <Typography variant={'h6'}>{todo.comments}</Typography>
        </Paper>
      </Grid>

      <Grid container item className={classes.contentGroup}>
        <Paper className={classes.paper} style={{ width: 'auto' }}>
          <Typography variant={'h5'}>
            Complete:
            <Checkbox defaultChecked={todo.done} onClick={handleCheckbox} />
          </Typography>
        </Paper>

        <Grid item className={classes.iconContainer}>
          <Link to={`/list/${todo.id}/edit`}>
            <IconButton>
              <EditIcon style={{ color: orange[700] }} />
            </IconButton>
          </Link>
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
});

export default connect(null, mapDispatchToProps)(TodoDetails);
