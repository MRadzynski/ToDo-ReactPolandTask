import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
  },
  main: {
    width: '100vw',
    height: theme.heightVh ? theme.heightVh * 75 : '75vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '70%',
    height: '60%',
  },
  text: {
    color: theme?.palette?.text?.primary,
  },
}));

export default useStyles;
