import  React, { Component } from 'react';
import PropTypes from 'prop-types';

class Entry extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    
    handleChange = (event) => {
        this.props.onChange(event.target.value);
    }

    handleKeyPress = (evt) => {
        if (evt.key === 'Enter') {
            this.props.onSelection();
        }
    }

    render() {
        return (
                <input type='text' value={this.props.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
        );
    }
}

Entry.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSelection: PropTypes.func.isRequired
}
export default Entry;
