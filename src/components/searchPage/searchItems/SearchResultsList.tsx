import React, {useEffect, useState} from 'react';
import SearchedListStore from "../../../stores/SearchedListStore";
import PlaylistsModal from "../playlistsModal/PlaylistsModal";

function SearchResultsList(): JSX.Element {

    const [searchListHtml, setSearchListHtml] = useState<JSX.Element[]>();

    const searchList = SearchedListStore(state => state.searchedList)

    useEffect(() => {

        if (searchList) {
            let itemsHTML = searchList.getSearchItems()

            // No results
            if (itemsHTML.length === 0) {
                setSearchListHtml([<p>No results.</p>]);
            }

            // Valid results
            else if (itemsHTML.length > 0) {
                setSearchListHtml(itemsHTML);
            }
        }


    }, [searchList]);

    return (

        <div>

            <PlaylistsModal/>

            <div className="results">
                <div className="row">

                    {searchListHtml}

                </div>
            </div>
        </div>

    )

}

export default SearchResultsList;
