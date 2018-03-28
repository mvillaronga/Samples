import  React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
    handleClick = (val) => {
        this.props.onPick(val);
    }

    defaultProps = {
        selected: false
    }

    render() {
            if (this.props.selected) {
                return <div style={{backgroundColor: 'cyan', border: '1px', padding: '3px'}} onClick={() => {this.handleClick(this.props.value)}}>{this.props.label}</div>
            } else {
                return <div style={{border: '1px'}} onClick={() => {this.handleClick(this.props.value)}}>{this.props.label}</div>
            }
    }
}

Item.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onPick: PropTypes.func.isRequired,
    selected: PropTypes.bool
}

export default Item;