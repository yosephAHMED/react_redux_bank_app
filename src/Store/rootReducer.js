// imports from redux -- combineReducers allows us to store all reducers in one 'rootReducer'
import { combineReducers } from 'redux';

// export default so import does not need to be destructured
import bankReducer from './reducers/bankReducer';

// Initializations
const rootReducer = combineReducers({
  bank: bankReducer,
});

// Exports
export default rootReducer;