import React, {useEffect, useState} from 'react';
import {GeneralizedResult} from "../../../models/apiResponses/GenericResults";
import RecommendationRequests from "../../../requests/backendRequests/RecommendationRequests";
import SearchResultComponentFactory from "../../searchPage/searchItems/SearchResultComponentFactory";
import UserPlaylistsModal from "../../searchPage/userPlaylistsModal/UserPlaylistsModal";

function TrendingResultsList(): JSX.Element {

    const [searchList, setSearchList] = useState<JSX.Element[]>();

    const [trendingResults, setTrendingResults] = useState<GeneralizedResult[]>([]);

    useEffect(() => {
        (async () => {
            setTrendingResults(await RecommendationRequests.getTrending());
        })()
    }, []);

    useEffect(() => {

        if (trendingResults) {

            // No results
            if (trendingResults.length === 0) {
                setSearchList([<p>No results.</p>]);
            }

            // Valid results
            else if (trendingResults.length > 0) {
                setSearchList(SearchResultComponentFactory.create(trendingResults));
            }
        }


    }, [trendingResults]);

    return (

        <div>

            <UserPlaylistsModal/>

            <div className="results">
                <div className="row">

                    {searchList}

                </div>
            </div>
        </div>

    )

}

export default TrendingResultsList;
