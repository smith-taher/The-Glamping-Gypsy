import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import R from 'ramda';

import { fetchPackages } from '../../actions';
import { getPackages } from '../../selectors';

class Packages extends Component {
    componentDidMount () {
        this.props.fetchPackages()
    }
    
    renderPackage ( packageP, index) {
        const shortDescription = `${R.take(60, packageP.description)}...`

        return (
            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className='thumbnail'>
                    <img
                        className='img-thumbnail'
                        src={packageP.image}
                        alt={packageP.name}
                    />
                </div>
                <div className='caption'>
                    <h4 className='pull-right'>
                        ${packageP.price}
                    </h4>
                    <h4>
                        <Link to={`/packages/${packageP.id}`}>
                            {packageP.name}
                        </Link>
                    </h4>
                    <p>
                        {shortDescription}
                    </p>
                    <p className='itemButton'>
                        <button
                            className='btn btn-primary'
                        >
                            Buy Now!
                        </button>
                        <Link
                            to={`/packages/${packageP.id}`}
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
        const { packages } = this.props
        console.log('packages', packages)
        return (
            <div className='books row'>
                { packages.map((packageP, index) => this.renderPackage(packageP, index))}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    packages: getPackages(state)
})

const mapDispatchToProps = {
    fetchPackages
}

export default connect(mapStateToProps, mapDispatchToProps)(Packages)