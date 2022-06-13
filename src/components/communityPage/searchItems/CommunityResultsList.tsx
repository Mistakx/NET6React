import React, {useEffect, useState} from 'react';
import SearchedPlatformResultsStore from "../../../stores/searches/SearchedPlatformResultsStore";
import CommunityResultComponentFactory from "./CommunityResultComponentFactory";
import SearchedCommunityResultsStore from "../../../stores/searches/SearchedCommunityResultsStore";

function CommunityResultsList(): JSX.Element {

    const [searchList, setSearchList] = useState<JSX.Element[]>();

    const searchedResults = SearchedCommunityResultsStore(state => state.searchedCommunityResults)

    useEffect(() => {

        if (searchedResults) {


            // No results
            if (searchedResults.length === 0) {
                setSearchList([<p>No results.</p>]);
            }

            // Valid results
            else if (searchedResults.length > 0) {
                setSearchList(CommunityResultComponentFactory.create(searchedResults));
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

export default CommunityResultsList;
