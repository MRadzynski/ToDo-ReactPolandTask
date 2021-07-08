import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: '2rem 0 1rem 2rem',
    color: theme?.palette?.text?.primary,
  },
  button: {
    width: '5rem',
    height: '5rem',
    position: 'absolute',
    right: '3rem',
    bottom: '-2.5rem',
    borderRadius: '50%',
    backgroundColor: '#ddd',
    boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
    '&:hover': {
      backgroundColor: '#ddd',
    },
  },
}));

export default useStyles;
