import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  menu: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    minWidth: '3rem',
    minHeight: '3rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    borderRadius: '50%',
    color: 'white',
    backgroundColor: '#74B377',
    '&:hover': {
      backgroundColor: '#74B377',
    },
  },
}));

export default useStyles;
