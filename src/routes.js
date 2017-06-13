import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/app';
import PostList from './components/posts/list.js';
import NewPost from './components/posts/new.js';
import PostDetails from './components/posts/details.js';


const Routes = (
    <Router>    
        <App>    
            <Switch>            
                <Route exactPath="/" component={PostList} />
                <Route path="/posts/:id" component={PostDetails} />
                <Route path="/posts/new" component={NewPost} />
            </Switch>        
        </App>
     </Router>
)
export default Routes;