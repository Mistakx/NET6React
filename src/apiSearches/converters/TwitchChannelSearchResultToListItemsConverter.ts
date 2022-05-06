import {GenericLivestreamResult} from "../../models/apiSearches/GenericResults";
import {TwitchSearchChannelsResultPage} from "../../models/apiSearches/TwitchSearchResults";

export class TwitchChannelSearchResultToListItemsConverter {

    public static convert(twitchChannelSearchResult: TwitchSearchChannelsResultPage) {

        let items: GenericLivestreamResult[] = []

        twitchChannelSearchResult.data.map(item => {

            const currentGenericLivestreamItem: GenericLivestreamResult = {
                id: item.display_name,
                title: item.title,
                creator: item.display_name,
                thumbnailUrl: item.thumbnail_url,
                // createdAt: item.started_at,
                gameName: item.game_name
            }

            items.push(currentGenericLivestreamItem)

        })

        return items;

    }

}