import {SpotifyTracksPage} from "../../../models/apiResponses/SpotifySearchResults";
import {GenericTrackResult} from "../../../models/apiResponses/GenericResults";

export class SpotifyTracksPageToListItemsConverter {

    public static convert(spotifyTracksPage: SpotifyTracksPage) {

        let items: GenericTrackResult[] = []

        spotifyTracksPage.items.map(item => {

            const currentGenericTrackItem: GenericTrackResult = {
                platformName: "Spotify",
                resultType: "GenericTrackResult",
                platformId: item.id,
                title: item.name,
                creator: "",
                thumbnailUrl: item.album.images[0].url, // 0-640x640; 1-300x300; 2-64x64
                // createdAt: item.album.release_date,
                albumName: "",
                playerFactoryName: "SpotifyPlayerFactory"
            }

            items.push(currentGenericTrackItem)

        })

        return items;

    }

}