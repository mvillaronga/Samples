import  React, { Component } from 'react';
//import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import Item from './Item.js';

class ItemList extends Component {
    render() {
        return (
                <div>
                    <Item />
                    <Item />
                    <Item />
                </div>
        );
    }
}

//export default connect(null, null)(Home);
export default ItemList;