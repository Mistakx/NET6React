import {GenericLivestreamResult} from "../../../models/apiRequests/GenericResults";
import {TwitchSearchChannelsResultPage} from "../../../models/apiRequests/TwitchSearchResults";

export class TwitchLivestreamSearchResultToListItemsConverter {

    public static convert(twitchChannelSearchResult: TwitchSearchChannelsResultPage) {

        let items: GenericLivestreamResult[] = []

        twitchChannelSearchResult.data.map(item => {

            const currentGenericLivestreamItem: GenericLivestreamResult = {
                interface: "GenericLivestreamResult",
                id: item.display_name,
                title: item.title,
                creator: item.display_name,
                thumbnailUrl: item.thumbnail_url,
                // createdAt: item.started_at,
                gameName: item.game_name,
                playerFactoryName: "MultiPlatformPlayerFactory",
                platformPlayerUrl: "https://www.twitch.tv/",
            }

            items.push(currentGenericLivestreamItem)

        })

        return items;

    }

}