import {GenericVideoResult} from "../../../models/apiRequests/GenericResults";
import {VimeoSearchVideoResultPage} from "../../../models/apiRequests/VimeoSearchResult";
import {MultiPlatformPlayerCreator} from "../../../playerCreators/MultiPlatformPlayerCreator";

export class VimeoVideoResultPageToListItemsConverter {

    public static convert(vimeoVideosSearchResultPage: VimeoSearchVideoResultPage) {

        let items: GenericVideoResult[] = []

        vimeoVideosSearchResultPage.data.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                id: item.uri.split("/videos/")[1],
                title: item.name,
                creator: item.user.name,
                // durationInSeconds: item.duration,
                thumbnailUrl: item.pictures.base_link,
                // createdAt: item.created_time.toString(),
                // views: item.stats.plays
                playerCreator: new MultiPlatformPlayerCreator("https://vimeo.com/")
            }

            items.push(currentGenericVideoItem)

        })

        return items;

    }

}