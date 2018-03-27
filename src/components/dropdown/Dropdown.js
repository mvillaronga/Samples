import  React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ItemList from './ItemList.js';
import Entry from './Entry.js';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: '',
            selectedValue: -1
        }
    }

    handleChange(value) {
        this.setState({ entry: value});
    }

    render() {
        return (
            <div>
                <Entry value={this.state.entry} onChange={this.handleChange.bind(this)} />
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