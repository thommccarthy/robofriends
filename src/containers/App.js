import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundary from "../components/ErrorBoundary";
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
  constructor() {//lifecycle hook
  	super() //calls the constructor
  	this.state = {
  		robots: [], 
  		searchfield: ''
  	}
  }

componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> {
		return response.json();
	})
	 .then(users => {
	this.setState({ robots: users })
	});
	 
}

onSearchChange = (event) => { //always use arrow function for method creation inside object
	this.setState({ searchfield: event.target.value })
}

render() {//lifecycle hook - every time state changes, render is run again
  const filteredRobots = this.state.robots.filter(robots =>{
	return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
  	if (this.state.robots.length === 0) {
  		return <h1>Loading</h1>
  		} else {
		return (
		<div className="tc">
			<h1 className="f1">ROBOFRIENDS</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundary>
				<CardList robots={ filteredRobots }/>
				</ErrorBoundary>
			</Scroll>
		</div>
	  );
    }
  }
}

//export
export default App;