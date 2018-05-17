import React, { Component } from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { fetchCampsiteById } from '../../actions';
import { getCampsiteById } from '../../selectors';

class Campsite extends Component {
    componentDidMount () {
        this.props.fetchCampsiteById(this.props.params.id)
    }

    renderContent () {
        const {campsite} = this.props
        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-thumbnail'
                            src={campsite.image}
                            alt={campsite.name}
                        />
                    </div>
                    {/* <div className='col-md-6'>
                        Our fields
                    </div> */}
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'>
                        ${campsite.price}
                    </h4>
                    <h4>
                        {campsite.name}
                    </h4>
                    <h6>
                        Campground Description:
                    </h6>
                    <p>
                        {campsite.campgroundDescription}
                    </p>
                    <h6>
                        Tent Description:
                    </h6>
                    <p>
                        {campsite.tentDescription}
                    </p>
                </div>
            </div>
        )
    }

    render () {
        const { campsite } = this.props
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {campsite && this.renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        campsite: getCampsiteById(state, state.campsitePage.id)
    }
}

const mapDispatchToProps = {
    fetchCampsiteById
}

export default connect(mapStateToProps, mapDispatchToProps)(Campsite);