import {SpotifyTracksPage} from "../../../models/apiRequests/SpotifySearchResults";
import {GenericTrackResult} from "../../../models/apiRequests/GenericResults";
import {SpotifyPlayerFactory} from "../../../playerFactory/SpotifyPlayerFactory";

export class SpotifyTracksPageToListItemsConverter {

    public static convert(spotifyTracksPage: SpotifyTracksPage) {

        let items: GenericTrackResult[] = []

        spotifyTracksPage.items.map(item => {

            const currentGenericTrackItem: GenericTrackResult = {
                interface: "GenericTrackResult",
                id: item.id,
                title: item.name,
                creator: item.artists[0].name,
                duration: item.duration_ms,
                thumbnailUrl: item.album.images[0].url, // 0-640x640; 1-300x300; 2-64x64
                // createdAt: item.album.release_date,
                albumName: item.album.name,
                playerFactory: new SpotifyPlayerFactory(),
            }

            items.push(currentGenericTrackItem)

        })

        return items;

    }

}