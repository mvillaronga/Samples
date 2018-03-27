import  React, { Component } from 'react';
//import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import ItemList from './ItemList.js';

let elements = [
    { label: "Steve Austin",  value: 1 },
    { label: "Jamie Sommers", value: 2 },
    { label: "Rick Deckard", value: 3 },
    { label: "John Conner", value: 4 },
    { label: "Gaius Baltar", value: 5 },
    { label: "John Smith", value: 6 },
    { label: "Seven Of Nine",  value: 7 }
];

class Dropdown extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <ItemList elements={elements} isVisible={true} />
            </div>
        );
    }
}

//export default connect(null, null)(Home);
export default Dropdown;