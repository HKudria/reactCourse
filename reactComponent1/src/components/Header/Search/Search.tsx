import React from 'react';

interface SearchState {
    searchValue: string
}

export default class Search extends React.Component {
    state: SearchState = {
        searchValue: ''
    };

    componentDidMount() {
        this.setState({searchValue: localStorage.getItem('searchValue') ?? ''});
    }

    onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({searchValue: event.target.value});
        localStorage.setItem('searchValue', event.target.value)
    }

    render() {
        return (
            <div className="form-inline my-2 my-lg-0 me-5">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                       value={this.state.searchValue} onChange={this.onChangeSearch}/>
            </div>
        )
    }


}