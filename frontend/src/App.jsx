import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import './globalStyles';

import PhoneDetailsContainer from './containers/PhoneDetailsContainer';
import PhoneListContainer from './containers/PhoneListContainer';

import createStore from './createStore';
import history from './history';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={PhoneListContainer} />
        <Route path="/phones/:phoneId" component={PhoneDetailsContainer} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
