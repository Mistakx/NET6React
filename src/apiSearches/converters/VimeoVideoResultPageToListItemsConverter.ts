import {GenericVideoResult} from "../../models/apiSearches/GenericResults";
import {VimeoSearchVideoResultPage} from "../../models/apiSearches/VimeoSearchResult";

export class VimeoVideoResultPageToListItemsConverter {

    public static convert(vimeoVideosSearchResultPage: VimeoSearchVideoResultPage) {

        let items: GenericVideoResult[] = []

        vimeoVideosSearchResultPage.data.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                id: item.uri.split("/videos/")[1],
                title: item.name,
                creator: item.user.name,
                duration: item.duration,
                thumbnailUrl: item.pictures.base_link,
                createdAt: item.created_time.toDateString(),
                views: item.stats.plays
            }

            items.push(currentGenericVideoItem)

        })

        return items;

    }

}