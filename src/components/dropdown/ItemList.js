import  React, { Component } from 'react';
//import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import Item from './Item.js';

class ItemList extends Component {
    render() {
        return (
                <div>
                    <Item label='fred' />
                    <Item label='velma' />
                    <Item label='shaggy' />
                    <Item label='scooby' selected />
                </div>
        );
    }
}

//export default connect(null, null)(Home);
export default ItemList;