import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    width: '100vw',
    height: '73vh',
    display: 'flex',
    flexWrap: 'nowrap',
    gap: '1rem',
    margin: '1vh auto',
    padding: '0.5rem 0',
    overflow: 'hidden scroll',
  },
  contentGroup: {
    width: '90vw',
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
    backgroundColor: '#ddd',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginRight: '1rem',
  },
}));

export default useStyles;
