import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    margin: '1rem auto',
    width: '90vw',
    borderRadius: '20px',
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
    display: 'flex',
    width: '80%',
    margin: '0 auto',
    flexDirection: 'column',
    gap: '0.2rem',
    padding: '0.5rem',
    flexWrap: 'wrap',
    '&:last-child': {
      padding: '0.5rem',
    },
  },
  linkContainer: {
    width: '100%',
    padding: '0.5rem 0 0 0',
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.5rem',
  },
  link: {
    padding: '0',
    textDecoration: 'none',
    color: theme.palette.secondary.main,
    textAlign: 'center',
  },
  textCrossed: {
    textDecoration: 'line-through',
  },
}));

export default useStyles;
