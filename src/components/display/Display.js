import  React, { Component } from 'react';
import PropTypes from 'prop-types';

class Display extends Component {
    render= () => {
        return (
            <div>
                <div>Label:{this.props.label}</div>
                <div>Value:{this.props.value}</div>
            </div>
        )
    }
}

Display.propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
}

export default Display