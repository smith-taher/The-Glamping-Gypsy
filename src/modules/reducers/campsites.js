import R from 'ramda';

import {
    FETCH_CAMPSITES_SUCCESS,
    FETCH_CAMPSITE_BY_ID_SUCCESS
} from '../actionTypes';

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_CAMPSITES_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)
        case FETCH_CAMPSITE_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)
        default:
            return state
    }
}