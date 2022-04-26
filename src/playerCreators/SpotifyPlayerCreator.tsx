import {PlayerCreator} from "./PlayerCreator";
import {SpotifyPlayer} from "../components/players/SpotifyPlayer";

export class SpotifyPlayerCreator extends PlayerCreator {

    public create(trackId: string, trackThumbnailUrl: string): JSX.Element {

        return <SpotifyPlayer contentId={trackId} width={super.getPlayerWidth()} height={super.getPlayerHeight()} thumbnailUrl={trackThumbnailUrl}/>;

    }

}