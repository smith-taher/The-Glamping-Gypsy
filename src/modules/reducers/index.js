import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import campsites from './campsites';
import campsitesPage from './campsitesPage';
import packages from './packages';
import packagesPage from './packagesPage';

export default combineReducers ({
    routing: routerReducer,
    campsites,
    campsitesPage,
    packages,
    packagesPage
})