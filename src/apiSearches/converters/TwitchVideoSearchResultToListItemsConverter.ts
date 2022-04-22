import {SpotifyTracksPage} from "../../models/apiSearches/SpotifySearchResults";
import {GenericTrackResult, GenericVideoResult} from "../../models/apiSearches/GenericResults";
import {TwitchSearchClipsResultPage, TwitchSearchVideoResultPage} from "../../models/apiSearches/TwitchSearchResults";

export class TwitchVideoSearchResultToListItemsConverter {

    private static parseDuration(duration: string) {

        const hoursSplice = duration.split("h")
        const hours = parseInt(hoursSplice[0])

        const minutesSplice = hoursSplice[1].split("m")
        const minutes = parseInt(minutesSplice[0])

        const secondsSplice = minutesSplice[1].split("s")
        const seconds = parseInt(secondsSplice[0])

        const totalSeconds = hours * 3600 + minutes * 60 + seconds

        return totalSeconds

    }

    public static convert(twitchVideosSearchResult: TwitchSearchVideoResultPage) {

        let items: GenericVideoResult[] = []

        twitchVideosSearchResult.data.map(item => {

            const currentGenericVideoItem: GenericVideoResult = {
                id: item.id,
                title: item.title,
                creator: item.user_name,
                duration: this.parseDuration(item.duration),
                thumbnailUrl: item.thumbnail_url,
                createdAt: item.created_at,
                views: item.view_count
            }

            items.push(currentGenericVideoItem)

        })

        return items;

    }

}