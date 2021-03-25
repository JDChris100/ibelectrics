import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import logo from './graphics/logo.svg';

import Header from "./components/Header/Header";

ReactDOM.render(
    <React.StrictMode>
        <Header logo={logo}/>
        <p>Hello World!</p>
    </React.StrictMode>,
    document.getElementById('root')
);