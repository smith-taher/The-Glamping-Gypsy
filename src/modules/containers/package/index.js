import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPackageById } from '../../actions';

class Package extends Component {
    componentDidMount () {
        this.props.fetchPackageById(this.props.params.id)
    }
    render () {
        return (
            <div>
                Premium Package
            </div>
        )
    }
}

const maptDispatchToProps = {
    fetchPackageById
}

export default connect(null, maptDispatchToProps)(Package);