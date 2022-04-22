import {PlayerBuilder} from "./PlayerBuilder";
import {SpotifyPlayerComponent} from "../components/players/SpotifyPlayerComponent";

export class SpotifyPlayer extends PlayerBuilder {

    public buildComponent(trackId: string, width: number, height: number): JSX.Element {

        return <SpotifyPlayerComponent contentId={trackId} width={width} height={height}/>;

    }

}