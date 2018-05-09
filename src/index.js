import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

import Layout from './modules/containers/layout';
import Home from './modules/containers/home';
import Reservations from './modules/containers/reservations';
import Packages from './modules/containers/packages'
import Photos from './modules/containers/photos';
import FAQ from './modules/containers/faq';
import Contact from './modules/containers/contact';

import reducers from './modules/reducers';

const store = createStore(reducers, composeWithDevTools (
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render (
    <Provider store={store}>
        <Router history={history}>
            <Route component={Layout}>
                <Route path='/' component={Home} />
                <Route path='/reservations' component={Reservations} />
                <Route path='/packages' component={Packages} />
                <Route path='/photos' component={Photos} />
                <Route path='/faq' component={FAQ} />
                <Route path='/contact' component={Contact} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
