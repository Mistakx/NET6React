import {GenericVideoResult} from "../../../models/apiRequests/GenericResults";
import {TwitchSearchClipsResultPage} from "../../../models/apiRequests/TwitchSearchResults";

export class TwitchClipSearchResultToListItemsConverter {

    public static convert(twitchClipsSearchResult: TwitchSearchClipsResultPage) {

        let items: GenericVideoResult[] = []

        twitchClipsSearchResult.data.map(item => {

            const currentGenericClipItem: GenericVideoResult = {
                interface: "GenericVideoResult",
                id: item.id,
                title: item.title,
                creator: item.creator_name,
                // durationInSeconds: item.duration,
                thumbnailUrl: item.thumbnail_url,
                // createdAt: item.created_at,
                // views: item.view_count
                playerFactoryName: "TwitchClipPlayerFactory"
            }

            items.push(currentGenericClipItem)

        })

        return items;

    }

}