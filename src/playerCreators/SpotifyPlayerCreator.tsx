import {PlayerCreator} from "./PlayerCreator";
import {SpotifyPlayerComponent} from "../components/players/SpotifyPlayerComponent";

export class SpotifyPlayerCreator extends PlayerCreator {

    public create(trackId: string, width: number, height: number): JSX.Element {

        return <SpotifyPlayerComponent contentId={trackId} width={width} height={height}/>;

    }

}