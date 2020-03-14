import React from 'react';
import '../assets/styles/SearchForm.scss';

const SearchForm = (props) => {
    return (
        <form action="" onSubmit={props.click}>
            <input type="text" value={props.value} placeholder="Insert city" onChange={props.change} />
            <button>Search</button>
        </form>
    );
}



export default SearchForm;