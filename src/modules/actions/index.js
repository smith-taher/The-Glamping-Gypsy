import {
    FETCH_CAMPSITES_START,
    FETCH_CAMPSITES_SUCCESS,
    FETCH_CAMPSITES_FAILURE,
    FETCH_PACKAGES_START,
    FETCH_PACKAGES_SUCCESS,
    FETCH_PACKAGES_FAILURE
} from '../actionTypes';
import {
    fetchCampsites as fetchCampsitesApi,
    fetchPackages as fetchPackagesApi
} from '../api';

export const fetchCampsites = () => async dispatch => {

    try {
        dispatch ({ type: FETCH_CAMPSITES_START })

        const campsites = await fetchCampsitesApi()

        dispatch ({
            type: FETCH_CAMPSITES_SUCCESS,
            payload: campsites
        })
        
    } catch (err) {
        dispatch ({
            type: FETCH_CAMPSITES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchPackages = () => async dispatch => {

    try {
        dispatch ({ type: FETCH_PACKAGES_START })

        const packages = await fetchPackagesApi()

        dispatch ({
            type: FETCH_PACKAGES_SUCCESS,
            payload: packages
        })
        
    } catch (err) {
        dispatch ({
            type: FETCH_PACKAGES_FAILURE,
            payload: err,
            error: true
        })
    }
}