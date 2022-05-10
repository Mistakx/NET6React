import {GenericVideoResult} from "../../../models/apiRequests/GenericResults";
import {TwitchSearchClipsResultPage} from "../../../models/apiRequests/TwitchSearchResults";
import {TwitchClipPlayerCreator} from "../../../playerCreators/TwitchClipPlayerCreator";

export class TwitchClipSearchResultToListItemsConverter {

    public static convert(twitchClipsSearchResult: TwitchSearchClipsResultPage) {

        let items: GenericVideoResult[] = []

        twitchClipsSearchResult.data.map(item => {

            const currentGenericClipItem: GenericVideoResult = {
                id: item.id,
                title: item.title,
                creator: item.creator_name,
                // durationInSeconds: item.duration,
                thumbnailUrl: item.thumbnail_url,
                // createdAt: item.created_at,
                // views: item.view_count
                playerCreator: new TwitchClipPlayerCreator()
            }

            items.push(currentGenericClipItem)

        })

        return items;

    }

}