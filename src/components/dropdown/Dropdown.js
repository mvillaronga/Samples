import  React, { Component } from 'react';
//import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'underscore';

import ItemList from './ItemList.js';
import Entry from './Entry.js';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entry: '',
            selectedValue: -1,
            filtered: []
        }
    }

    handleChange(value) {
        let filtered = (value === '') ? '' : _.filter(this.props.elements, function(ele) {
            return ele.label.toLowerCase().indexOf(value.toLowerCase()) === 0;
        }); 

        this.setState({ 
            entry: value,
            filtered: filtered,
            selectedValue: (filtered.length ===1) ? filtered[0].value : -1
        });
        
    }

    render() {

        return (
            <div>
                <Entry value={this.state.entry} onChange={this.handleChange.bind(this)} />
                {/* <ItemList elements={this.props.elements} isVisible={true} /> */}
                <ItemList elements={this.state.filtered} isVisible={this.state.filtered.length > 0} 
                    selectedValue={this.state.selectedValue}/>
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