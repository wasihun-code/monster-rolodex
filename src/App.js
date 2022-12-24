import React, { Component } from 'react'

import {CardList} from './components/card-list.components'

import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchMonsters: '',
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters:users}))
    }
    render() {
        return (
            <div className="App">
            <input type="search" placeholder='search monsters' onChange={e => {
                this.setState({searchMonsters: e.target.value}, () => console.log(this.state))
            }} />
            <CardList monsters={this.state.monsters}>
            </CardList>
            </div>
        );
    }
}


export default App;