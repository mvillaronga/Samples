import  React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'underscore';

class Entry extends Component {
    render() {
        return (
                <input type='text' />
        );
    }
}

Entry.propTypes = {
}

//export default connect(null, null)(Home);
export default Entry;