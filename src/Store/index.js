// this index.js file in the Store folder will import all the necessary
// modules from redux, including any middleware we might use
// it will then export the store so it can be used in the rest of the application

import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

// initializing the middleware (so it uses the imports earlier)
const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

// creates a store that takes rootReducer (all combined reducers) and middleware
const store = createStore(rootReducer, middleware);

export default store;