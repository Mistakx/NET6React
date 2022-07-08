import React, {useEffect, useState} from 'react';
import {GeneralizedResult} from "../../../models/apiResponses/GenericResults";
import RecommendationRequests from "../../../requests/backendRequests/RecommendationRequests";
import SearchResultComponentFactory from "../../cards/content/SearchResultComponentFactory";
import AlertStore from "../../../stores/AlertStore";
import TrendingTopBarStore from "../../../stores/topBars/TrendingTopBarStore";

function TrendingResultsList(): JSX.Element {

    const [searchList, setSearchList] = useState<JSX.Element[]>();

    const [trendingResults, setTrendingResults] = useState<GeneralizedResult[]>();

    const showing = TrendingTopBarStore(state => state.showing)

    const prettyAlert = AlertStore(state => state.prettyAlert)

    useEffect(() => {
        let sessionToken = localStorage.getItem("sessionToken");
        if (sessionToken) {
            (async () => {
                if (showing === "Monthly") setTrendingResults(await RecommendationRequests.getTrendingMonthlyContent(1, 40, sessionToken));
                else if (showing === "Weekly") setTrendingResults(await RecommendationRequests.getTrendingWeeklyContent(1, 40, sessionToken));
                else if (showing === "Daily") setTrendingResults(await RecommendationRequests.getTrendingDailyContent(1, 40, sessionToken));
            })()
        } else {
            prettyAlert("You must be logged in to view trending content", false);
        }
    }, [showing]);

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
        <div className="results">
            <div className="row">

                {searchList}

            </div>
        </div>

    )

}

export default TrendingResultsList;
