import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import R from 'ramda';

import { fetchCampsites } from '../../actions';
import { getCampsites } from '../../selectors';

class Campsites extends Component {
    componentDidMount () {
        this.props.fetchCampsites()
    }
    
    renderCampsite ( campsite, index) {
        const shortDescription = `${R.take(60, campsite.campgroundDescription)}...`

        return (
            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className='thumbnail'>
                    <img
                        className='img-thumbnail'
                        src={campsite.image}
                        alt={campsite.name}
                    />
                </div>
                <div className='caption'>
                    <h4 className='pull-right'>
                        ${campsite.price}
                    </h4>
                    <h4>
                        <Link to={`/campsites/${campsite.id}`}>
                            {campsite.name}
                        </Link>
                    </h4>
                    <p>
                        {shortDescription}
                    </p>
                    <p className='itemButton'>
                        <button
                            className='btn btn-primary'
                        >
                            Book Now!
                        </button>
                        <Link
                            to={`/campsites/${campsite.id}`}
                            className='btn btn-default'
                        >
                            More Info
                        </Link>
                    </p>
                </div>
            </div>
        )
    }

    render () {
        const { campsites } = this.props
        console.log('campsites', campsites)
        return (
            <div className='books row'>
                { campsites.map((campsite, index) => this.renderCampsite(campsite, index))}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    campsites: getCampsites(state)
})

const mapDispatchToProps = {
    fetchCampsites
}

export default connect(mapStateToProps, mapDispatchToProps)(Campsites)