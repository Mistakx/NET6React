import React, {useEffect, useState} from 'react';
import SearchedPlatformResultsStore from "../../../stores/searches/SearchedPlatformResultsStore";
import UserPlaylistsModal from "../../modals/userPlaylistsModal/UserPlaylistsModal";
import SearchResultComponentFactory from "../../cards/content/SearchResultComponentFactory";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";

function SearchResultsList(): JSX.Element {

    const [searchList, setSearchList] = useState<JSX.Element[]>();

    const searchedResults = SearchedPlatformResultsStore(state => state.searchedResults)

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

            <div className="results">
                <div className="row">

                    {searchList}

                </div>
            </div>
        </div>

    )

}

export default SearchResultsList;
