import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100vw',
    height: '15vh',
    color: 'white',
    textShadow: '0 3px 3px rgba(0,0,0,0.25)',
    boxShadow: '0 3px 3px rgba(0,0,0,0.25)',

    backgroundColor: theme.palette.success.light,
    borderRadius: '0 0 20px 20px',
    position: 'relative',
  },
  title: {
    padding: '3rem 0 0 2rem',
  },
}));

export default useStyles;
