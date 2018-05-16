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
import Campsites from './modules/containers/campsites';
import Campsite from './modules/containers/campsite';
import Packages from './modules/containers/packages';
import Package from './modules/containers/package';
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
                <Route path='/campsites' component={Campsites} />
                <Route path='/campsites/:id' component={Campsite} />
                <Route path='/packages' component={Packages} />
                <Route path='/packages/:id' component={Package} />
                <Route path='/photos' component={Photos} />
                <Route path='/faq' component={FAQ} />
                <Route path='/contact' component={Contact} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
