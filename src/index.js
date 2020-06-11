import React from 'react';
import ReactDOM from 'react-dom';
import App from './View/App';
// The <Provider /> makes the Redux store available to any nested components 
// that have been wrapped in the connect() function. 
import { Provider } from 'react-redux';
import store from './Store';

// Any component called in App will also have access to the Redux store
ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);