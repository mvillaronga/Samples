import  React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'underscore';

import Item from './Item.js';

class ItemList extends Component {
    render() {
        let sel = this.props.selectedValue;
        const items = _.map(this.props.elements, function (ele) {
            let selected = (ele.value === sel)
            return <Item label={ele.label} value={ele.value} key={ele.value} selected={selected} />
        } );
        
        return (
                <div style={{display: this.props.isVisible ? 'block' : 'none' }}>
                    {items}
                </div>
        );
    }
}

ItemList.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    })),
    isVisible: PropTypes.bool.isRequired,
    selectedValue: PropTypes.number.isRequired
}

//export default connect(null, null)(Home);
export default ItemList;