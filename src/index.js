import React from 'react';
import ReactDOM from 'react-dom';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './index.css';

import Header from "./components/Header/Header";
import BlogList from "./components/PostList/PostList";

Amplify.configure(awsconfig);

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Switch>
                <Route path="/portfolio" component={BlogList}/>
                <Route path="/" component={null}/>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);