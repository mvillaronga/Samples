import  React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Item extends Component {

    render() {
            if (this.props.selected) {
                return <div style={{color: 'blue'}}>{this.props.label}</div>
            } else {
                return <div>{this.props.label}</div>
            }
    }
}

Item.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    clickHandler: PropTypes.func,            //require later
    selected: PropTypes.bool
}

//export default connect(null, null)(Home);
export default Item;