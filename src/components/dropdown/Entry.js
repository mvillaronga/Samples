import  React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Entry extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
                <input type='text' value={this.props.value} onChange={this.handleChange} />
        );
    }
}

Entry.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

//export default connect(null, null)(Home);
export default Entry;
