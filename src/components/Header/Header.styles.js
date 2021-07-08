import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100vw',
    height: theme.heightVh ? theme.heightVh * 15 : '15vh',
    color: 'white',
    position: 'relative',
    borderRadius: '0 0 20px 20px',
    backgroundColor:
      theme?.palette?.type === 'dark'
        ? theme?.palette.primary.main
        : theme?.palette.primary.light,
    textShadow: '0 3px 3px rgba(0,0,0,0.25)',
    boxShadow: '0 3px 3px rgba(0,0,0,0.25)',
    alignItems: 'center',
  },
  title: {
    paddingLeft: '2rem',
  },
}));

export default useStyles;
