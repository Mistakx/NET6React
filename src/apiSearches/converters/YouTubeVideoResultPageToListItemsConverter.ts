import {GenericVideoResult} from "../../models/apiSearches/GenericResults";
import {YouTubeVideoSearchResultPage} from "../../models/apiSearches/YouTubeSearchResult";
import moment from 'moment'

export class YouTubeVideoResultPageToListItemsConverter {

    public static convert(youtubeVideosSearchResultPage: YouTubeVideoSearchResultPage) {

        let items: GenericVideoResult[] = []

        youtubeVideosSearchResultPage.items.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                id: item.id.videoId,
                title: item.snippet.title,
                creator: item.snippet.channelTitle,
                // durationInSeconds: moment.duration(item.details.items[0].contentDetails.duration).asSeconds(),
                thumbnailUrl: item.snippet.thumbnails.high.url,
                // createdAt: item.snippet.publishedAt,
                // views: item.details.items[0].statistics.viewCount
            }

            items.push(currentGenericVideoItem)

        })

        return items;

    }

}