import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footerNav: {
    height: theme.heightVh ? theme.heightVh * 10 : '10vh',
    borderRadius: '20px 20px 0 0',
    backgroundColor:
      theme?.palette?.type === 'dark'
        ? theme.palette.primary.main
        : theme.palette.primary.light,
    boxShadow: '0px -3px 3px rgba(0,0,0,0.25)',
  },
}));

export default useStyles;
