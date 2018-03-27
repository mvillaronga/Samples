import  React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ItemList from './ItemList.js';
import Entry from './Entry.js';

class Dropdown extends Component {
    render() {
        return (
            <div>
                <Entry />
                <ItemList elements={this.props.elements} isVisible={true} />
            </div>
        );
    }
}

Dropdown.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    }))
}

//export default connect(null, null)(Home);
export default Dropdown;