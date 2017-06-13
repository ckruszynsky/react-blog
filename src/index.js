import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app/';
import PostList from './components/posts/list.js';
import NewPost from './components/posts/new.js';
import PostDetails from './components/posts/details.js';

import './index.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
     <BrowserRouter>
        <div>            
            <Route path="/posts/:id" component={PostDetails} />
            <Route path="/posts/new" component={NewPost} />
            <Route path="/" component={PostList} />
            <App />
        </div>        
     </BrowserRouter>        
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
