import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import endpoints from './api';

import reducer from './reducers';

const middlewares = [thunk.withExtraArgument({ endpoints })];

export default () => createStore(reducer, applyMiddleware(...middlewares));
