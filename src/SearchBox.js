import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
	  //good practice to wraps returns in a div
	  <div className='pa2'>
		<input 
		type='search'
		//tachyons is being used for quick shorthand styling
		className="pa3 ba b--green bg-lightest-blue"
		placeholder='search robots'
		onChange={searchChange} //can use html attributes but needs to be camelCase
		 />
	  </div>
	);
}


export default SearchBox;