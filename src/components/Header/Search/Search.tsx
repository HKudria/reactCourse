import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {getPhotosState, parsePhoto, setError, setSearch} from '../../../store/flickr/flickrSlice';
import {flickrMethodsEnum} from '../../../store/flickr/FlicrkInterface';


const Search = () => {
    const photoState = useAppSelector(getPhotosState);
    const dispatch = useAppDispatch();

    const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearch(event.target.value))
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (photoState.searchVal) {
                dispatch(parsePhoto({method: flickrMethodsEnum.SEARCH_PHOTO, params: `&text=${photoState.searchVal}`}))
                dispatch(setSearch(''))
            } else {
                dispatch(setError('Search input is empty'))
                setTimeout(() => dispatch(setError('')), 10000)
            }
        }
    };

    return (
        <div className="form-inline my-2 my-lg-0 me-5">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                   value={photoState.searchVal} onChange={onChangeSearch} onKeyDown={handleKeyDown}/>
        </div>
    )
}

export default Search;