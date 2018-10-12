import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';

import './globalStyles';

import PhoneDetailContainer from './containers/PhoneDetailContainer';
import PhoneListContainer from './containers/PhoneListContainer';

import createStore from './createStore';
import history from './history';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={PhoneListContainer} />
        {/*   <Route path="/phones/:phoneId" component={PhoneDetailContainer} /> */}
      </Switch>
    </Router>
  </Provider>
);

export default App;
