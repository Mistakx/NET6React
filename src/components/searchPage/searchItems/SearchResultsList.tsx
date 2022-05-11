import React, {useEffect, useState} from 'react';
import SearchedListStore from "../../../stores/SearchedListStore";
import PlaylistsModal from "../playlistsModal/PlaylistsModal";
import SearchResultComponentFactory from "./SearchResultComponentFactory";

function SearchResultsList(): JSX.Element {

    const [searchList, setSearchList] = useState<JSX.Element[]>();

    const searchedResults = SearchedListStore(state => state.searchedResults)

    useEffect(() => {

        if (searchedResults) {


            // No results
            if (searchedResults.length === 0) {
                setSearchList([<p>No results.</p>]);
            }

            // Valid results
            else if (searchedResults.length > 0) {
                setSearchList(SearchResultComponentFactory.create(searchedResults));
            }
        }


    }, [searchedResults]);

    return (

        <div>

            <PlaylistsModal/>

            <div className="results">
                <div className="row">

                    {searchList}

                </div>
            </div>
        </div>

    )

}

export default SearchResultsList;
