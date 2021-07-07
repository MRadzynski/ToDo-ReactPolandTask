import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '73vh',
    margin: '1vh 0',
  },
  settingGroup: {
    width: '90vw',
    margin: '1rem auto 0 auto',
    gap: '2rem',
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  },
  themeSelect: {
    width: '45%',
  },
  textField: {
    width: '45%',
  },
}));

export default useStyles;
