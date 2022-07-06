import {GenericLivestreamResult, GeneralizedResult, GenericTrackResult, GenericVideoResult, GenericPodcastResult
, GenericRadioResult} from "../../../models/apiResponses/GenericResults";
import LivestreamSearchItem from "./LivestreamSearchItem";
import VideoSearchItem from "./VideoSearchItem";
import TrackSearchItem from "./TrackSearchItem";
import PodcastSearchItem from "./PodcastSearchItem";
import RadioSearchItem from "./RadioSearchItem";

class SearchResultComponentFactory {

    static create(results: GeneralizedResult[]) {

        let searchResultItems: JSX.Element[] = []

        for (const currentGenericItem of results) {

            switch (currentGenericItem.resultType) {

                    
                case "GenericVideoResult":
                    let currentVideoItem = <VideoSearchItem
                        key={currentGenericItem.platformId}
                        searchResult={currentGenericItem as GenericVideoResult}
                        searchResults={results}
                    />
                    searchResultItems.push(currentVideoItem);
                    break;

                case "GenericTrackResult":
                    let currentTrackItem = <TrackSearchItem
                        key={currentGenericItem.platformId}
                        searchResult={currentGenericItem as GenericTrackResult}
                        searchResults={results}
                    />
                    searchResultItems.push(currentTrackItem);
                    break;

                case "GenericPodcastResult":
                    let currentPodcastItem = <PodcastSearchItem
                        key={currentGenericItem.platformId}
                        searchResult={currentGenericItem as GenericPodcastResult}
                        searchResults={results}
                    />
                    searchResultItems.push(currentPodcastItem);
                    break;

                case "GenericLivestreamResult":
                    let currentLivestreamItem =
                        <LivestreamSearchItem
                            key={currentGenericItem.platformId}
                            searchResult={currentGenericItem as GenericLivestreamResult}
                            searchResults={results}
                        />
                    searchResultItems.push(currentLivestreamItem);
                    break;

                case "GenericRadioResult":
                    let currentRadioItem =
                        <RadioSearchItem
                            key={currentGenericItem.platformId}
                            searchResult={currentGenericItem as GenericRadioResult}
                            searchResults={results}
                        />
                    searchResultItems.push(currentRadioItem);
                    break;
            }

        }

        return searchResultItems

    }
}

export default SearchResultComponentFactory;