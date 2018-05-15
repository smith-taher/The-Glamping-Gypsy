import R from 'ramda';

const getCampsiteById = (state, id) => R.prop(id, state.campsites)

export const getCampsites = state => {
    const campsites = R.map(id => getCampsiteById(state, id), state.campsitesPage.ids)
    return campsites
}

const getPackagesById = (state, id) => R.prop(id, state.packages)

export const getPackages = state => {
    const packages = R.map(id => getPackagesById(state, id), state.packagesPage.ids)
    return packages
}