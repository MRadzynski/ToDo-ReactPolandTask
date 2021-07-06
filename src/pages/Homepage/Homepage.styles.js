import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  constainer: {
    backgroundColor: theme.palette.success.light,
  },
  header: {
    width: '100vw',
    height: '20vh',
    color: 'white',
    textShadow: '0 3px 3px rgba(0,0,0,0.25)',
    boxShadow: '0 3px 3px rgba(0,0,0,0.25)',

    backgroundColor: theme.palette.success.light,
    borderRadius: '0 0 20px 20px',
    position: 'relative',
  },
  main: {
    height: '68vh',
    margin: '1vh 0',
    overflow: 'hidden scroll',
  },
  footerNav: {
    height: '10vh',
    backgroundColor: theme.palette.success.light,
    borderRadius: '20px 20px 0 0',
    boxShadow: '0px -3px 3px rgba(0,0,0,0.25)',
  },
  title: {
    padding: '3rem 0 0 2rem',
  },
  button: {
    width: '5rem',
    height: '5rem',
    backgroundColor: '#ddd',
    position: 'absolute',
    bottom: '-2.5rem',
    right: '3rem',
    borderRadius: '50%',
    boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  },
}));

export default useStyles;
