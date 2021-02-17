import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; //destructuring, .js is implied

//1. acts like a memory
//2. an object that describes the application
//3. state is able to change
//4. when child component recieves it, can't be changed
//5. this is called one way data flow

const state = {
	robots: robots,
	searchfield: '',
}

//the use of state requires class
//constructor function that pulls "Component" Object from react
class App extends Component { //destructured, implies React.Component
  constructor() {
  	super()
  	this.state = {
  		robots: robots, 
  		searchfield: ''
  	}
  }



onSearchChange(event) {
	console.log(event.target.value); //event.target.value tracks the keys
}


  render() {
	return (
		<div className="tc">
			<h1>ROBOFRIENDS</h1>
			//these are components components 
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={this.state.robots}/>
		</div>
	);
}
}

//exports from the
export default App;