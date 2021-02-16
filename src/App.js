import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; //destructuring, .js is implied

const state = {
	robots: robots,
	searchfield: "",
}



class App extends Component {
  constructor() {
  	super()
  	this.state = {
  		robots: robots, 
  		searchfield: ''
  	}
  }


//creates event
onSearchChange(event) {
	console.log(event);
}


  render() {
	return (
		<div className="tc">
			<h1>ROBOFRIENDS</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={this.state.robots}/>
		</div>
	);
}
}

//exports from the
export default App;