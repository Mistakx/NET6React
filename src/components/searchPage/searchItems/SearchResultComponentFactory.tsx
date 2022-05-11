import {
    GenericLivestreamResult, GenericResult,
    GenericTrackResult,
    GenericVideoResult
} from "../../../models/apiRequests/GenericResults";
import LivestreamSearchItem from "./LivestreamSearchItem";
import VideoSearchItem from "./VideoSearchItem";
import TrackSearchItem from "./TrackSearchItem";

class SearchResultComponentFactory {

    static create(results: GenericResult[]) {

        let searchResultItems: JSX.Element[] = []

        for (const currentGenericItem of results) {

            switch (currentGenericItem.interface) {

                case "GenericVideoResult":
                    let currentVideoItem = <VideoSearchItem
                        item={currentGenericItem as GenericVideoResult}
                    />
                    searchResultItems.push(currentVideoItem);
                    break;

                case "GenericTrackResult":
                    let currentTrackItem = <TrackSearchItem
                        item={currentGenericItem as GenericTrackResult}
                    />
                    searchResultItems.push(currentTrackItem);
                    break;

                case "GenericLivestreamResult":
                    let currentLivestreamItem =
                        <LivestreamSearchItem
                            item={currentGenericItem as GenericLivestreamResult}
                        />
                    searchResultItems.push(currentLivestreamItem);

            }

        }

        return searchResultItems

    }
}

export default SearchResultComponentFactory;