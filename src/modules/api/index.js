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