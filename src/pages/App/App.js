import React from 'react';
import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';

import './App.scss';

const App = props => <div>{props.children}</div>;

App.propTypes = {
  children: PropTypes.any,
};

export default App;
