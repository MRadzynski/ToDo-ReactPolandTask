import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    margin: '3rem 0 1rem 0',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem auto',
    width: '90vw',
    borderRadius: '20px',
  },
  cardContainer: {
    display: 'flex',
    '&:last-child': {
      padding: '0.5rem',
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
    padding: '0.5rem',
    flexWrap: 'wrap',
    '&:last-child': {
      padding: '0.5rem',
    },
  },
}));

export default useStyles;
