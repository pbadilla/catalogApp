import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunkMiddleware from 'redux-thunk';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './modules';
import App from './pages/App';
import Login from './containers/Home';
import About from './containers/About';

import { GlobalStyle, MainContent } from './index.styles';

import { Provider as ProviderWrapper } from 'rendition';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const routes = (
  <Router>
    <GlobalStyle />
    <MainContent>
      <ProviderWrapper>
        <App>
          <Route exact path='/' component={Login} />
          <Route path='/about' component={About} />
        </App>
      </ProviderWrapper>
    </MainContent>
  </Router>
);

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
