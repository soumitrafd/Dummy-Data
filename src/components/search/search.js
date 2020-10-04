import React from 'react';
import './search.scss';

const Search = ({searchInput, placeholder}) => {
    return(
        <div className="search-area mb-4">
            <input type="search" onChange={(e)=> searchInput(e.target.value)} placeholder={placeholder} className="form-control" />
        </div>
    )
}

export default Search;