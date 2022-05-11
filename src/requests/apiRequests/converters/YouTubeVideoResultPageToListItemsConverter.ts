import {GenericVideoResult} from "../../../models/apiRequests/GenericResults";
import {YouTubeVideoSearchResultPage} from "../../../models/apiRequests/YouTubeSearchResult";
import {MultiPlatformPlayerFactory} from "../../../playerFactory/MultiPlatformPlayerFactory";

export class YouTubeVideoResultPageToListItemsConverter {

    public static convert(youtubeVideosSearchResultPage: YouTubeVideoSearchResultPage) {

        let items: GenericVideoResult[] = []

        youtubeVideosSearchResultPage.items.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                interface: "GenericVideoResult",
                id: item.id.videoId,
                title: item.snippet.title,
                creator: item.snippet.channelTitle,
                // durationInSeconds: moment.duration(item.details.items[0].contentDetails.duration).asSeconds(),
                thumbnailUrl: item.snippet.thumbnails.high.url,
                // createdAt: item.snippet.publishedAt,
                // views: item.details.items[0].statistics.viewCount
                playerFactory: new MultiPlatformPlayerFactory("https://www.youtube.com/watch?v=")
            }

            items.push(currentGenericVideoItem)

        })

        return items;

    }

}