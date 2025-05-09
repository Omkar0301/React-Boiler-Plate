import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box } from '@mui/material';
import { fetchData } from '@redux/actions/userActions';
import { toggleThemeMode } from '@redux/actions/uiActions';
import useStyles from './users-jss';
import PROJECT_NAME from '@constants/project';

function UsersAdminPage() {
  const title = `Users | ${PROJECT_NAME}`;
  const description = 'List of users in the application';

  const dispatch = useDispatch();
  const { loaderBtn } = useSelector((state) => state.ui);

  const { classes } = useStyles();

  const handleThemeToggle = () => {
    dispatch(toggleThemeMode());
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <Box className={classes.root}>
        <h1>Generic React Boilerplate(Admin App)</h1>
        <div className={classes.card}>
          <Button
            variant="contained"
            className={classes.button}
            disabled={loaderBtn.includes('getUsers')}
            onClick={() => {
              dispatch(fetchData());
            }}
          >
            {loaderBtn.includes('getUsers') ? 'Loading...' : 'Fetch API'}
          </Button>
        </div>
        <Button variant="contained" onClick={handleThemeToggle} className={classes.button}>
          Switch Theme
        </Button>
      </Box>
    </>
  );
}

export default UsersAdminPage;
