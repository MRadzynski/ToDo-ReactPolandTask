import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  spinner: {
    width: '5rem',
    height: '5rem',
    display: 'inline-block',
    border: '3px solid rgba(195, 195, 195, 0.6)',
    borderRadius: '50%',
    borderTopColor: '#636767',
    animation: '$spin 1s ease-in-out infinite',
  },
  '@keyframes spin': {
    to: {
      transform: 'rotate(360deg)',
    },
  },
}));

export default useStyles;
