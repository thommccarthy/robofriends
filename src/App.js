import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; //destructuring, .js is implied

//STATE
//1. acts like a memory
//2. an object that describes the application
//3. state is able to change
//4. when child component recieves it, can't be changed
//5. this is called one way data flow
//6. usually lives in parent component


//the use of state requires class
//constructor function that pulls "Component" Object from react
class App extends Component { //destructured, implies React.Component
  constructor() {
  	super() //calls the constructor
  	this.state = {
  		robots: robots, 
  		searchfield: ''
  	}
  }

onSearchChange = (event) => { //always use arrow function for method creation inside object
	this.setState({ searchfield: event.target.value })
}

  render() {
  		const filteredRobots = this.state.robots.filter(robots =>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		return (
		<div className="tc">
			<h1>robofriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<CardList robots={ filteredRobots }/>
		</div>
	);
  }
}

//exports from the
export default App;


// below are components which have been imported
			// when referencing a method within the scope of 
			// an object, you must reference the object with "this"