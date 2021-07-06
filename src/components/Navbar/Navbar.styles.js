import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  menu: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    borderRadius: '50%',
    backgroundColor: '#74B377',
    '&:hover': {
      backgroundColor: '#74B377',
    },
  },
}));

export default useStyles;
