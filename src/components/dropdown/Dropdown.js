import  React, { Component } from 'react';
//import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import ItemList from './ItemList.js';

class Dropdown extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <ItemList />
            </div>
        );
    }
}

//export default connect(null, null)(Home);
export default Dropdown;