import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import './react-toolbox/theme.css';
import theme from './react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';

import reducers from './reducers';
import Home from './components/home';
import Search from './containers/search';
import Contacts from './containers/contacts';
import Header from './components/header';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={ createStoreWithMiddleware(reducers) }>
        <Router>
          <ThemeProvider theme={theme}>
            <div>
              <Header />
              <div className="wrap-content">
                <Route exact path="/" component={ Home } />
                <Route exact path="/search" component={ Search } />
                <Route exact path="/contacts" component={ Contacts } />
              </div>
            </div>
          </ThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
