import {SpotifyTracksPage} from "../../models/apiSearches/SpotifySearchResults";
import {GenericTrackResult} from "../../models/apiSearches/GenericResults";

export class SpotifyTracksPageToListItemsConverter {

    public static convert(spotifyTracksPage: SpotifyTracksPage) {

        let items: GenericTrackResult[] = []

        spotifyTracksPage.items.map(item => {

            const currentGenericTrackItem: GenericTrackResult = {
                id: item.id,
                title: item.name,
                creator: item.artists[0].name,
                duration: item.duration_ms,
                thumbnailUrl: item.album.images[0].url,
                createdAt: item.album.release_date
            }

            items.push(currentGenericTrackItem)

        })

        return items;

    }

}