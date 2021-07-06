import React from 'react';

import { Container } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './TodoList.styles';

const TodoList = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4">Nearest Todos</Typography>
      <Card className={classes.card}>
        <CardContent className={classes.cardContainer}>
          <Checkbox />
          <CardContent className={classes.textContainer}>
            <Typography variant="h5">Todo Title jdajsdiasdasdd</Typography>
            <Typography variant="subtitle2">
              Todo Description must be long enough!
              dasdadadadasdadsadasdasasddassdasda
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent className={classes.cardContainer}>
          <Checkbox />
          <CardContent className={classes.textContainer}>
            <Typography variant="h5">Todo Title jdajsdiasdasdd</Typography>
            <Typography variant="subtitle2">
              Todo Description must be long enough!
              dasdadadadasdadsadasdasasddassdasda
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent className={classes.cardContainer}>
          <Checkbox />
          <CardContent className={classes.textContainer}>
            <Typography variant="h5">Todo Title jdajsdiasdasdd</Typography>
            <Typography variant="subtitle2">
              Todo Description must be long enough!
              dasdadadadasdadsadasdasasddassdasda
            </Typography>
          </CardContent>
        </CardContent>
      </Card>
    </Container>
  );
};

export default TodoList;
