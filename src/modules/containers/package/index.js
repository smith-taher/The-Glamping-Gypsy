import React, { Component } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { fetchPackageById } from '../../actions';
import { getPackageById } from '../../selectors';

class Package extends Component {
    componentDidMount () {
        this.props.fetchPackageById(this.props.params.id)
    }

    renderContent () {
        const {packageP} = this.props
        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-thumbnail'
                            src={packageP.image}
                            alt={packageP.name}
                        />
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>
                        ${packageP.price}
                    </h4>
                    <h4>
                        {packageP.name}
                    </h4>
                    <p>
                        {packageP.description}
                    </p>

                </div>
            </div>
        )
    }

    render () {
        const { packageP } = this.props
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            {packageP && this.renderContent()}
                        </div>
                    </div>
                </div>             
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        packageP: getPackageById(state, state.packagePage.id)
    }
}

const maptDispatchToProps = {
    fetchPackageById
}

export default connect(mapStateToProps, maptDispatchToProps)(Package);