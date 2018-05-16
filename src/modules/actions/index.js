import {
    FETCH_CAMPSITES_START,
    FETCH_CAMPSITES_SUCCESS,
    FETCH_CAMPSITES_FAILURE,
    FETCH_PACKAGES_START,
    FETCH_PACKAGES_SUCCESS,
    FETCH_PACKAGES_FAILURE,
    FETCH_CAMPSITE_BY_ID_START,
    FETCH_CAMPSITE_BY_ID_SUCCESS,
    FETCH_CAMPSITE_BY_ID_FAILURE,
    FETCH_PACKAGE_BY_ID_START,
    FETCH_PACKAGE_BY_ID_SUCCESS,
    FETCH_PACKAGE_BY_ID_FAILURE
} from '../actionTypes';
import {
    fetchCampsites as fetchCampsitesApi,
    fetchPackages as fetchPackagesApi,
    fetchCampsiteById as fetchCampsiteByIdApi,
    fetchPackageById as fetchPackageByIdApi
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

export const fetchCampsiteById = id => async dispatch => {

    try {
        dispatch ({ type: FETCH_CAMPSITE_BY_ID_START })

        const campsite = await fetchCampsiteByIdApi(id)

        dispatch ({
            type: FETCH_CAMPSITE_BY_ID_SUCCESS,
            payload: campsite
        })
        
    } catch (err) {
        dispatch ({
            type: FETCH_CAMPSITE_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const fetchPackageById = id => async dispatch => {

    try {
        dispatch ({ type: FETCH_PACKAGE_BY_ID_START })

        const packageP = await fetchPackageByIdApi(id)

        dispatch ({
            type: FETCH_PACKAGE_BY_ID_SUCCESS,
            payload: packageP
        })
        
    } catch (err) {
        dispatch ({
            type: FETCH_PACKAGE_BY_ID_FAILURE,
            payload: err,
            error: true
        })
    }
}