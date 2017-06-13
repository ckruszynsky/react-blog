import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes';
import './index.css';

const middleware = [promise];
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

ReactDOM.render(
    <Provider store={store}>
        {Routes}
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
