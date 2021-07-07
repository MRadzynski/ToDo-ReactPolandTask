import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
  },
  main: {
    width: '100vw',
    height: '75vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '70%',
    height: '60%',
  },
}));

export default useStyles;
