import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';

import Item from './Item.js';

class ItemList extends Component {
    render() {
        let sel = this.props.selectedValue;
        let handler = this.props.onPick;
        const items = _.map(this.props.elements, function (ele) {
            let selected = (ele.value === sel)
            return <Item label={ele.label} value={ele.value} key={ele.value} selected={selected} onPick={handler}/>
        } );
        
        return (
                <div style={{
                    display: this.props.isVisible ? 'inline-block' : 'none',
                    overflowY: 'auto',
                    border: '1px solid',
                    width: 'auto'
                 }}>
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
    selectedValue: PropTypes.number.isRequired,
    onPick: PropTypes.func.isRequired
}

export default ItemList;