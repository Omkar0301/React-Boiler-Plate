import React from 'react';
import { Button, Box, Grid } from '@mui/material';
import useStyles from '../Users/users-jss';
import PROJECT_NAME from '@constants/project';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const title = `Welcome | ${PROJECT_NAME}`;
  const description = 'Generic React BoilerPlate Templete';

  const navigate = useNavigate();

  const { classes } = useStyles();

  const handleNavigate = (location) => {
    navigate(`/${location}`);
  };

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <Box className={classes.root}>
        <h1>Welcome to Generic React Boiler Plate</h1>
        <h4>Click Button for User or Admin</h4>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button
              variant="contained"
              onClick={() => handleNavigate('app')}
              className={classes.button}
            >
              User
            </Button>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Button
              variant="contained"
              onClick={() => handleNavigate('admin')}
              className={classes.button}
            >
              Admin
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default WelcomePage;
