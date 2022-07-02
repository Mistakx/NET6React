import {GenericPodcastResult} from "../../../models/apiResponses/GenericResults";
import {SimplifiedEpisode} from "spotify-types";

export class SpotifyPodcastsPageToListItemsConverter {

    public static convert(spotifyPodcastsPage: SimplifiedEpisode[]) {

        let items: GenericPodcastResult[] = []
        
        spotifyPodcastsPage.map(item => {

            const currentGenericPodcastItem: GenericPodcastResult = {
                platformName: "Spotify",
                resultType: "GenericPodcastResult",
                platformId: item.id,
                title: item.name,
                creator: "",
                href: item.href,
                thumbnailUrl: item.images[0].url, // 0-640x640; 1-300x300; 2-64x64
                url: item.external_urls.spotify,
                playerFactoryName: "SpotifyPlayerFactory"
            }

            items.push(currentGenericPodcastItem)

        })
            
        return items;

    }

}