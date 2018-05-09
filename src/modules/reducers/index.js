import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import campsites from './campsites';

export default combineReducers ({
    routing: routerReducer,
    campsites
})