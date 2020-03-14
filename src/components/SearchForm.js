import React from 'react';
import '../assets/styles/SearchForm.scss';

const SearchForm = (props) => {
    return (
        <form action="" onSubmit={props.click}>
            <input type="text" className="searchInput" value={props.value} placeholder="Insert city" onChange={props.change} />
            <button className="searchButton">Search</button>
        </form>
    );
}



export default SearchForm;