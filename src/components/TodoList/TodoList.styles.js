import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    height: '73vh',
    margin: '1vh 0',
    overflow: 'hidden scroll',
  },
}));

export default useStyles;
