import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    margin: '0 auto',
  },
  form: {
    width: '100vw',
    height: '73vh',
    margin: '1vh 0',
    padding: '3rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    width: '50vw',
    marginTop: '2rem',
    color: 'white',
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.main,
    },
  },
}));

export default useStyles;
