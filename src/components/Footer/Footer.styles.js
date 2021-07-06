import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footerNav: {
    height: '10vh',
    backgroundColor: theme.palette.success.light,
    borderRadius: '20px 20px 0 0',
    boxShadow: '0px -3px 3px rgba(0,0,0,0.25)',
  },
}));

export default useStyles;
