import {GenericVideoResult} from "../../../models/apiResponses/GenericResults";
import {TwitchSearchClipsResultPage} from "../../../models/apiResponses/TwitchSearchResults";

export class TwitchClipSearchResultToListItemsConverter {

    public static convert(twitchClipsSearchResult: TwitchSearchClipsResultPage) {

        let items: GenericVideoResult[] = []

        twitchClipsSearchResult.data.map(item => {

            const currentGenericClipItem: GenericVideoResult = {
                platformName: "Twitch",
                resultType: "GenericVideoResult",
                platformId: item.id,
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