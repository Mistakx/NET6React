import {
    GenericLivestreamResult, GeneralizedResult,
    GenericTrackResult,
    GenericVideoResult
} from "../../../models/apiRequests/GenericResults";
import LivestreamSearchItem from "./LivestreamSearchItem";
import VideoSearchItem from "./VideoSearchItem";
import TrackSearchItem from "./TrackSearchItem";

class SearchResultComponentFactory {

    static create(results: GeneralizedResult[]) {

        let searchResultItems: JSX.Element[] = []

        for (const currentGenericItem of results) {

            switch (currentGenericItem.interface) {

                case "GenericVideoResult":
                    let currentVideoItem = <VideoSearchItem
                        key={currentGenericItem.id}
                        item={currentGenericItem as GenericVideoResult}
                    />
                    searchResultItems.push(currentVideoItem);
                    break;

                case "GenericTrackResult":
                    let currentTrackItem = <TrackSearchItem
                        key={currentGenericItem.id}
                        item={currentGenericItem as GenericTrackResult}
                    />
                    searchResultItems.push(currentTrackItem);
                    break;

                case "GenericLivestreamResult":
                    let currentLivestreamItem =
                        <LivestreamSearchItem
                            key={currentGenericItem.id}
                            item={currentGenericItem as GenericLivestreamResult}
                        />
                    searchResultItems.push(currentLivestreamItem);

            }

        }

        return searchResultItems

    }
}

export default SearchResultComponentFactory;