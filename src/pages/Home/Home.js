import React from 'react';
import PropTypes from 'prop-types';

import Login from '../../components/Login';

import { Grid, GridCol } from 'griz';

// eslint-disable-next-line no-unused-vars
const Home = props => (
  <Grid responsiveLg>
    <GridCol>
      <h2>Login</h2>
      <Login />
    </GridCol>
  </Grid>
);

Home.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};

export default Home;
