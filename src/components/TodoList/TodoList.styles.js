import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: theme.heightVh ? theme.heightVh * 73 : '73vh',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    margin: theme.heightVh ? `${theme.heightVh}px 0` : '1vh  0',
    overflow: 'hidden scroll',
  },
}));

export default useStyles;
