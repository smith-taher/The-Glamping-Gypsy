import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCampsiteById } from '../../actions';

class Campsite extends Component {
    componentDidMount () {
        this.props.fetchCampsiteById(this.props.params.id)
    }
    render () {
        return (
            <div>
                Campsite
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchCampsiteById
}

export default connect(null, mapDispatchToProps)(Campsite);