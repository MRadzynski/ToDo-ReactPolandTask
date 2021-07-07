import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  constainer: {
    backgroundColor: theme.palette.success.light,
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
