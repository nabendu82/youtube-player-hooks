import React, { useState } from 'react';

const SearchBar = (props) =>{
    const [ term, setTerm ] = useState('');

    this.onInputChange = (event) => {
        setTerm(event.target.value);
        props.onSearchTermChange(event.target.value);
    }

    return (
        <div className="search-bar">
            <input value={term} onChange={this.onInputChange} />
        </div>
    );

}

export default SearchBar;