import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, browserHistory} from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

const store = configureStore(); //can pass initial state (overrides default params in reducer)

render (
    <Provider store = {store}>
        <Router history = {browserHistory} routes = {routes} />
    </Provider>,
    document.getElementById('app')
);

