import  React, { Component } from 'react';
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


    selectValue = (val) => {
        let selection = _.find(this.props.elements, function(ele) {
            return ele.value === val;
        })
        if (typeof selection !== 'undefined') {
            this.handleChange(selection.label);
            this.props.onSelected(selection);
        }
    }

    handleChange = (value) => {
        let filtered = (value === '') ? '' : _.filter(this.props.elements, function(ele) {
            return ele.label.toLowerCase().indexOf(value.toLowerCase()) === 0;
        }); 

        this.setState({ 
            entry: value,
            filtered: filtered,
            selectedValue: (filtered.length ===1) ? filtered[0].value : -1
        });

        if (filtered.length === 0) 
            this.props.onSelected({label:'',value:-1});
    }

    handleSelection = () => {
        this.selectValue(this.state.selectedValue);
    }

    handlePick = (val) => {
        this.selectValue(val);
    }


    render() {

        return (
            <div>
                <Entry value={this.state.entry} onChange={this.handleChange} onSelection={this.handleSelection} />
                <ItemList elements={this.state.filtered} isVisible={this.state.filtered.length > 0} 
                    selectedValue={this.state.selectedValue} onPick={this.handlePick} />
            </div>
        );
    }
}

Dropdown.propTypes = {
    elements: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
    })),
    onSelected: PropTypes.func.isRequired

}

//export default connect(null, null)(Home);
export default Dropdown;