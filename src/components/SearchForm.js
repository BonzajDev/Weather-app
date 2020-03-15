import React from 'react';
import '../assets/styles/SearchForm.scss';

const SearchForm = (props) => {
    return (
        <div className="form">
            <form action="" onSubmit={props.click}>
                <input type="text" className="searchInput" value={props.value} placeholder="City" onChange={props.change} />
                <button className="searchButton">Search</button>
            </form>
        </div>
    );
}



export default SearchForm;