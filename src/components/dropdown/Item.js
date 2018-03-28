import  React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Item extends Component {
    handleClick = (val) => {
        this.props.onPick(val);
    }

    render() {
            if (this.props.selected) {
                return <div style={{color: 'blue'}} onClick={() => {this.handleClick(this.props.value)}}>{this.props.label}</div>
            } else {
                return <div onClick={() => {this.handleClick(this.props.value)}}>{this.props.label}</div>
            }
    }
}

Item.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onPick: PropTypes.func,            //require later
    selected: PropTypes.bool
}

//export default connect(null, null)(Home);
export default Item;