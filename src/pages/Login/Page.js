import React from 'react';
import Login from '../../components/Login';
import { Grid, GridCol } from 'griz';

const LoginPage = () => (
  <Grid responsiveLg>
    <GridCol>
      <h2>Login</h2>
      <Login />
    </GridCol>
  </Grid>
);

export default LoginPage;
