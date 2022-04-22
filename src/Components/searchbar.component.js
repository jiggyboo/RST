import React from 'react';

export default function Searchbar(props) {

    return (
        <div className="searchbar">
            <div className="searchbar-body">
                <input type="text" className="searchbar-input" placeholder="Search Ticker"></input>
                <button className="searchbar-button" onClick={props.setLogin}>Search</button>
            </div>
        </div>
    )
}