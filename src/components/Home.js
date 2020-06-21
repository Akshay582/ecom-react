import React, { Component } from 'react';
import ShoppingList from './ShoppingList/ShoppingList';
import Sort from './Sort/Sort';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            sorted: false
        }
        this.Sort = this.Sort.bind( this );
        this.removeSort = this.removeSort.bind( this );
    }
    Sort() {
        this.setState( { sorted: true } )
    }
    removeSort() {
        this.setState( { sorted: false } )
    }
    render() {
        return (
            <div>
                <Sort Sort={this.Sort} removeSort={this.removeSort} />
                <ShoppingList sorted={this.state.sorted} />
            </div>
        )
    }
}
