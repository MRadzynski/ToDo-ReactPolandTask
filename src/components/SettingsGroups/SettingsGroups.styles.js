import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: theme.heightVh ? theme.heightVh * 73 : '73vh',
    margin: theme.heightVh ? `${theme.heightVh}px auto` : '1vh  auto',
  },
  settingGroup: {
    gap: '2rem',
    margin: '1rem auto 0 auto',
  },
  contentContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    borderRadius: '1rem',
  },

  textField: {
    width: '45%',
  },
}));

export default useStyles;
