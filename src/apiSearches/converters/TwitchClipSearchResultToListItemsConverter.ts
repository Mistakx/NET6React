import {SpotifyTracksPage} from "../../models/apiSearches/SpotifySearchResults";
import {GenericTrackResult, GenericVideoResult} from "../../models/apiSearches/GenericResults";
import {TwitchSearchClipsResultPage} from "../../models/apiSearches/TwitchSearchResults";

export class TwitchClipSearchResultToListItemsConverter {

    public static convert(twitchClipsSearchResult: TwitchSearchClipsResultPage) {

        let items: GenericVideoResult[] = []

        twitchClipsSearchResult.data.map(item => {

            const currentGenericClipItem: GenericVideoResult = {
                id: item.id,
                title: item.title,
                creator: item.creator_name,
                duration: item.duration,
                thumbnailUrl: item.thumbnail_url,
                createdAt: item.created_at,
                views: item.view_count
            }

            items.push(currentGenericClipItem)

        })

        return items;

    }

}