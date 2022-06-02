import {GenericVideoResult} from "../../../models/apiRequests/GenericResults";
import {VimeoSearchVideoResultPage} from "../../../models/apiRequests/VimeoSearchResult";

export class VimeoVideoResultPageToListItemsConverter {

    public static convert(vimeoVideosSearchResultPage: VimeoSearchVideoResultPage) {

        let items: GenericVideoResult[] = []

        vimeoVideosSearchResultPage.data.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                resultType: "GenericVideoResult",
                platformId: item.uri.split("/videos/")[1],
                title: item.name,
                creator: item.user.name,
                // durationInSeconds: item.duration,
                thumbnailUrl: item.pictures.base_link,
                // createdAt: item.created_time.toString(),
                // views: item.stats.plays
                playerFactoryName: "MultiPlatformPlayerFactory",
                platformPlayerUrl: "https://vimeo.com/"
            }

            items.push(currentGenericVideoItem)

        })

        return items;

    }

}