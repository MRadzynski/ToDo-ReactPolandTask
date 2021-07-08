import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    margin: '0 auto',
  },
  form: {
    width: '100vw',
    height: theme.heightVh ? theme.heightVh * 73 : '73vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    margin: theme.heightVh ? `${theme.heightVh}px auto` : '1vh  auto',
    padding: '3rem 2rem',
  },
  button: {
    marginTop: '2rem',
    color: 'white',
    backgroundColor:
      theme?.palette?.type === 'dark'
        ? theme.palette.primary.main
        : theme.palette.primary.light,
    '&:hover': {
      backgroundColor:
        theme?.palette?.type === 'dark'
          ? theme.palette.primary.main
          : theme.palette.primary.light,
    },
  },
}));

export default useStyles;
