import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: theme.heightVh ? theme.heightVh * 73 : '73vh',
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '1rem',
    margin: theme.heightVh ? `${theme.heightVh}px auto` : '1vh  auto',
    padding: '0.5rem 0',
    overflow: 'hidden auto',
  },
  contentGroup: {
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  paper: {
    width: '100%',
    padding: '1rem',
    borderRadius: '1rem',
  },
  groupTitle: {
    fontWeight: 'bold',
  },
  datatimeContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '0.5rem',
  },
  datetime: {
    padding: '0.3rem',
    borderRadius: '0.5rem',
    backgroundColor:
      theme?.palette.type === 'dark'
        ? theme?.palette.grey[500]
        : theme?.palette.grey[300],
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginRight: '1rem',
  },
}));

export default useStyles;
