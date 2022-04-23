import React, {useEffect, useState} from 'react';
import SearchListStore from "../stores/SearchListStore";

function SearchResults(): JSX.Element {

    const [searchListHtml, setSearchListHtml] = useState<JSX.Element>();

    const searchList = SearchListStore(state => state.searchList)

    useEffect(() => {
        // No results
        if (searchList && searchList.getItemsHtml().length === 0) {
            console.log("DEBUG2")
            setSearchListHtml(<p>No results</p>);
        }

        // Valid results
        else if (searchList && searchList.getItemsHtml().length > 0) {
            console.log("DEBUG1")
            setSearchListHtml(<ul className="items"> {searchList.getItemsHtml()} </ul>);
        }
    }, [searchList]);



    return (
        <div> {searchListHtml} </div>
    )

}

export default SearchResults;
