import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: (customTheme) =>
      customTheme.heightVh ? customTheme.heightVh * 100 : '100vh',
    backgroundColor: (customTheme) => customTheme?.palette.backgroundColor,
  },
}));

export default useStyles;
