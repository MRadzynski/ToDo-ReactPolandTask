import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    margin: '1rem auto',
    borderRadius: '20px',
  },
  cardHidden: {
    display: 'none',
  },
  checkbox: {
    '&&:hover': {
      backgroundColor: 'transparent',
    },
  },
  cardContainer: {
    width: '100%',
    display: 'flex',

    '&:last-child': {
      padding: '0.5rem',
    },
  },
  contentContainer: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: '0.2rem',
    margin: '0 auto',
    padding: '0.5rem',
    '&:last-child': {
      padding: '0.5rem',
    },
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.5rem',
    position: 'relative',
    padding: '0.5rem 0 0 0',
  },
  date: {
    position: 'absolute',
    left: '0',
    marginRight: '1rem',
  },
  link: {
    padding: '0',
    color: theme?.palette?.secondary?.main,
    textAlign: 'center',
    textDecoration: 'none',
  },
  textCrossed: {
    textDecoration: 'line-through',
  },
}));

export default useStyles;
