import React, {useEffect, useState} from 'react';
import {GeneralizedResult} from "../../../models/apiResponses/GenericResults";
import RecommendationRequests from "../../../requests/backendRequests/RecommendationRequests";
import SearchResultComponentFactory from "../../cards/content/SearchResultComponentFactory";
import UserPlaylistsModal from "../../modals/userPlaylistsModal/UserPlaylistsModal";
import UserPlaylistsModalStore from "../../../stores/modals/UserPlaylistsModalStore";

function TrendingResultsList(): JSX.Element {

    const [searchList, setSearchList] = useState<JSX.Element[]>();

    const [trendingResults, setTrendingResults] = useState<GeneralizedResult[]>([]);

    const setShowingPlaylistsModal = UserPlaylistsModalStore(state => state.setShowingPlaylistsModal)

    useEffect(() => {
        setShowingPlaylistsModal(false)
    }, []);

    useEffect(() => {
        (async () => {
            setTrendingResults(await RecommendationRequests.getTrendingContent(1, 40, window.sessionStorage.getItem("sessionToken")!));
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
