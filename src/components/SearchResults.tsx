import React, {useEffect, useState} from 'react';
import SearchListStore from "../stores/SearchListStore";

function SearchResults(): JSX.Element {

    const [searchListHtml, setSearchListHtml] = useState<JSX.Element[]>();

    const searchList = SearchListStore(state => state.searchList)

    useEffect(() => {
        // No results
        if (searchList && searchList.getItemsHtml().length === 0) {
            setSearchListHtml([<p>No results</p>]);
        }

        // Valid results
        else if (searchList && searchList.getItemsHtml().length > 0) {
            setSearchListHtml(searchList.getItemsHtml());
        }
    }, [searchList]);



    return (

        <div className="results">

            <div className="row">

                {searchListHtml}

            </div>

        </div>

    )

}

export default SearchResults;
