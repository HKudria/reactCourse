import React, {useEffect, useState} from 'react';

const Search = () => {
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setSearchValue(localStorage.getItem('searchValue') ?? '')
    }, []);


    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
        localStorage.setItem('searchValue', event.target.value)
    }

    return (
        <div className="form-inline my-2 my-lg-0 me-5">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                   value={searchValue} onChange={onChangeSearch}/>
        </div>
    )
}

export default Search;