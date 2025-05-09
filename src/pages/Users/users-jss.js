import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  card: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(3),
    border: `1px solid ${theme.palette.divider}`,
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: 'palegreen',
  },
}));

export default useStyles;
