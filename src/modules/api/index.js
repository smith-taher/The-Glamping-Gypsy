import R from 'ramda';

import campsites from './mockCampsites';
import packages from './mockPackages';

export const fetchCampsites = async () => {
    return new Promise(resolve => {
        resolve(campsites)
    })
}

export const fetchPackages = async () => {
    return new Promise(resolve => {
        resolve(packages)
    })
}

export const fetchCampsiteById = async id => {
    return new Promise((resolve, reject) => {
        const campsite = R.find(R.propEq('id', id), campsites)
        resolve(campsite)
    })
}

export const fetchPackageById = async id => {
    return new Promise((resolve, reject) => {
        const packageP = R.find(R.propEq('id', id), packages)
        resolve(packageP)
    })
}