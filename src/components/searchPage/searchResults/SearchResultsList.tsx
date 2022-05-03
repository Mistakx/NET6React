import React, {useEffect, useState} from 'react';
import SearchedListStore from "../../../stores/SearchedListStore";

function SearchResultsList(): JSX.Element {

    const [searchListHtml, setSearchListHtml] = useState<JSX.Element[]>();

    const searchList = SearchedListStore(state => state.searchedList)

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

export default SearchResultsList;
